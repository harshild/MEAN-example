var express = require('express');
var bodyParser  =  require('body-parser');
var app = express();

var port = 8080;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.listen(port);

app.post('/validate', function(req, res) {
    var name = req.body.name;
    console.log(name);
    console.log(name.split(" ").length);
    if(name.split(" ").length == 2)
        res.end("yes")
    else
        res.end("no")


});


console.log('Running on port ' + port);
exports = app;