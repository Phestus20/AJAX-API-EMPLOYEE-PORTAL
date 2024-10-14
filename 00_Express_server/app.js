const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer'); // Import multer to handle multipart/form-data

// Configure multer for handling multipart/form-data
const upload = multer(); // Initialize multer with no storage configuration as we're just parsing

const apiRouter = require('./api/apiRouter');

// Configure body-parser for JSON and URL-encoded form data
app.use(bodyParser.json()); // Parses application/json type data
app.use(bodyParser.urlencoded({ extended: true })); // Parses application/x-www-form-urlencoded type data

// Configure CORS to allow cross-origin requests
app.use(cors());

// Use multer middleware to handle multipart/form-data
// This allows the server to read form submissions sent with enctype="multipart/form-data"
app.use(upload.none());

// Use the API router for handling routes under /api
app.use('/api', apiRouter);

const hostname = '127.0.0.1'; // Localhost IP address
const port = 5000; // Port number for the server

// Define a basic route to test server setup
app.get('/', (req, res) => {
    res.send(`<h2>Welcome to employee portal.</h2>`);
});

// Start the server and listen on the specified port and hostname
app.listen(port, hostname, () => {
    console.log(`Express is started at http://${hostname}:${port}`);
});