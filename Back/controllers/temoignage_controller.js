const temoignageModel = require ("../models/temoignage_model")
const bcrypt = require("bcrypt")
const Hotel = require ("../models/gHotel_model")


module.exports={
   
    createReviewforHotel :(req,res)=> {
        let hotel_id = req.params.hotel_id
        console.log(hotel_id)
        Hotel.findOne({_id:hotel_id}).then(async(hotel)=>{
           if(!hotel){
               return res.status(400).json({
                message:'No hotel found',
                data:{}
               })
            }else{
                   try{
                     const  temoignage = new temoignageModel(req.body)
                     let temoignagetData = await temoignage.save();
                     await Hotel.updateOne({_id:hotel_id},{
                         $push:{
                            temoignage : temoignagetData
                         }
                     })
                     return res.status(200).json({
                         message:'review is succssfully created',
                         data:temoignagetData,
                     })
                 }catch(err){
                     return res.status(400).json({
                         message:err.message,
                         data:err
                      })
                   }
 
                 }
              })
     },
         create: async (req, res) => {

           
            try {
                const temoignage = new temoignageModel(req.body)
                await temoignage.save(req.body, (err, item) => {
                    if (err) {
                        res.status(406).json({ success: false, message: "failed register" + err })
                    } else {
            res.status(201).json({ success: true, message: "register ", data: item })
                    }
                })
    
            } catch (error) {
                res.status(500).json(error)
    
    
            }
        },
    
     
         getall: function(req,res){
            temoignageModel.find({},(err,items)=>{
              if(err){
                     res.status(406).json({success:false,message:"cannot got all ",data:null})    
              }else{
                     res.status(201).json({success:true, message:"list of supplementaiire",data:items})
              } 
     
             })
     
         },
         update:function(req,res){
     
            temoignageModel.findByIdAndUpdate(req.params.id,req.body,{new:true},function(err,item){
             if(err){
                 res.status(406).json({success:false,message:"cannot update",data:null}) 
             }else{
                 res.status(201).json({success:true, message:" is  updated ",data:item})
             }
         })    
         },
         getbyname:function(req,res){
            temoignageModel.find({nom:req.query.nom},function(err,item){
                 
             if(err){
                 res.status(406).json({success:false,message:"cannot get the name",data:null}) 
             }else{
                 res.status(201).json({success:true, message:" getted with name ",data:item})    
             }
             })
         },
         getbyid:function(req,res){
            temoignageModel.findById(req.params.id,function(err,item){
          
                 if(err){
                     res.status(406).json({success:false,message:"cannot founded id  ",data:null}) 
                 }else{
                     res.status(201).json({success:true, message:"the supplementaire with id ",data:item})    
                 }
             })
         },
         delete:function(req,res){
            temoignageModel.findByIdAndRemove(req.params.id,function(err,item){
                 if(err){
                     res.status(406).json({success:false,message:"failed deleted  by id ",data:null}) 
                 }else{
                     res.status(201).json({success:true, message:"deleted ",data:item})    
                 }   
             })
         }



}