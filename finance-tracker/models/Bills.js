// models/Bill.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const billSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['paid', 'unpaid'],
    default: 'unpaid',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Bill = mongoose.model('Bill', billSchema);
module.exports = Bill;
