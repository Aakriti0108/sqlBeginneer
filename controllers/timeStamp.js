
const timeStamp_data =  require("../models/timeStamp")

exports.createTimeStamp =  (req,res)=>{
    console.log("started",req.body)
    let{value}=req.body;
    timeStamp_data.create({value})
    .then(result=>{
        console.log("created",result)
        res.status(201).json({result:result})
    })
    .catch(err=>{
        res.status(500).json(err)
    })
}

exports.getAllTimeStamp = (req,res)=>{
    console.log("getApi")
    timeStamp_data.findAll({
        attributes: ['id', 'value']
      })
    .then(result=>{
        console.log(result)
        res.status(201).json({status:true,data:result})
    })
    .catch(err=>{
     res.status(500).json(err)
    })
}