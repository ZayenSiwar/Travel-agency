const gRvoyagemodel = require("../models/gRvoyage_model")
const User = require('../models/user_model')



module.exports={

    create: async (req, res) => {
            try{
                const voyage = new gRvoyagemodel(req.body)
                let reservation = await voyage.save(req.body)
                await User.findByIdAndUpdate({_id:req.body.user},{
                  $push:{
                    Rvoyage:reservation
                  }
                }) 
                return  res.status(201).json({success:true, message:" reservation is created successfully",data:reservation})
               
              }catch(err){
                  console.log(err)
                res.status(406).json({success:false,message:"failed to create ",data:err})    
            
               } 
    },


getall: async(req,res)=>{
    try {  
    await gRvoyagemodel.find({}).populate({path:'voyage',model:'gVoyage'}).exec((err,items)=>{
    if(err){
        res.status(406).json({success:false,message:"failed cration ",data:null})
    }else{
        res.status(201).json({success:true,message:"created with success",data:items})
    } 
    })   
} catch (error) {
   res.status(500).json(error)     
}

}, 
getbyid: async(req,res)=>{
try {
    await gRvoyagemodel.findById(req.params.id).exec((err,item)=>{

        if(err){
            res.status(406).json({success:false,message:"failed cration ",data:null})
        }else{

            res.status(201).json({success:true,message:"created with success",data:item})
        } 

    })
    
} catch (err) {
    res.status(500).json(err.error)  
}
},
getbyname : async(req,res)=>{
  try {
    await  gRvoyagemodel.findOne({nom:req.query.nom}).exec((err,item)=>{
        if(err){
            res.status(406).json({success:false,message:"failed  ",data:null})
        }else{
            res.status(201).json({success:true,message:" success",data:item})
        } 

    })
  } catch (error) {
      res.status(500).json(error.err)
      
  }  
},
update: async(req,res)=>{
    try {
        await  gRvoyagemodel.findOneAndUpdate(req.params.id,req.body).exec((err,item)=>{
            if(err){
                res.status(406).json({success:false,message:"failed  update ",data:null})
            }else{
                res.status(201).json({success:true,message:" success update",data:item})
            }
        })    
        
    } catch (err) {
        res.status(500).json(error.err)
    }
},
delete: async(req,res)=>{
    try {
        await  gRvoyagemodel.findByIdAndDelete(req.params.id).exec((err,item)=>{
            if(err){
                res.status(406).json({success:false,message:"failed  remove ",data:null})
            }else{
                res.status(201).json({success:true,message:" success remove",data:item})
            }
        })    
        
    } catch (error) {
        res.status(500).json(error.err)
    }

}

}