const express = require("express");
const zod = require("zod");
const { User , Account} = require("../db")
const router = express.Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require("../middleware");


const signUpScheme = zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string().min(8)

})

router.post("/signup", async  (req, res)=> {

    


    // this is very high lever hard to grasp

    // const {success} = signUpScheme.safeParse(req.body);

    const parsedResult = signUpScheme.safeParse(req.body);
    const success = parsedResult.success;
    if (!success) {
        return res.status(411).json({

            message: "Incorrect inputs"
        })
    }

    const exUser = await User.findOne({
        username: req.body.username
    })

    if (exUser) {
        return res.status(411).json({

            message: "Email already taken / Incorrect inputs"
        })
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,

    })
    const userId = user._id;
    const randomBal = Math.random() * (10000 - 1) + 1;
    await Account.create({
        userId,
        balance: randomBal
    })


    const token = jwt.sign({
        userId
    }, JWT_SECRET)


    res.json({
        message: "User created successfully",
        token: token
    })

})



const signInSchema = zod.object({
    username: zod.string().email(),
    password: zod.string(),
})

router.post("/signin", async (req, res) => {

    const body = req.body;

    const parsedResult = signInSchema.safeParse(body);
    const success = parsedResult.success;

    if (!success) {
        return res.status(411).json({
            message: "Error while logging in"
        })
    }

    const findUser = await User.findOne({
        username: body.username,
        password: body.password,
    })
    if (findUser) {
        const userId = findUser._id;
        const token = jwt.sign({
            userId
        }, JWT_SECRET)

        res.status(200).json({
            token: token
        })
        return;
    }

    res.status(411).json({
        message: "Error while logging in"
    })

})


const updateSchema = zod.object({
    password: zod.string().min(8).optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})

router.put("/", authMiddleware, async (req, res) => {
    const parsedResult = updateSchema.safeParse(req.body);
    const success = parsedResult.success;
    if (!success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }

    await User.updateOne({
        _id: req.userId
    }, req.body);
    res.status(200).json({
        message: "Updated successfully"
    })


})

router.get("/bulk", authMiddleware, async (req, res) => {
    const filter = req.query.filter || "";


    const users = await User.find({

        $or: [{
            firstName: {
                "$regex": filter
            }

        }, {
            lastName: {
                "$regex": filter
            }
        }]


    })
    res.status(200).json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id

        }))
    })

})


module.exports = router;