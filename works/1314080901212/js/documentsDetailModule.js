// create a new module called 'documentsDetailModule' and save 
// a reference to it in a variable called documentsDetailModule 

//初始化表单数据
var documentsDetail =  {
            ID: 'AAA',
            Storage: '001',
            Hand: 'Amy',
            Handingdate: '2015-10-24',
            State: 'finished',
            REmark:'good',
            
        };

//创建模块
var documentsDetailModule = angular.module("documentsDetailModule",['ngRoute']);
documentsDetailModule.config(['$routeProvider',
         function($routeProvider) {
            $routeProvider.
               when('/Project', {
                  templateUrl: 'pages/Project.html',
                  //controller: 'ProjectController'
               }).
			   when('/homeData', {
                  templateUrl: 'pages/homeData.html',
                  //controller: 'HomeDataController'
               }).
               when('/AboutMe', {
                  templateUrl: 'pages/AboutMe.html',
                  //controller: 'AboutMeController'
               }).
               otherwise({
                  redirectTo: '/Project'
               });
         }]);

/*documentsDetailModule.controller('ProjectController', function($scope) {
            $scope.message = "Welcome to see the table";
         });
         documentsDetailModule.controller('AboutMeController', function($scope) {
            $scope.message = "fengyingshi 1314080901212";
         });*/

//创建服务
documentsDetailModule.factory("documentsService",function($http){
      var getdocumentsDetail={};
      
	  //getData方法
      getdocumentsDetail.getData=function(buttondata){
            var promise=$http({
              url:"jsonData/buttonData.json",
              method:"GET",
			  data:buttondata
            });
            return promise;
      }
      
      return getdocumentsDetail;

});

//定义控制器

angular.module('documentsDetailModule').controller('MyFilterDemoCtrl', function($scope,documentsService) {
          var promise=documentsService.getData();
		  
		  $scope.create = function () {
			$scope.showSuccessMessage=false;
			$scope.showErrorMessage=false;
			//promise的成功方法
			promise.success(function(data,status){
			
		  
			$scope.successMessage =data[0].SMessage;
			alert($scope.successMessage);
   		    //$scope.showSuccessMessage=true;
			});
		  
			//promise的失败方法
			promise.error(function(data,status){
		  
		  
			$scope.errorsMessage =data[0].EMessage;
			alert($scope.errorsMessage);
		  
			});
		  }

			
			
			$scope.SelectItem = [
			 {
				ID:'00001',
				Storage:'001',
				Hand:'礼品盒',

			 },
			 {
				ID:'00002',
				Storage:'002',
				Hand:'按时6564564',
			 }
			 
			];
			
			
			

			


});



//定义过滤器
documentsDetailModule.filter('stripDashes', function() {
	return function(txt) {
		// filter code would go here
	};
});
