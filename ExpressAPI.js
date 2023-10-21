var express = require('express');
var app = express();
var port = 3000;
// Middleware to parse JSON requests
app.use(express.json());
// GET request handler
app.get('/', function (req, res) {
    res.send('GET request received');
});
// POST request handler
app.post('/', function (req, res) {
    var data = req.body;
    res.json({ message: 'POST request received', data: data });
});
// PUT request handler
app.put('/', function (req, res) {
    var data = req.body;
    res.json({ message: 'PUT request received', data: data });
});
// DELETE request handler
app.delete('/', function (req, res) {
    res.send('DELETE request received');
});
// Start the server
app.listen(port, function () {
    console.log("Server is running on http://localhost:".concat(port));
});
