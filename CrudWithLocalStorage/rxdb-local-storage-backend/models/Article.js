const mongoose = require('mongoose');
const ArticleSchema = new mongoose.Schema({
  id: String,
  name: String,
  qty: Number,
  selling_price: Number,
  business_id: String,
});
module.exports = mongoose.model('Article', ArticleSchema);

