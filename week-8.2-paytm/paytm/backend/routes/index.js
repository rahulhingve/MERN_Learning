const express = require("express");
const zod = require("zod");
const userRoute = require("./user")
const router = express.Router();
app.use(express.json());
app.use("api/v1/user",userRoute)


app.post("/signup",function (req , res){
 const username = zod.string(req.body.username).email();
 const firstName =zod.string(req.body.username);
 const lastName = zod.string(req.body.username);
 const password = zod.string(req.body.username).min(8);



})

module.exports=router;