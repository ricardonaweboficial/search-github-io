const mongoose = require('mongoose');
const express = require('express');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://github_io:github147@cluster0-udzur.mongodb.net/github_io?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

module.exports = app;

