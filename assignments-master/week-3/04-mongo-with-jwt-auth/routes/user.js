const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User ,Course } = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config")
// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

   await User.create({
        username: username,
        password: password
    })
    res.json({
        message:"User created successfully"
    })

});

router.post('/signin',  async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({
        username
        ,password
    })
    if(user){
        const token = jwt.sign({
            username
           },JWT_SECRET);
           res.json({
            token
           })
    } else{
        res.status(403).json({
            message: "wrong email and pass"
        })
    }

   
    
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    // const username = req.headers.username;
    // const password = req.headers.password;

    const response =  await Course.find({})
    res.json({
        courses : response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const username = req.username;

    const courseId = req.params.courseId;
    await User.updateOne({
        username:username

    },{
         "$push":{
                purchasedCourses: courseId
            }
        
    })
    res.json({
            message:"course purchased successfully",
        })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.username;
    

    const users =await User.findOne({
        username
    })
    const purchased = await Course.find({
        _id: {
            "$in": users.purchasedCourses
        }
    });
    res.json({
        courses:purchased
    })



});

module.exports = router