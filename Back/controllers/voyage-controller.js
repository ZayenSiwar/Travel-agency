const voyagemodel= require("../models/voyage_model")
const servicemodel = require("../models/service_model")

module.exports={
    create:(req,res)=>{

   const voyage = new voyagemodel(req.body)
   voyage.save(req.body,(err,item)=>{
    if(err){
        res.status(406).json({success:false,message:"failed to created a traval",data:null})    
    }else{servicemodel.findByIdAndUpdate(
        req.body.service,
        {$push:{ voyages:voyage}},()=>{
            voyage.populate([{path:"service ",select:"price"}
            

            ],()=>{
       
        res.status(201).json({success:true, message:"traval crated successfully",data:item})
         
       }
       )
    }
   )
    }
 })

  },

update:function(req,res){
    voyagemodel.findByIdAndUpdate(req.params.id,req.body,{new:true},function(err,item){
        if(err){
            res.status(406).json({success:false,message:"failed update",data:null})
        }else{
            res.status(201).json({success:true,message:"updated with successfully",data:item})
        }


    })
},
getall:function(req,res){
    voyagemodel.find({},(err,items)=>{

        if(err){
            res.status(406).json({success:false,message:"failed request",data:null})
        }else{
            res.status(201).json({success:true,message:"getall  with success",data:items})
        }
    })




},

getbyid:(req,res)=>{
    voyagemodel.findById(req.params.id,function(err,item){
        if(err){
            res.status(406).json({success:false,message:"failed request with id",data:null})
        }else{
            res.status(201).json({success:true,message:"traval with id  ",data:item})
        }
 
    })
    
},
getbyname:(req,res)=>{
    voyagemodel.find({name:req.query.name},function(err,item){
        if(err){
            res.status(406).json({success:false,message:"not founded",data:null})
        }else{ 
            res.status(201).json({success:true,message:"traval getby name   ",data:item})
                }
            })
},
delete:function(req,res){
    voyagemodel.findByIdAndRemove(req.params.id,(err,item)=>{
        if(err){
            res.status(406).json({success:false,message:"failed remove",data:null})
        }else{
            res.status(201).json({success:true,message:"remove with success  ",data:item})
        }  


    })




}
 






}