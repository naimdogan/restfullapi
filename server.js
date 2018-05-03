const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.set('view engine', 'ejs');

 const port = process.env.PORT || 8081;
 const dbConfig = require('./config/database.config.js');

 mongoose.Promise = global.Promise;

 // Connecting to the database
 mongoose.connect(dbConfig.url)
 .then(() => {
     console.log("Successfully connected to the database");    
 }).catch(err => {
     console.log('Could not connect to the database. Exiting now...');
     process.exit();
 });

 // define a simple route
 app.get('/', (req, res) => {
    res.render('anasayfa');
 });

 require('./app/routes/note.routes.js')(app);
 require('./app/routes/area.routes.js')(app);

 // listen for requests
 app.listen(port, () => {
     console.log("Server is listening on port 3000");
 });