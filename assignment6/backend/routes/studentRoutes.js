import express from 'express';
import Student from '../models/Student.js';

const router = express.Router();

router.post('/add', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.send('Student Added');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get('/', async (req, res) => {
  try {
    const data = await Student.find();
    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.put('/update/:id', async (req, res) => {
  try {
    await Student.findByIdAndUpdate(req.params.id, req.body);
    res.send('Updated');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.send('Deleted');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;
import express from 'express';
import Student from '../models/Student.js';

const router = express.Router();

router.post('/add', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.send('Student Added');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.put('/update/:id', async (req, res) => {
  try {
    await Student.findByIdAndUpdate(req.params.id, req.body);
    res.send('Updated');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.send('Deleted');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;
