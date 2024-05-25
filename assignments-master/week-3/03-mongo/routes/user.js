const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User ,Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

  const newUser = await User.create({
        username: username,
        password: password
    })
    res.json({
        message:"User created successfully"
    })

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
    const username = req.headers.username;

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
    const username = req.headers.username;
    const password = req.headers.password;

    const users =await User.findOne({
        username,
        password
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