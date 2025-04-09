const express = require ("express")
const app = express()
const PORT = process.env.PORT || 3000 
const cors = require ("cors")
app.use(cors({ origin: "https://login-frontend-rho.vercel.app/" }));

var uname="karthik"
var pass=123

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.post("/login",function(req,res){

    console.log(req.body)

    const username=req.body.username
    const password=req.body.password

    if(uname===username && pass==password){
        res.send(true)
        console.log("Login Successfull")
    }else{
        res.send(false)
        console.log("Login UnSuccessfull")
    }

})

app.listen(PORT,function(){
    console.log("Server Started............................")
})