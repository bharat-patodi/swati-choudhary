const express = require('express');
const fs = require('fs');
const path = require('path');

// Create app
const app = express();

// View Engine
app.set('view engine', 'html');
app.engine('html', (path, options, callbacks) => {
  fs.readFile(path, 'utf-8', callback);
});

// Middleware
app.use(express.static(__dirname));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
});

// Serve App
const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log(`running at mera apna localhost: ${port} `);
});
