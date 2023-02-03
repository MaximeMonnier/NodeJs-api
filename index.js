const express = require('express');
const app = express();
require('./models/dbConfig');
const postsRoutes = require('./routes/postsController');
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');
const cors = require('cors')

 mongoose.set('strictQuery', false);

// possible d'autoriser seulement certains site en mettant l'url dans les parametre de cors
app.use(bodyParser.json());
app.use(cors());
app.use('/posts', postsRoutes);

app.listen(5500, () => console.log('server started:5500'));