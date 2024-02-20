const express = require('express');
const router = express.Router();
const User = require('../30days_Challenge/user20');

router.get('/', async (req, res) => {
  try {
    const result = await User.aggregate([
      {
        $group: {
          _id: null,
          averageAge: { $avg: "$age" } // Assuming the field storing age is named "age"
        }
      }
    ]);
    if (result.length === 0) {
      res.status(404).json({ error: "No users found" });
    } else {
      const averageAge = result[0].averageAge;
      res.json({ averageAge });
    }
  } catch (err) {
    console.error("Error calculating average age:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
