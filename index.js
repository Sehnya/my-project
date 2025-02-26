const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

// Serve static files from the Vue app's dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Fallback: serve index.html for any route (needed for Vue Router in history mode)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
