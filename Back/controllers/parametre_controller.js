const parametreModel = require ("../models/parametre_model")



module.exports={
   

         create: async (req, res) => {


            try {
                const contact = new parametreModel(req.body)
                await contact.save(req.body, (err, item) => {
                    
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
            parametreModel.find({},(err,items)=>{
              if(err){
                     res.status(406).json({success:false,message:"cannot got all ",data:null})    
              }else{
                     res.status(201).json({success:true, message:"list of contact",data:items})
              } 
     
             })
     
         },
         update:function(req,res){
     
            parametreModel.findByIdAndUpdate(req.params.id,req.body,{new:true},function(err,item){
             if(err){
                 res.status(406).json({success:false,message:"cannot update",data:null}) 
             }else{
                 res.status(201).json({success:true, message:" is  updated ",data:item})
             }
         })    
         },
         getbyname:function(req,res){
            parametreModel.find({nom:req.query.nom},function(err,item){
                 
             if(err){
                 res.status(406).json({success:false,message:"cannot get the name",data:null}) 
             }else{
                 res.status(201).json({success:true, message:" getted with name ",data:item})    
             }
             })
         },
         getbyid:function(req,res){
            parametreModel.findById(req.params.id,function(err,item){
          
                 if(err){
                     res.status(406).json({success:false,message:"cannot founded id  ",data:null}) 
                 }else{
                     res.status(201).json({success:true, message:"found with id ",data:item})    
                 }
             })
         },
         delete:function(req,res){
            parametreModel.findByIdAndRemove(req.params.id,function(err,item){
                 if(err){
                     res.status(406).json({success:false,message:"failed deleted  by id ",data:null}) 
                 }else{
                     res.status(201).json({success:true, message:"deleted ",data:item})    
                 }   
             })
         }



}