const gOmraModel = require ("../models/gOmra_model")
const bcrypt = require("bcrypt")


module.exports={
  
    create:(req,res)=>{
       
         const user= new gOmraModel(req.body)
         user.save(req.body,(err,item)=>{
            if(err){
                res.status(406).json({success:false,message:"failed to created hotel",data:null})    
            }else{
                res.status(201).json({success:true, message:"hotel created successfully",data:item})
      
            }
         })
      
     },
     
         getall: function(req,res){
            gOmraModel.find({},(err,items)=>{
              if(err){
                     res.status(406).json({success:false,message:"cannot got all cars",data:null})    
              }else{
                     res.status(201).json({success:true, message:"list of cars",data:items})
              } 
     
             })
     
         },
         update:function(req,res){
     
            gOmraModel.findByIdAndUpdate(req.params.id,req.body,{new:true},function(err,item){
             if(err){
                 res.status(406).json({success:false,message:"cannot update",data:null}) 
             }else{
                 res.status(201).json({success:true, message:"  updated ",data:item})
             }
         })    
         },
         getbyname:function(req,res){
            gOmraModel.findOne({nom:req.query.nom},function(err,item){
                 
             if(err){
                 res.status(406).json({success:false,message:"cannot get the name ",data:null}) 
             }else{
                 res.status(201).json({success:true, message:"   getted with name ",data:item})    
             }
             })
         },
         getbyid:function(req,res){
            gOmraModel.findById(req.params.id,function(err,item){
          
                 if(err){
                     res.status(406).json({success:false,message:"cannot founded id  ",data:null}) 
                 }else{
                     res.status(201).json({success:true, message:" get by id ",data:item})    
                 }
             })
         },
         delete:function(req,res){
            gOmraModel.findByIdAndRemove(req.params.id,function(err,item){
                 if(err){
                     res.status(406).json({success:false,message:"failed deleted car  by id ",data:null}) 
                 }else{
                     res.status(201).json({success:true, message:"the car  deleted ",data:item})    
                 }   
             })
         }



}