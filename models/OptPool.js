var mysql = require("mysql");
function OptPool(){
    this.flag = true;
    this.pool = mysql.createPool({
        host:"192.168.10.64",
        user:"root",
        password:"root",
        database:"test",
        port:"3306"
    });

    this.getPool = function(){
        if(this.flag){
            this.pool.on("connection",function(connection){
                connection.query("SET SESSION auto_increment_increment=1");
                this.flag = false;
            });
        }
        return this.pool;
    }
};
module.exports = OptPool;