var express = require("express");
var path = require("path");
var favicon = require('serve-favicon');
var app = express();
app.use(require("body-parser")());
app.set("port",process.env.PORT || 3006);

//静态资源设置
app.use(express.static(__dirname + "/public"));
app.use(favicon(path.join(__dirname,'public','favicon.ico')));

app.get("/",function (req,res) {
    res.type("text/html");
    res.send('<span style="color: green">Welcome to My Site</span>');
});

//定制404页面
app.use(function (req,res) {
    res.type("text/html");
    res.status(404);
    res.send('<span style="color: green">Not - find</span>');
});
//定制500页面
app.use(function (err,req,res,next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(app.get('port'),function () {
    console.log('Express started on http://localhost:' + app.get('port') + ';' + 'press Ctrl-C to terminate.');
});