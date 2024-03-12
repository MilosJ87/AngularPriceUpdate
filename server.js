// server.js
const express = require('express');
const app = express();

// Middleware to enable CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Your routes and other middleware go here

const PORT = 7063;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

