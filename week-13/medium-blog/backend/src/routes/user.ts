import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { signinInput, signupInput } from "@rahulhingve/common-medium-blog";

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string
        SECRET_KEY: string

    },

}>();

userRouter.post('/signup', async (c) => {
    const body = await c.req.json()
    const { success } = signupInput.safeParse(body)
    if (!success) {
        c.status(403)
        return c.json({
            msg: "wrong input"
        })
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());




    try {
        const user = await prisma.user.create({
            data: {
                name: body.name,
                email: body.email,
                password: body.password


            }
        });

        const jwt = await sign({ id: user.id }, c.env.SECRET_KEY);
        return c.json(jwt)
    } catch (e) {
        c.status(403);
        return c.json({
            error: "error while sign up"
        });
    }




})


userRouter.post('/signin', async (c) => {
    const body = await c.req.json();

    const { success } = signinInput.safeParse(body)
    if (!success) {
        c.status(403)
        return c.json({
            msg: "wrong input"
        })
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());



    try {
        const user = await prisma.user.findUnique({
            where: { email: body.email, password: body.password }
        })
        if (!user) {
            return c.json({
                error: "wrong email and password"
            })
        }

        const token = await sign({ id: user.id }, c.env.SECRET_KEY)
        return c.json(
            token
        )
    } catch (e) {
        return c.json({
            error: "something went wrong"
        })
    }



})