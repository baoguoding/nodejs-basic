var http = require("http");
http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
	if(request.url !== "/favicon.ico"){
		console.log("∑√Œ ");
		response.write("hello,world");
		response.end("hell, ¿ΩÁ");
	}
	
}).listen(8000);

console.log("Server running at http://127.0.0.1:8000");