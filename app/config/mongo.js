const mongoose = require("mongoose");
const {db} = require('./auth');
mongoose.connect(db).then(()=>{
    console.log(`connection successful`);
}).catch((e)=>{
    console.log(`no connection`,e);
})