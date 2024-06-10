const reservationModel = require("../models/reservation_model")
const User = require('../models/user_model')
module.exports={



  create:async(req,res)=>{
   try{
    const reservation= new reservationModel(req.body)
    let Voiture = await reservation.save(req.body)
    await User.findByIdAndUpdate({_id:req.body.user},{
      $push:{
        voiture:reservation,
        voyage:reservation,
        omra:reservation
      }
    }) 
    return  res.status(201).json({success:true, message:" created successfully",data:Voiture})
   
  }catch(err){
    res.status(406).json({success:false,message:"failed to created ",data:err})    

   } 
     },

    

getall: function(req,res){
  reservationModel.find({}
    ,(err,items)=>{
   if(err){
          res.status(406).json({success:false,message:"cannot got all ",data:null})    
   }else{
          res.status(201).json({success:true, message:"list of",data:items})
   } 

  })
  .populate({
      path:'Rvoiture',populate:{path:'voiture'}})


},


// }, 

// delete: async(req,res)=>{
//     try {
//         await reservationModel.findByIdAndDelete(req.params.id).exec((err,item)=>{
//             if(err){
//                 res.status(406).json({success:false,message:"failed  remove ",data:null})
//             }else{
//                 res.status(201).json({success:true,message:" success remove",data:item})
//             }
//         })    
        
//     } catch (error) {
//         res.status(500).json(error.err)
//     }

// }

}
