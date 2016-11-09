//-------------------router.js------------
var optfile = require("./models/optfile");
var url = require("url");
var querystring = require("querystring"); //Post需要导入


function getRecall(req, res){
    res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
    function recall(data){
        res.write(data);
        res.end("");
    }
    return recall;
}
module.exports={
    login:function(req, res){
        //------------get param with get method
        /*
        var rdata = url.parse(req.url,true).query;
        console.log(rdata);
        if(rdata["email"] != undefined){
            console.log(rdata["email"]);
            console.log(rdata["pwd"]);
        }*/
        //------------get param with post method
        var post = ""; //定义了一个post变量，用于暂存请求参数变量

        req.on("data", function (chunk) { //通过req的data事件监控 chunk是一个字节
            post += chunk;
        });
        //-------注意异步----------
        req.on("end", function(){
            post = querystring.parse(post);
            //console.log("email: " + post["email"] + "\n");
            //console.log("pwd: " + post["pwd"] + "\n");
            //res.end();

            //recall = getRecall(req, res);
            arr = ["email","pwd"];
            function recall(data) {
                dataStr = data.toString();

                for(var i=0; i < arr.length; i++){
                    re = new RegExp("{"+arr[i]+"}", "g");
                    dataStr = dataStr.replace(re, post[arr[i]]);
                }

                res.write(dataStr);
                res.end("");
            }

            optfile.readfile("./view/login.html", recall);
        });

    },
    zhuce:function(req, res){
        function recall(data){
            res.write(data);
            res.end("ok");
        }

        optfile.readfile("./view/zhuce.html", recall);
    },
    writefile: function(req, res){
        function recall(data){
            res.write(data);
            res.end("");
        }
        optfile.writefile("./view/one.txt","I want to write file to ...", recall)
    },
    showimg: function(req, res){
        res.writeHead(200,{"Content-Type":"image/jpeg"})
        optfile.readImg("./imgs/a.jpg", res);
    }
}