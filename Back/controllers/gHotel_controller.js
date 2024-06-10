const gHotelModel = require ("../models/gHotel_model")
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
            description: "photo d'hotel",
          };
        }); 

        const hotel= new gHotelModel(req.body)
        hotel.save(req.body,(err,item)=>{
           if(err){
               res.status(406).json({success:false,message:"failed to created hotel",data:null})    
           }else{
               res.status(201).json({success:true, message:"hotel created successfully",data:item})
     
           }
        })
     
    },
         
     
         getall: function(req,res){
            gHotelModel.find({},(err,items)=>{
              if(err){
                     res.status(406).json({success:false,message:"cannot got all hotels",data:null})    
              }else{
                     res.status(201).json({success:true, message:"list of hotels",data:items})
              } 
     
             }).populate("categorie")
     
         },
         update:function(req,res){
            gHotelModel.findByIdAndUpdate(req.params.id,req.body,{new:true},function(err,item){
                if(err){
                    res.status(406).json({success:false,message:"cannot update",data:null}) 
                }else{
                    res.status(201).json({success:true, message:"  updated ",data:item})
                }
            })     
         },
         getbyname:function(req,res){
            gHotelModel.find({nom:req.query.nom},function(err,item){
                 
             if(err){
                 res.status(406).json({success:false,message:"cannot get the name",data:null}) 
             }else{
                 res.status(201).json({success:true, message:" the hotel  getted with name ",data:item})    
             }
             })
         },
         getbyid:function(req,res){
            gHotelModel.findById(req.params.id,function(err,item){
          
                 if(err){
                     res.status(406).json({success:false,message:"cannot founded id  ",data:null}) 
                 }else{
                     res.status(201).json({success:true, message:"the hotel with id ",data:item})    
                 }
             }).populate('temoignage')
         },
         delete:function(req,res){
            gHotelModel.findByIdAndRemove(req.params.id,function(err,item){
                 if(err){
                     res.status(406).json({success:false,message:"failed deleted hotel  by id ",data:null}) 
                 }else{
                     res.status(201).json({success:true, message:"the hotel  deleted ",data:item})    
                 }   
             })
         }



}