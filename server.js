var express = require('express'),
    app = express(),
    port = process.env.PORT || 6000,
    MONGODB = process.env.MONGOLAB_URI || 'mongodb://localhost/student_resource_db',
    mongoose = require('mongoose'),
    StudentResource = require('./api/models/appModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect(MONGODB);

console.log('MongoDB connecting to remote URI: ' + MONGODB);

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/appRoutes');
routes(app);

// app.use(function(req, res) {
//     res.status(404).send({ url: req.originalUrl + ' not found' })
// });

app.listen(port);

console.log('Student Resource RESTful API server started on: ' + port);