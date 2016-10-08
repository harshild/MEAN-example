var express = require('express');
var app = express();

var port = 8080;

app.use(express.static(__dirname + '/public'));

app.listen(port);

app.get('/validate', function(req, res, next) {
    console.log(req)
    return "";
});


console.log('Running on port ' + port);
exports = app;