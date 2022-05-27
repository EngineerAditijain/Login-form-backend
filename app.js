const express=require("express");
const path = require("path");
const app=express();
const port = process.env.PORT || 3000;
const config = require('./app/config/mongo');
const cors = require("cors");
app.use(express.json());
app.use(cors());
//const static_path =path.join(__dirname)
console.log(path.join(__dirname));
//app.use(express.static())



const authRoute = require('./app/routes/auth.route');

app.use('/auth',authRoute)
app.get("/",(req,res)=>{
    res.send("hello from the Aditi")

})
app.listen(port,()=>{
    console.log(`server is running at ${port} `);
})