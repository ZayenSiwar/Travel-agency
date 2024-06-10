const gExcursion_model = require ("../models/gExcursion_model")
const bcrypt = require("bcrypt")


module.exports={

    create:(req,res)=>{
        //    req.body.image = req.file.filename
        req.body["galleries"] =
        req.files.length <= 0
          ? [] // si 0 retourne une table vide
          : req.files.map(function (file) {
              //
              return {
                name: file.filename, // a chaque fois prend le nom d'image
                description: "photo d'excursion",
              };
            }); 
    
            const ex= new gExcursion_model(req.body)
            ex.save(req.body,(err,item)=>{
               if(err){
                   res.status(406).json({success:false,message:"failed to created excursion",data:null})    
               }else{
                   res.status(201).json({success:true, message:"excursion created successfully",data:item})
         
               }
            })
         
        },
     
         getall: function(req,res){
            gExcursion_model.find({},(err,items)=>{
              if(err){
                     res.status(406).json({success:false,message:"cannot got all cars",data:null})    
              }else{
                     res.status(201).json({success:true, message:"list of cars",data:items})
              } 
     
             })
     
         },
         update:function(req,res){
     
            gExcursion_model.findByIdAndUpdate(req.params.id,req.body,{new:true},function(err,item){
             if(err){
                 res.status(406).json({success:false,message:"cannot update",data:null}) 
             }else{
                 res.status(201).json({success:true, message:"the car is  updated ",data:item})
             }
         })    
         },
         getbyname:function(req,res){
            gExcursion_model.find({name:req.query.name},function(err,item){
                 
             if(err){
                 res.status(406).json({success:false,message:"cannot get the name ",data:null}) 
             }else{
                 res.status(201).json({success:true, message:" the car  getted with name ",data:item})    
             }
             })
         },
         getbyid:function(req,res){
            gExcursion_model.findById(req.params.id,function(err,item){
          
                 if(err){
                     res.status(406).json({success:false,message:"cannot founded id  ",data:null}) 
                 }else{
                     res.status(201).json({success:true, message:"the car with id ",data:item})    
                 }
             })
         },
         delete:function(req,res){
            gExcursion_model.findByIdAndRemove(req.params.id,function(err,item){
                 if(err){
                     res.status(406).json({success:false,message:"failed deleted car  by id ",data:null}) 
                 }else{
                     res.status(201).json({success:true, message:"the car  deleted ",data:item})    
                 }   
             })
         }



}