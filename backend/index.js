/* eslint-disable linebreak-style */
/* eslint-disable no-console */

const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path')

const userRoutes = require('./controller/user');

require('dotenv').config();

mongoose.connect(process.env.DB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('CONNECTED TO DB');
  }).catch((err) => {
    console.error(err);
  });

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

app.use('/api', userRoutes);
/*
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'))
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  })
}
*/
app.listen(process.env.PORT, () => {
  console.log('Connected To Port');
});
