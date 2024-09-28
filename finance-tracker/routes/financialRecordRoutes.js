const express = require('express');
const router = express.Router();
const FinancialRecord = require('../models/FinancialRecord');

// Create a new financial record
router.post('/create', async (req, res) => {
  try {
    const financialRecord = new FinancialRecord(req.body);
    await financialRecord.save();
    res.status(201).json(financialRecord);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all financial records
router.get('/', async (req, res) => {
  try {
    const financialRecords = await FinancialRecord.find();
    res.json(financialRecords);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get financial records by user ID
router.get('/user/:userId', async (req, res) => {
  try {
    const records = await FinancialRecord.find({ user: req.params.userId });
    res.json(records);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// Update a financial record
router.put('/:id', async (req, res) => {
  try {
    const record = await FinancialRecord.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(record);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a financial record
router.delete('/:id', async (req, res) => {
  try {
    await FinancialRecord.findByIdAndDelete(req.params.id);
    res.json({ message: 'Financial record deleted' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
