// Set Require
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');
var app = express();
var config = require('./config/app.js');


// version
// bump when doing update
var version = '1.0.1'

// Express Config
router = express.Router();
app.use(session({
    secret: '123456',
    name: 'session',
    proxy: true,
    resave: true,
    saveUninitialized: true
}));

app.use(cookieParser())

// Settings views jade
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

// Get Dir Public
app.use(express.static("public"));


// before routes
app.use(flash());

// Body Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Route
var routes = require('./routes/index.js')(app);

app.use(function(req, res, next) {
res.header('Access-Control-Allow-Credentials', true);
res.header('Access-Control-Allow-Origin', req.headers.origin);
res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
if ('OPTIONS' == req.method) {
     res.send(200);
 } else {
     next();
 }
});

//error handlers
// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.send('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send('error', {
        message: err.message,
        error: {}
    });
});


// ups
process.on('uncaughtException',function(err){
  console.error(err.stack);
});

// start server
app.listen(config.port,config.ip);
console.log(config.page.appName + ' server version ' + version + ' is running on port : ' + config.page.port);