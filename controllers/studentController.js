import Student from '../models/studentModel.js'
import asyncHandler from 'express-async-handler'

// @desc create user
// @route POST /api/students/create
// @access Private

const createStudent = asyncHandler(async (req,res) => {
    const {firstName ,lastName , age, major,skills,address,education} = req.body

    if(!firstName || !lastName || !age || !major || !address || !education || !skills){
        res.status(400)
        throw new Error('All the fields must be filled')
    }

    if(skills && skills.length===0){
        res.status(400)
        throw new Error('At least one skill should be filled')
    }

    if(education.type !== 'Diploma' && education.type !== 'Multiple'){
        res.status(400)
        throw new Error('Education type can only be Diploma or Multiple')
    }

const existStudent = await Student.findOne({firstName,lastName})

if(existStudent){
    res.status(400)
    throw new Error('Student already exists')

}

const student = await Student.create({
    firstName,
    lastName,
    age,
    major,
    skills,
    address,
    education
})

if(student){
    res.status(201).json(student)

}
else{
    res.status(400)
    throw new Error('invalid data')
}
})

// @desc get student data
// @route Get /api/students/:id
// @access Private
const getStudent = asyncHandler(async (req,res) => {
    
    const id = req.params.id
    const student = await Student.findById(id)
    if(student)
    {
        res.json(student)
    }else{
        res.status(404)
        throw new Error('Student not found')
    }
   
   })

// @desc update student
// @route PUT /api/students/:id
// @access Private
const updateStudent = asyncHandler(async (req,res) => {

    const id = req.params.id

    const student = await Student.findById(id)
    if(student)
    {
        student.firstName= req.body.firstName || student.firstName
        student.lastName= req.body.lastName || student.lastName
        student.age= req.body.age || student.age
        student.major= req.body.major || student.major
        student.skills = req.body.skills || student.skills
        student.address = req.body.address || student.address
        student.education = req.body.education || student.education
        
        const updatedStudent = await student.save()

        res.json(updatedStudent)
    }else{
        res.status(404)
        throw new Error('Student not found')
    }
   
   })

export {createStudent,getStudent,updateStudent}