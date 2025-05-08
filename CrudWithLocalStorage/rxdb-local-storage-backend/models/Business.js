const mongoose = require('mongoose');
const BusinessSchema = new mongoose.Schema({
  id: String,
  name: String,
});
module.exports = mongoose.model('Business', BusinessSchema);
