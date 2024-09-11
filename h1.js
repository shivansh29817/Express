var http = require('http');
var dt = require('./myDT');
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write("Todays date and time is "+dt.myDT());
    res.end('Hello world');
}).listen(8090);