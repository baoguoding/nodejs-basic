var async = require("async");
function exec(){
    async.parallel({  //并行无关联
        one: function(done){
            ii = 0;
            setInterval(function(){
                console.log("one="+new Date());
                ii++;
                if(ii == 3){
                    clearInterval(this);
                    done(null,{one:"one"}); //如果这里出错会影响其他人的回调。
                }
            }, 1000);
        },
        two: function(done){
            jj = 0;
            setInterval(function(){
                console.log("two="+new Date());
                jj++;
                if(jj == 3){
                    clearInterval(this);
                    done(null,{two:"two"});
                }
            }, 1000);
        }
    }, function(err, rs){
        console.log(err);
        console.log(rs);
    });
}

exec();