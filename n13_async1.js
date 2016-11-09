var async = require("async");
function exec(){
    async.series({  //串行无关联
        one: function(done){
            ii = 0;
            setInterval(function(){
                console.log("one="+new Date());
                ii++;
                if(ii == 3){
                    clearInterval(this);
                    done(null,{one:"one"}); //如果把null替换为某个字"Error",程序会在这个地方终止。
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