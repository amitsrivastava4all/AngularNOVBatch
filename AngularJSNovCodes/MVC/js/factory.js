/*
Factory Contain Client Side Logic and Server Talk
*/
app2.factory("itemFactory",function($http,url,$q){
    // factory always return object, object is made up of key and value
    var object = {
        callToServer:function(){
            var deferObject = $q.defer();
            console.log(" Step - 1  i am going to hit a server.....");
            $http.get(url).then(function(data){
                console.log("Step - 3 I will call when u get a result...");
                deferObject.resolve(data);
            },function(error){
                console.log("Step - 3 i will call when error is coming...");
                deferObject.reject(error);
            });
            console.log(" Step - 2 I return promise...")
            return deferObject.promise;
        }
    }
    return object;
});