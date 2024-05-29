import { PrismaClient } from "@prisma/client";
import { any, boolean, string, z } from "zod"
import express from "express"
import { title } from "process";
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

app.post("/signup", async (req, res) => {

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

    if (exUser) {
        return res.status(403).json({
            msg: "email or username already taken use different"
        })
    }

    await prisma.user.create({
        data: {
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,


        }
    })
    res.json({
        message: "User created successfully",


    })
    return;


})



const todoSchema = z.object({
    title: z.string(),
    description: z.string(),
    done: boolean().default(false)
})



app.post("/newtodo", async (req, res) => {

    const parsedSchema = todoSchema.safeParse(req.body);
    const success = parsedSchema.success;

    if (!success) {
        return res.status(403).json({
            msg: "wrong inputs"
        })
    }

    const username = req.headers.username as string;
    const email = req.headers.email as string;
    if (!username || !email) {
        return res.json({
            msg: "null field "
        })
    }

    const user = await prisma.user.findUnique({
        where: {
            username: username,
            email: email
        }
    })

    if (!user) {
        return res.status(404).json({
            msg: "galat user"
        })
    }

    await prisma.todos.create({

        data: {

            title: req.body.title,
            description: req.body.description,
            done: req.body.done,
            userId: user.id,
        }
    })
    res.json({
        message: "Todo created successfully",


    })
    return;

})

app.get("/gettodos", async (req, res) => {

    const username = req.headers.username as string;
    const email = req.headers.email as string;

    if (!username || !email) {
        return res.json({
            msg: "null field"
        })
    }

    const user = await prisma.user.findUnique({
        where: { username, email }
    })

    if (!user) {
        return res.json({
            msg: "u are not a user"
        })
    }

    const todos = await prisma.todos.findMany({
        where:{userId:user.id}
})

   return res.json({
    todos
   })

})






app.listen(3000);
