const express = require('express');
const app = express();
const PORT = 80;

// Route for /sayHello
app.get('/sayHello', (req, res) => {
  res.json({ message: "Hello User." });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});