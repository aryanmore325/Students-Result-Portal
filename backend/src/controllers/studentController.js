const Student = require('../models/studentModel');

const addStudent = async (req, res) => {
    const { name, rollNo, standard, subjects } = req.body;
    try {
        const newStudent = new Student({ name, rollNo, standard, subjects });
        await newStudent.save();
        res.status(201).json({ success: true, student: newStudent });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const getStudentResult = async (req, res) => {
    const { rollNo } = req.query;
    try {
        const student = await Student.findOne({ rollNo });
        if (student) {
            res.status(200).json({ success: true, student });
        } else {
            res.status(404).json({ success: false, message: 'Student not found' });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = { addStudent, getStudentResult };