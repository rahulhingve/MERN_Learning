import z from "zod";

export const signupInput = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6)
})



export const signinInput = z.object({

    email: z.string().email(),
    password: z.string().min(6)
})



export const createBlogInput = z.object({
    title: z.string(),
    content: z.string(),
    published: z.boolean()
})




export const updateBlogInput = z.object({
    title: z.string(),
    content: z.string(),
    id: z.string()

})



export type SignupValidation = z.infer<typeof signupInput>
export type SigninValidation = z.infer<typeof signinInput>
export type CreateBlogInput = z.infer<typeof createBlogInput>;
export type UpdateBlogInput = z.infer<typeof updateBlogInput>;