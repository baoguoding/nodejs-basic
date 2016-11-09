//-----------------Exception.js-------------
module.exports={
    expfun:function(flag){
        if(flag==0){
            throw "I am exception";
        }
        return "success";
    }
}