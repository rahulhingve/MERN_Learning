const express = require("express");
const { authMiddleware } = require("../middleware");

const {Account} = require("../db");
const {default: mongoose}= require("mongoose");
const router = express.Router();



router.get("/balance", authMiddleware, async (req, res) => {

    const account = await Account.findOne({
        userId: req.userId
    })

    res.status(200).json({
        balance: account.balance
    })

})

router.post("/transfer",authMiddleware, async (req,res)=>{

const session = await mongoose.startSession();

session.startTransaction();
const {amount , to} = req.body;

const account = await Account.findOne({
    userId:req.userId,

}).session(session);

if (!account||account.balance<amount){
    await session.abortTransaction();
    return res.status(400).json({
        message: "Insufficient balance"
    })
}


const toAccount  = await Account.findOne({
    userId:to   
}).session(session);

if(!toAccount){
    await session.abortTransaction();
    return res.status(400).json({
        message: "Invalid account"
    })
}



await Account.updateOne(
    {userId: req.userId},
    {
        $inc:{
            balance:-amount
        }
    }
).session(session);


await Account.updateOne(
    {userId: to},
{$inc:{
    balance:+amount
}}
).session(session)

await session.commitTransaction();

res.status(200).json({
    message:"Transaction Successful"
})

})





// this one code has some bugs

// router.post("/transfer", authMiddleware, async (req, res) => {

//     const { amount, to } = req.body;

//     const thisUser = await Account.findOne({
//         userId: req.userId
//     })
   

//     const toAccount = await Account.findOne({
//         userId: to
//     });

//     if (!toAccount) {
//         return res.status(400).json({
//             message: "Invalid account"
//         })
//     }

//     if (amount > thisUser.balance) {
//         return res.status(400).json({
//             message: "Insufficient balance"
//         })
//     }

//      await Account.updateOne({
//         usedId: success.to,
//         balance: +amount
//     })
//      await Account.updateOne({
//         usedId: req.userId,
//         balance: -amount
//     })

//     res.status(200).json({
//         message: "Transfer successful"
//     })
 
// })


module.exports = router