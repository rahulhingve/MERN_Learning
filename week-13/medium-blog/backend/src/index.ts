import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'


const app = new Hono<{
  Bindings: {
    DATABASE_URL: string
    SECRET_KEY: string
  }
}>()

app.use('/api/v1/blog/*', async(c,next) => {


try{
  const header =  c.req.header("authorization");
  if(!header){
    return c.json({
      error:"Plz Sign IN Again"
    })
  }
  
  const response = await verify(header,c.env.SECRET_KEY)
  
  if(response.id){
    next();
  }else{
    c.status(403)
    return c.json({
      error :"Unauthorized"
    })
  }
}catch(e){
  c.status(403)
  return c.json({
    error:"Wrong Authorization Sign In Again"
  })
}




   
})

app.post('/api/v1/user/signup', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());


  const body = await c.req.json()

  try {
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password


      }
    });

    const jwt = await sign({ id: user.id }, c.env.SECRET_KEY);
    return c.json({ jwt })
  } catch (e) {
    c.status(403);
    return c.json({
      error: "error while sign up"
    });
  }




})


app.post('/api/v1/user/signin', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());


  const body = await c.req.json();
try{
  const user = await prisma.user.findUnique({
    where:{email:body.email,password:body.password}
   })
   if(!user){
    return c.json({
      error:"wrong email and password"
    })
   }

   const token  = await sign({id:user.id},c.env.SECRET_KEY)
   return c.json({
    token
   })
}catch(e){
  return c.json({
    error:"something went wrong"
  })
}



})




app.post('/api/v1/blog', (c) => {
  return c.text('post blog Hono!')
})



app.put('/api/v1/blog', (c) => {
  return c.text('put  blog!')
})


app.get('/api/v1/blog/bulk', (c) => {
  return c.text('bulk')
})

app.get('/api/v1/blog/:id', (c) => {
  return c.text('idddddd!')
})




export default app
