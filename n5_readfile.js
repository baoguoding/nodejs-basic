//----------------n5_readfile.js------------
var http = require("http");
var optfile = require("./models/optfile");
http.createServer(function (request, response){
    response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
    if(request.url !== "/favicon.ico"){

        response.write("hello,world");

        //optfile.readfile("D://aa.txt");

        //optfile.readfileSync("D://aa.txt");

        function recall(data){
            response.write(data);
            response.end("ok");
        }

        optfile.readfile("D://aa.txt", recall);




        //response.end("hello, world!");
    }
}).listen(8000);
console.log("Server running at http://127.0.0.1:8000");


