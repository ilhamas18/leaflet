require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes/index');
const cors = require('cors');

app.set('view engine', 'ejs');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(port, () => {
  console.log(`This app is running on port: ${port}`);
})