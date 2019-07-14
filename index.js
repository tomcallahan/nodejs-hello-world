var http = require('http');
var var isArray = require('isarray');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");

});

var port = 80;
server.listen(port);
console.log(isArray([]));
console.log("Server running at http://localhost:%d", port);
