var async = require("async");
function exec(){
    async.waterfall([  //串行有关联
        function(done){
            ii = 0;
            setInterval(function(){
                console.log("one="+new Date());
                ii++;
                if(ii == 3){
                    clearInterval(this);
                    done(null,"one finished."); //如果这里出错会影响其他人的回调。
                }
            }, 1000);
        },
        function(preValue, done){
            jj = 0;
            setInterval(function(){
                console.log(preValue + "two="+new Date());
                jj++;
                if(jj == 3){
                    clearInterval(this);
                    done(null,preValue + "two finished.");
                }
            }, 1000);
        }
    ], function(err, rs){
        console.log(err);
        console.log(rs);
    });
}

exec();