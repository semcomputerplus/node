var http = require('http');

var host = '127.0.0.1';
var port = '3000';

var server = http.createServer(function(req,res){
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<b>Tekst odpowiedzi</b>');
});

server.listen(port, host, function(){
    console.log('Serwer działa na porcie ' + port);
});
