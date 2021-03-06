const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: String,
  listItems: [{
    type: Schema.Types.ObjectId,
    ref: 'Item'
  }]
}, {timestamps: true});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;