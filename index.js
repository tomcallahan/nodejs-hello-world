var http = require('http');
var S = require('string');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");

});

var port = 80;
server.listen(port);
console.log("Server running at http://localhost:%d", port);


var doesIt = S('my cool string').left(2).endsWith('y'); //true

