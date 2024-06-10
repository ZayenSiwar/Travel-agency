const chambreModel = require ("../models/chambre_model")



module.exports={
   

         create: async (req, res) => {

            console.log(req.file)
            req.body.image = req.file.filename
            try {
                const composition = new chambreModel(req.body)
                await composition.save(req.body, (err, item) => {
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
            chambreModel.find({},(err,items)=>{
              if(err){
                     res.status(406).json({success:false,message:"cannot got all ",data:null})    
              }else{
                     res.status(201).json({success:true, message:"list of supplementaiire",data:items})
              } 
     
             }).populate('hotel')
     
         },
         getbyhotel:function(req,res){
            chambreModel.find({hotel:req.query.hotel},function(err,item){
                 
             if(err){
                 res.status(406).json({success:false,message:"cannot get by hotel",data:null}) 
             }else{
                 res.status(201).json({success:true, message:" getted with hotel ",data:item})    
             }
             })
         },
         update:function(req,res){
     
            chambreModel.findByIdAndUpdate(req.params.id,req.body,{new:true},function(err,item){
             if(err){
                 res.status(406).json({success:false,message:"cannot update",data:null}) 
             }else{
                 res.status(201).json({success:true, message:" is  updated ",data:item})
             }
         })    
         },
         getbyname:function(req,res){
            chambreModel.find({nom:req.query.nom},function(err,item){
                 
             if(err){
                 res.status(406).json({success:false,message:"cannot get the name",data:null}) 
             }else{
                 res.status(201).json({success:true, message:" getted with name ",data:item})    
             }
             })
         },
         getbyid:function(req,res){
            chambreModel.findById(req.params.id,function(err,item){
          
                 if(err){
                     res.status(406).json({success:false,message:"cannot founded id  ",data:null}) 
                 }else{
                     res.status(201).json({success:true, message:"the supplementaire with id ",data:item})    
                 }
             })
         },
         delete:function(req,res){
            chambreModel.findByIdAndRemove(req.params.id,function(err,item){
                 if(err){
                     res.status(406).json({success:false,message:"failed deleted  by id ",data:null}) 
                 }else{
                     res.status(201).json({success:true, message:"deleted ",data:item})    
                 }   
             })
         }



}