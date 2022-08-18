var INFO = function () {
    console.log.apply(console, arguments);
};
var ERROR = INFO;
ERROR.err = INFO;	//until overwritten

//================ 각종 설정 로드
let appConfig = require('./app.config.js');

process.on('uncaughtException', function (err) {
    if (err.code == 'EADDRINUSE') {
        INFO('The server is already running. Stop the running server by closing its Command Prompt then try again.');
    } else
        ERROR.err(1, err);

    setTimeout(function () {
        INFO('Exiting.');
        process.exit(1);
    }, 100);
});

const path = require('path');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const compress = require('compression');


INFO("Initializing server...");


//server root
var app_route = path.resolve(__dirname, './src/backend');
app.engine('.html', require('ejs').__express);
app.set('views', path.resolve(app_route, 'views'));
app.set('view engine', 'html');


// setting parameter parser
app.use(bodyParser.json({limit: '50mb'}));
app.use(express.json());
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));


//================== copress header
app.use(compress({
    filter: function (req, res) {
        return /json|text|javascript|dart|image\/svg\+xml|application\/x-font-ttf|application\/vnd\.ms-opentype|application\/vnd\.ms-fontobject/.test(res.getHeader('Content-Type'));
    }
}));

//================ web server start.
var serv = require('http').Server(app);
serv.listen(appConfig._port, (err) => {
    if (err) {
        return console.log(err)
    }
    return console.log('server is listening on http://localhost:%s/', appConfig._port);
});


//==================== HETA MVC  =================
require('hetamvc').init({
    scanPath: app_route,
    route: app,
    sequelize: require('./sequelize.config.js'),
    constants: appConfig,
    forceAwait: true
}, {
    babel_plugin: ["module-resolver", {"alias": {"@": "./"}}]
});