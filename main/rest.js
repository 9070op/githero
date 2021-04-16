const mongoose = require("mongoose");
const validator = require("validator");
const createSchema = new mongoose.Schema({
    name: {
        type: String,
        // minlength: 3,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('invalid email id');
            }
        }
    },
    textarea: {
        type: String,
        required: true,
    }

})

const findmodel = new mongoose.model("findmodel", createSchema);
module.exports = findmodel;