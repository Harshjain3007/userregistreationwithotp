
const imagemodel = require('../models/imageModel');
const {uploadFile} = require('../aws/aws')



const createImage = async (req, res) => {
  try {
    let data=req.body
    let files=req.files
    console.log(files)
    if (!req.files) return res.status(400).send({ status: false, message: 'Image preview is mandatory' })
    let thumbnails, previewImages, originalImages;
    if (files[0].fieldname == "Thumbnail") {
      thumbnails = await uploadFile(files[0])
    }
    if (files[1].fieldname == "previewImage") {
      previewImages = await uploadFile(files[1])
    }

    if (files[2].fieldname == "originalImage") {
      originalImages = await uploadFile(files[2])
    } 

    data.Imagepreview = { Thumbnail: thumbnails, previewImage: previewImages, originalImage: originalImages }
    let imageData = await imagemodel.create(data)
    return res.status(201).send({ status: true, data: imageData })
    
  } catch (err) {
    //console.error(err);
    res.status(500).send({ message:err.message });
  }
};

 module.exports = { createImage };







