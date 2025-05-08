const express = require('express');
const router = express.Router();
const Business = require('../models/Business');
const Article = require('../models/Article');

router.post('/sync', async (req, res) => {
  try {
    const { businesses, articles } = req.body;

    
    await Business.deleteMany({});
    await Article.deleteMany({});

    await Business.insertMany(businesses);
    await Article.insertMany(articles);

    res.json({ message: 'Data synced successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
