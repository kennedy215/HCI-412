const express = require('express');
const router = express.Router();
const Bill = require('../models/Bill');

// Create a new bill
router.post('/create', async (req, res) => {
  try {
    const bill = new Bill(req.body);
    await bill.save();
    res.status(201).json(bill);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all bills
router.get('/', async (req, res) => {
  try {
    const bills = await Bill.find();
    res.json(bills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get bills by user ID
router.get('/user/:userId', async (req, res) => {
  try {
    const bills = await Bill.find({ user: req.params.userId });
    res.json(bills);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Update a bill
router.put('/:id', async (req, res) => {
  try {
    const bill = await Bill.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(bill);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a bill
router.delete('/:id', async (req, res) => {
  try {
    await Bill.findByIdAndDelete(req.params.id);
    res.json({ message: 'Bill deleted' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
