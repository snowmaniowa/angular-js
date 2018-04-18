(function () {
  //List of repositories
  //https://api.github.com/users/snowmaniowa/repos
  var santhaAngularApp = angular.module("santhaModule_103", []);

  var SanthaController = function ($scope, $http) {    

    $scope.userNameVar = "angular";
    $scope.getUserRepos = function (userNameVar) {
      var promise1 = $http.get("https://api.github.com/users/" + userNameVar);  //REST URL      
      promise1.then(responseCallBack1, errorCallBack);
    };
    var responseCallBack1 = function (restResponse1) {  //function(response) 
      $scope.gitAccountDo = restResponse1.data;  
      var promise2 = $http.get($scope.gitAccountDo.repos_url);    //REST URL
      promise2.then(responseCallBack2, errorCallBack);
    };
    var responseCallBack2 = function (restResponse2) {  //function(response) 
      $scope.repos = restResponse2.data; 
    };
    var errorCallBack = function (errorReason) {        //function(errorReason) 
      $scope.error = "Cannot not fetch the data."
    };
  };
  santhaAngularApp.controller("SanthaController", ["$scope", "$http", SanthaController]);

}());  //IIFE
