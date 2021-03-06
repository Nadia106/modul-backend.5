const {Schema, model} = require("mongoose")

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    sex: {
        type: String, enum: ["Male", "Female"]
    },
    image: String
}, {
    timestamps: true
})

module.exports = model("User", schema)