// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var rejectRequestModule = angular.module('rejectRequestModule', ['ngRoute']);

// use the myAppModule variable to
// configure the module with a controller
rejectRequestModule.config(function($routeProvider){
  
    $routeProvider
.when('/',{
  templateUrl:'page/home.html',
})
.when('/home',{
  templateUrl:'page/home.html',
})
.when('/about',{
  templateUrl:'page/about.html',
  controller:'aboutController'
})
.when('/input',{
  templateUrl:'page/input.html',
  controller:'inputController'
})
.when('/content',{
  templateUrl:'page/content.html',
  controller:'contactController'
});
});


rejectRequestModule.factory('providerService',function($http){
  var dataSvc={};
  dataSvc.getData=function(theData){
    var promise=$http({method: 'POST',url: 'json/message.json',data: theData});
    return promise;
  }
  return dataSvc;
});
rejectRequestModule.controller("inputController",function($scope,providerService){
          $scope.someData = {
              name: 'storage',
              detailed: 'Increase 100 pieces of goods',
              instructions: 'Approval'
              };
          $scope.data=someData;
          $scope.isHidden=true;
              
          // $scope.provider={};
          $scope.register=function(){
              var promise=providerService.getData($scope.provider);
              promise.success(function(data){
                  $scope.backMess=data.success;
                  $scope.isHidden = !$scope.isHidden;
                  if (!$scope.isHidden) {
                    alert($scope.backMess[0].message+"\n"+"\n"+"The name is "+$scope.name);
                  }
                });
                promise.error(function(data,status,headers,config,statusText){
                    $scope.backMess="There appears to have been a problem .";
                    alert($scope.backMess);
                });
            }
}).controller('aboutController',function($scope){
  var aboutData={
    xuehao:'1314080901104'
  };
  $scope.aboutData=aboutData;
}).controller('contentController',function($scope){
$scope.someData = [{
              name: 'storage',
              detailed: 'Increase 100 pieces of goods',
              instructions: 'Approval',
              }];
});


rejectRequestModule.filter('stripDashes', function() {
     return function(txt) {
         // filter code would go here
 }; });

rejectRequestModule.directive("myProvider", function () {
    return {
        restrict: "AE",
        replace: true,
        templateUrl: 'directives/provider.html'

    }
}).directive("myHide", function () {
    return {
        restrict: "AE",
        replace: true,
        templateUrl: 'directives/hide.html'
    }
}).directive("myNav", function () {
    return {
        restrict: "AE",
        replace: true,
        templateUrl: 'directives/nav.html'
    }
}).directive("myShow", function () {
    return {
        restrict: "AE",
        replace: true,
        template: '<div id="main"><div ng-view></div></div>'
    }
});