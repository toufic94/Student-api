import mongoose from 'mongoose'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import Student from './models/studentModel.js'
import studentData from './data/students.js'


dotenv.config()
connectDB()

const importData = async () => {
    try{
        await Student.deleteMany()

        await Student.insertMany(studentData)

        console.log('Data imported!')
        process.exit()


    }catch(error){

        console.error(`${error}`)
        process.exit(1)

    }
}

importData()