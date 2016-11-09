var mysql = require("mysql");

var connection = mysql.createConnection({
    host:"192.168.10.64",
    user:"root",
    password:"root",
    database:"test",
    port:"3306"
});

connection.connect(function(err){
    if(err){
        console.log("[query] - :" + err);
        return;
    }
    console.log("[connection connect] succeed!");
});

//插入
var userAddSql = "insert into user (uname, pwd) values(?,?)";
var param = ["aaa", "aaa"];
connection.query(userAddSql, param, function(err, rs){
    if(err){
        console.log("insert err:", err.message);
        return;
    }
    console.log("insert success");
});

//执行查询
connection.query("select * from user where uid = ?",[1], function(err, rs){
    if(err){
        console.log("[query] - :" + err);
        return;
    }
    for(var i=0; i< rs.length; i++){
        console.log("The solution is: ", rs[i].uname);
    }
});


//关闭connection
connection.end(function(err){
    if(err){
        console.log(err.toString());
        return;
    }
    console.log("[connection end] succeed!");
});