import mongoose from 'mongoose'

const studentSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,

    },
    lastName: {
        type: String,
        required: true,

    },
    age: {
        type: Number,
        required: true,

    },
    major: {
        type: String,
        required: true,

    },
    skills:[
        {type: String, required: true}
    ],
    address: {
        country: {type: String,required:true},
        city: {type: String,required:true},
        postcode: {type: String,required:true},
        additionalInfo: {type: String}
    },
    education: {
        type: {type: String,required:true},
        yearOfGraduation: {type: Number,required:true},
        school: {type: String,required:true},
        country: {type: String,required:true}
    },
    createdDate: {
        type: Date,
        default: Date.now()
    }

},{
    timestamps: true
})

const Student = mongoose.model('students',studentSchema)

export default Student