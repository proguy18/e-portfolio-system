const Image = require('../dbModels/images')

const uploadImage = async function(req, res) {
    try {
        if (req.files) {
            const input = req.files.input
            const image = new Image({
                name: input.name,
                image: {
                    data: input.data, mimetype: input.mimetype
                }
            })
            await image.save()
            res.status(200).send({success: "image was stored sucessfully", image_id: image._id})
        } else {
            res.status(400).send({message: "No file found"})
        }
    } catch (error) {
        res.status(400).send({errorCode: error.code})
    }
}

const getAllImages = function(req, res) {
    Image.find({}, (err, items) => {
        if (err) {
            console.log(err)
            res.status(400).send("Unable to find any images")
        } else {
            res.status(200).send(items)
        }
    })
}

module.exports = {uploadImage, getAllImages}