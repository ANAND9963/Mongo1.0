const mongoose = require("mongoose")


const BearSchema = new mongoose.Schema(
    {
        species : {
            type : String,
            required:true,
            unique: true,
        },
        latinName : {
            type : String,
            required:true,
            unique: true,
        },
        createdOn : {
            type : Date,
            default : Date.now()
        }
});

BearSchema.index({ species: 1 }, { unique: true });
BearSchema.index({ latinName: 1 }, { unique: true });

module.exports = mongoose.model("Bear", BearSchema);