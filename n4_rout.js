//----------------n4_rout.js------------
var http = require("http");
var url = require("url");
var router = require("./router");

http.createServer(function (request, response){
    response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
    if(request.url !== "/favicon.ico"){

        //console.log(request.url);

        var pathname = url.parse(request.url).pathname;
        console.log("before:"+pathname);
        pathname = pathname.replace(/\//, '');
        console.log("after:"+pathname);
        router[pathname](request, response);
        response.end("");
    }
}).listen(8000);
console.log("Server running at http://127.0.0.1:8000");


