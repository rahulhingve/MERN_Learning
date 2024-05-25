const express = require("express");

const app = express();

app.get("/health-checkup", (req , res)=>{
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if (username!="rahul" || password !="123"){
        res.status(400).json({"msg": "kuch to gadbad hai input me"})
        return
    }
    if (kidneyId !=1 && kidneyId !=2){
        res.status(400).json({"msg": "kuch to gadab hai"})
        return
    }
    res.json({
        msg:"your kidney is fine!"
    })
});
app.listen(3000);