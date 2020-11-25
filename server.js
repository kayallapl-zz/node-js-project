const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express(); //package que ajuda a lidar com rotas, HTTP helpers (redirection, caching, etc), high performance
app.use(express.json()); //permite que eu envie dados para a app em formato JSON
app.use(cors());

//DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });
requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);