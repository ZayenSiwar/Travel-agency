const serviceModel = require("../models/service_model")


module.exports={

    create:(req,res)=>{

   const service= new serviceModel(req.body)
   service.save(req.body,(err,item)=>{
      if(err){
          res.status(406).json({success:false,message:"failed to created service",data:null})    
      }else{
          res.status(201).json({success:true, message:"service created successfully",data:item})

      }
   })

    },


    getall: function(req,res){
        serviceModel.find({},(err,items)=>{
         if(err){
                res.status(406).json({success:false,message:"cannot got all service",data:null})    
         }else{
                res.status(201).json({success:true, message:"list of services",data:items})
         } 

        })

    },
    update:function(req,res){

    serviceModel.findByIdAndUpdate(req.params.id,req.body,{new:true},function(err,item){
        if(err){
            res.status(406).json({success:false,message:"cannot update",data:null}) 
        }else{
            res.status(201).json({success:true, message:"service updated ",data:item})
        }
    })    
    },
    getbyname:function(req,res){
        serviceModel.find({name:req.query.name},function(err,items){
            
        if(err){
            res.status(406).json({success:false,message:"cannot get the name ",data:null}) 
        }else{
            res.status(201).json({success:true, message:"service  updated ",data:items})    
        }
        })
    },
        
    getall: function(req,res){
        serviceModel.find({},(err,items)=>{
          if(err){
                 res.status(406).json({success:false,message:"cannot got all cars",data:null})    
          }else{
                 res.status(201).json({success:true, message:"list of cars",data:items})
          } 
 
         })
 
     },
    getbyid:function(req,res){
        serviceModel.findById(req.params.id,function(err,item){
     
            if(err){
                res.status(406).json({success:false,message:"cannot founded id  ",data:null}) 
            }else{
                res.status(201).json({success:true, message:"service with id ",data:item})    
            }
        })
    },
    delete:function(req,res){
        serviceModel.findByIdAndRemove(req.params.id,function(err,item){
            if(err){
                res.status(406).json({success:false,message:"failed deleted service  by id ",data:null}) 
            }else{
                res.status(201).json({success:true, message:"service deleted ",data:item})    
            }   
        })
    }











}
