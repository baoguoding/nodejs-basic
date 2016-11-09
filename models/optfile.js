//----------------optfile.js------------------
var fs = require("fs");
module.exports = {
     readfile:function(path, recall){
        fs.readFile(path, function(err, data){
            if(err){
                console.log(err);
                recall("File Not Found.");
            }else{
                recall(data);
                console.log(data.toString());
            }
        });


        console.log("yibu method finished!");
    },
    readfileSync:function(path){
        var data = fs.readFileSync(path,"utf-8");
        console.log(data);
        console.log("tongbu method finished!");
        //return data;
    },
    readImg:function(path, res){
        fs.readFile(path,"binary", function(err, fileData){
            if(err){
                console.log(err);
                return;
            }else{
                console.log("Output file");
                res.write(fileData, "binary");
                res.end();
            }
        })
    },
    writefile:function(path, data, recall){
        fs.writeFile(path, data, function(err){
            if(err){
                throw err;
            }
            recall("Write file finished!");
            console.log("It\'s saved!");
        })
    },
    writeFileSync:function(path,data){
        fs.writeFileSync(path,data);
        console.log("Sync write file finished!");
    }
}