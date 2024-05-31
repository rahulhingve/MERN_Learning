import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { createBlogInput, updateBlogInput } from "@rahulhingve/common-medium-blog";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        SECRET_KEY: string;

    },
    Variables: {
        userId: string;
    }
}>();


// midddleware ///////////////////

blogRouter.use('/*', async (c, next) => {

    try {
        const header = c.req.header("authorization");
        if (!header) {
            return c.json({
                error: "Plz Sign IN Again"
            })
        }

        const response = await verify(header, c.env.SECRET_KEY)

        if (response.id) {
            c.set("userId", response.id as string)
            await next();
        } else {
            c.status(403)
            return c.json({
                error: "Unauthorized"
            })
        }
    } catch (e) {
        c.status(403)
        return c.json({
            error: "Wrong Authorization Sign In Again"
        })
    }

})


blogRouter.post('/', async (c) => {


    const body = await c.req.json();

    const {success}=createBlogInput.safeParse(body)
    if (!success){
        c.status(403)
        return c.json({
            msg:"wrong input"
        })
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,

    }).$extends(withAccelerate());

   
    const userId = c.get("userId")
    try {
        const post = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                published: false,
                authorId: userId
            }
        })
        return c.json({
            id: post.id
        })
    } catch (e) {
        return c.json({
            error: "I think UserId nahi mili from Post.blog Route"
        })
    }


})



blogRouter.put('/', async (c) => {


    const body = await c.req.json();

    const {success}=updateBlogInput.safeParse(body)
    if (!success){
        c.status(403)
        return c.json({
            msg:"wrong input"
        })
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());


    try {
        const updateBlogPost = await prisma.post.update({
            where: { id: body.id },
            data: {
                title: body.title,
                content: body.content
            }
        })
        return c.json({
            id: updateBlogPost.id
        })
    } catch (e) {
        return c.json({
            error: "Pata nahi kya hua Sahi input do .this is put route of blog "
        })
    }

})
blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());



    try {
        const blogTitle = await prisma.post.findMany();
        return c.json({
            blogTitle
        })

    } catch (e) {
        return c.json({
            error: "Bhai isme kyu error aagaya teko get router from blog/bulk"
        })
    }
})

blogRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const id = await c.req.param("id");

    try {
        const blog = await prisma.post.findFirst({
            where: { id: id }

        })
        return c.json({
            blog
        })
    } catch (e) {
        return c.json({
            error: "ig post id nahi mili this is get router from /blog"
        })
    }
})




