const express = require('express');
const router = express.Router();

router.post('/order', (req, res) => {
  const { vendorName, items } = req.body;
  console.log("Received order from:", vendorName);
  console.log("Items:", items);
  res.json({ message: 'Order received successfully!' });
});

module.exports = router;
