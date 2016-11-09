//----D:\github\nodejs\study>npm install async --save-dev



function oneFun(ii){
/*
    setTimeout(function(){
        ii++;
        if(ii<4){
            console.log("aaa="+new Date());
            oneFun(ii);
        }
    }, 1000);
    */
    ii=0;
    setInterval(function(){
            console.log("aaa=" + new Date());
            ii ++;
            if(ii == 3){
                clearInterval(this);
                twoFun();
            }
        }, 1000);
    console.log("oneFun");
}

function twoFun() {
    jj=0;
    setInterval(function(){
        console.log("bbb=" + new Date());
        jj ++;
        if(jj == 3){
            clearInterval(this);
        }
    }, 1000);
    console.log("twoFun");
}

oneFun();
//twoFun();
console.log("Main process proceed finished.");