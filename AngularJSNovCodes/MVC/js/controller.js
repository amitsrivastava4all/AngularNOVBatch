/*
Controller is a Glue B/w View and Model
$scope is a predefine thing in Angular and it is a Glue B/W View and Controller
Depedency Injection (DI) is way to inject the factory
*/
app.controller("itemctrl",function($scope,itemFactory){
    $scope.showme=false;
    
    $scope.loadData=function(){
        $scope.loading=true;
        var promise = itemFactory.callToServer();
        console.log(" I get the promise and i know server doing something else...");
        console.log(" i will not wait for server , i will do my work");
        for(var i = 1 ; i<=10; i++){
            console.log("Print ",i);
        }
        console.log("Now Check MY Promise..");
        promise.then(function(data){
            $scope.showme=true;
            $scope.loading=false;
            $scope.data = data;    
        },function(error){
            $scope.loading=false;
            $scope.error = error;
        });
    }
})