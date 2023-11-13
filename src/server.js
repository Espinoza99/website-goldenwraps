//server.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());


// Define API endpoints here
app.post()

app.listen (PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});