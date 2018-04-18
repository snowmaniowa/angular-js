(function () {  //IIFE
    //create a module (usually this is done in a different JS file)
    //give a name to module & pass dependency parameter
    var app = angular.module("githubViewerModule", []);
  
    var MainController_step1 = function ($scope, $http) {
      $scope.userNameVar = "snowmaniowa";
      $scope.searchUsersFunction = function (userNameVar) {
        $http.get("https://api.github.com/users/" + userNameVar)  //REST URL
          .then(onUserComplete_step3a, onUserError_step3b);
      };     
      var onUserComplete_step3a = function (response) {
        $scope.gitAccountDo = response.data;
      };
        var onUserError_step3b = function () {
        $scope.error = "Cannot not fetch the data. Please check URL or username."
      };
    }; 

    //app.controller("MainController", MainController);
    app.controller("MainController", ["$scope", "$http", MainController_step1]);
  }());  //IIFE
  