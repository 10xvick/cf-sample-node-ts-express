const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// GET request handler
app.get('/', (req, res) => {
  res.send('GET request received');
});

// POST request handler
app.post('/', (req, res) => {
  const data = req.body;
  res.json({ message: 'POST request received', data });
});

// PUT request handler
app.put('/', (req, res) => {
  const data = req.body;
  res.json({ message: 'PUT request received', data });
});

// DELETE request handler
app.delete('/', (req, res) => {
  res.send('DELETE request received');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
