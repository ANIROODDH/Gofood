const express = require('express');
const cors = require('cors');
const app = express();
const port = 6700;
const connectDB = require('./db.js');

app.use(express.json());
app.use(express.urlencoded());

const corsOptions = {
  origin: 'http://localhost:3000', // Fix the URL by replacing ':' instead of '//'
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 200,
};

// Use cors middleware with custom options
app.use(cors(corsOptions));

connectDB; // You need to call the function to connect to the database

app.get('/', (req, res) => {
  res.send('Hello World!-------');
});

app.use('/api', require('./Routes/Creatuser.js')); // Corrected the route filename

// Handle preflight requests
app.options('/api/createuser', cors());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
