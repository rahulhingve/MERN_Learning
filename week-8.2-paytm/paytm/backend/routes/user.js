const express = require("express");
const zod = require("zod");
const {User} = require("../db")
const router = express.Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
app.use(express.json());


const signUpScheme = zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string().min(8)

})

router.post("/signup", async function (req, res) {

    const body = req.body;


    // this is very high lever hard to grasp

    // const {success} = signUpScheme.safeParse(req.body);

    const parsedResult = signUpScheme.safeParse();
    const success = parsedResult.success();
    if (!success) {
        return res.status(411).json({

            message: "Incorrect inputs"
        })
    }

    const exUser = await User.findOne({
        username : body.username
    })

    if(exUser){
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
    const token = jwt.sign({
        userId
    },JWT_SECRET)


    res.json({
        message: "User created successfully",
        token: token
    })

})

module.exports=router;