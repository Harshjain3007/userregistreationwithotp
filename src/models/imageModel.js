const mongoose=require('mongoose')


const imageSchema =new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
     
    Imagepreview:{
         Thumbnail:{
          type:String,
          required:true,
          trim:true
         },

       previewImage:{
            type:String,
            required:true,
            trim:true
        },
        originalImage:{
            type:String,
            required:true,
            trim:true

        }
}
    ,
       category:{
        type:String,
        enum:['people','tech','enterteinment'],
        required:true
     },
    ItemForSale:{
        type:String,
        enum:['Yes','No'],
       required:true
  } 

},)


module.exports=mongoose.model('image',imageSchema)