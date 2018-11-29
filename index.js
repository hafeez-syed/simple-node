var express = require("express");
var bodyParser = require("body-parser");
var app = express();
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

router.get('/exit', function (req, res) {
    res.end();
    console.log('Killing process ', process.pid);
    process.kill(process.pid);
});


app.use('/', router);

app.listen(3000, function () {
    console.log("I am listening at PORT 3000", process.pid);
});

process.on('SIGINT', function () {
    console.log("\nGracefully shutting down from SIGINT (Ctrl-C)", process.pid);
    // some other closing procedures go here
    process.exit();
});