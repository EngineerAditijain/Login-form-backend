

const async = require('hbs/lib/async')
const {UserEntity} = require('../models/auth.model')

exports.saveUser = async (req,res)=>{
    try {
    const { userName, password } = req.body;
    let  student= new UserEntity({
         userName : userName,
         password: password
     })
     let saveData = await student.save();
     res.status(202).json({
         message: `${saveData.userName} is saved successfully`
     })
} catch (error) {
    console.log(error);
    res.status(500).json({
        message : error.message
    })
}
}
 exports.getAllData = async (req, res, next) => {
    
    try {
     
     let data = await UserEntity.find();
     return res.status(200).json({ data });
    } catch (err) {
      console.log(err);
    
  
    if (!data) {
      return res.status(404).json({ message: "No data found" });
    }
   
}
  };
