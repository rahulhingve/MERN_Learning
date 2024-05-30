import { Hono } from 'hono'

const app = new Hono()

app.post('/api/v1/user/signup', (c) => {
  return c.text('signup rpute Hono!')
})


app.post('/api/v1/user/signin',(c)=>{
  return c.text('signinnnnnnnn Hono!')
})




app.post('/api/v1/blog',(c)=>{
  return c.text('post blog Hono!')
})



app.put('/api/v1/blog',(c)=>{
  return c.text('put  blog!')
})


app.get('/api/v1/blog/bulk',(c)=>{
  return c.text('bulk')
})

app.get('/api/v1/blog/:id',(c)=>{
  return c.text('idddddd!')
})




export default app
