const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// var hngbio = mongoose.model('HngBio', hngbioSchema);

// var hngbioSchema = new Schema({
//   slackUsername: {type: String},
//   backend: {type: Boolean},
//   age : {type: Integer},
//   bio: {type: String}
// });

app.get('/', (req, res) => {
  return res.json({ "slackUsername": "te70", "backend": true, "age": 22, "bio": "A backend developer" })
});

app.listen(3001, () => {
  console.log('server started');
});
