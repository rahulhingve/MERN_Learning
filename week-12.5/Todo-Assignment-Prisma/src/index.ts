import { PrismaClient } from "@prisma/client";
import { any, string, z } from "zod"
import express  from "express"
const prisma = new PrismaClient();

const app = express();
app.use(express.json())

const signupSchema = z.object({

    username: z.string(),
    password: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email()


})

app.post("/signup", async (req, res) =>{

    const parsedSchema = signupSchema.safeParse(req.body)
    const success = parsedSchema.success

    if (!success) {
        return res.status(411).json({
            msg: "wrong inputs"
        })
    }

    const exUser = await prisma.user.findFirst({
        where: {
            username: req.body.username,
            email: req.body.email

        }
    })

if(exUser){
    return res.status(403).json({
        msg:"email or username already taken use different"
    })
}

 await prisma.user.create({
    data:{
        username:req.body.username,
        password:req.body.password,
        email:req.body.email,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
       

    }
})
res.json({
    message: "User created successfully",

    
})
return;


})










app.listen(3000);
