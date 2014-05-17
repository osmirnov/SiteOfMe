var express = require('express');
var handlebars = require('express3-handlebars');
var morgan = require('morgan');
var data = require('./assets/json/resume.json');
var app = express();

app.use(morgan('dev'));
app.use('/public', express.static(__dirname + '/public'));

app.engine('handlebars', handlebars({
	//defaultLayout: 'default',
	partialsDir: [
        'views/partials/'
    ]
}));
app.set('view engine', 'handlebars');

app.route('/')
	.get(function(req, res, next) {
		res.render('home', data);
	});

app.route('/old')
	.get(function(req, res, next) {
		res.sendfile('views/home.html');
	});

app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.send(500, 'Something broke!');
});

var server = app.listen(3000, function() {
	console.log('Listening on port %d', server.address().port);
});