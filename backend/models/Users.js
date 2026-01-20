const mongoose  = require("mongoose")


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is mandatory'],
        trim: true
    },
    email: {
        type: String,
        required : [true, 'e-mail is mandatory'],
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String, 
        required: [true, 'password is mandatory'],
        minlength: [6]

    },
    location: {
        type: String,
        default: 'Istanbul'
    },
    interst: {
        type: [String],
        enum: ['Basketball', 'Football', 'Tennis', 'Running', 'Gym'],
        default: []
    },
    userType: {
        type: String,
        enum: ['tutor', 'partner' , 'both'],
        default: 'partner'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    maymunAt:{
        type: String,
        default: 'atessek'
    }
})

module.exports = mongoose.model('User' , userSchema)