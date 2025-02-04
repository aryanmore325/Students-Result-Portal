const express = require('express');
const { addStudent, getStudentResult } = require('../controllers/studentController');
const router = express.Router();

router.post('/addStudent', addStudent);
router.get('/result', getStudentResult);

module.exports = router;