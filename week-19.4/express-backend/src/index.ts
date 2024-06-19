import express from "express"

import { createClient } from "redis"


const app = express();
app.use(express.json());


const client = createClient();

client.connect();

app.post("/submiy",(req,res)=>{
    const {problemId , userId , code , language} = req.body;

    client.lPush("submissions", JSON.stringify( {problemId , userId , code , language}))

    res.json(({
        msg:"recived"
    }))


})

app.listen(3000);


