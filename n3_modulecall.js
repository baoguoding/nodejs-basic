var http = require("http");

//var User = require("./models/user");

var Teacher = require("./models/Teacher.js");

http.createServer(function (request, response){
    response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
    if(request.url !== "/favicon.ico"){
        teacher = new Teacher(1, "Li Si", 30);

        teacher.teach(response);
        response.end("");
    }
}).listen(8000);
console.log("Server running at http://127.0.0.1:8000");