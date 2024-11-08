const express = require("express")
const {UserModel, userModel} = require("./models");
const { Keypair } = require("@solana/web3.js");



const app= express()
app.use(express.json())
const JWT_SECRET = "12345"


app.post("/api/v1/signup",async(req,res) =>{
    const username = req.body.username;
    const password = req.body.password

    //validate the inputs using zod 


    userModel.create({
        username,
        password,
        publicKey: keypair.publicKey.toString(),
        privateKey: keypair.secretKey.toString()
    })
    res.json({
        message: keypair.publicKey.toString()
    })
})

app.post("/api/v1/signin",async (req,res) =>{
    const username = req.body.username;
    const password = req.body.password;


    const user =  await userModel.findOne({
        username:username,
        password:password
    })

if(user){
const token = jwt.sign({
    id:user
}, JWT_SECRET)
}else{
    res.json({
        message: " Sign In"
    })
}
}


)
app.post("/api/v1/txn/sign", (req,res) =>{
    res.json({
        message: " Sign Up"
    })
})

app.get("/api/v1/txn", (req,res) =>{
    res.json({
        message: " Sign up"
    })
})

app.listen(3000);