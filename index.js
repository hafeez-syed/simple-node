var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var net = require('net');
var server = net.createServer();
var port = 3000;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
var router = express.Router();

router.get('/', function (req, res) {
    res.json({
        "error": false,
        "message": "Hello !",
        "pid": process.pid
    });
});

router.post('/add', function (req, res) {
    res.json({
        "error": false,
        "message": "success",
        "data": req.body.num1 + req.body.num2
    });
});

app.use('/', router);


server.once('error', function (err) {
    if (err.code === 'EADDRINUSE') {
        // port is currently in use
        console.log("Server at PORT " + port + " is not Available");
    }
});

server.once('listening', function () {
    // close the server if listening doesn't fail
    server.close();
    app.listen(port, function () {
        console.log("Server is running at PORT " + port);
    });
});

server.listen(port);