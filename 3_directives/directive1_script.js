//IIFE
(function () {

    //create a module (usually this is done in a different JS file)
    //give a name to module
    //pass dependency parameter
    var app = angular.module("githubViewerModule", []);
  
    var MainController = function ($scope, $http) {
  
      var onUserComplete = function (response) {
        $scope.user = response.data;
      };
  
      var onUserError = function () {
        $scope.error = "Cannot not fetch the data. Please check URL or username."
      };
  
  
      $scope.search = function (username) {
        $http.get("https://api.github.com/users/" + username)
          .then(onUserComplete, onUserError);
      };
      $scope.username = "snowmaniowa";
      $scope.message = "GitHub Viewer";
    };
  
    //app.controller("MainController", MainController);
    app.controller("MainController", ["$scope", "$http", MainController]);
  
  }());  //IIFE
  