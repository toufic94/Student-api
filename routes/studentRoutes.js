import express from 'express'
import {createStudent, getStudent, updateStudent} from '../controllers/studentController.js'
import {protect} from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/create',protect,createStudent)
router.route('/:id').get(protect,getStudent).put(protect,updateStudent)

export default router