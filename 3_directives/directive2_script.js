//IIFE
(function () {

  //List of repositories
  //https://api.github.com/users/snowmaniowa/repos
  var app = angular.module("githubViewerModule", []);

  var MainController = function ($scope, $http) {

    var onUserComplete = function (response) {
      $scope.user = response.data; //RESPONSE **************
      $http.get($scope.user.repos_url)
        .then(onRepos, onError);
    };

    var onRepos = function (response) {
      $scope.repos = response.data; //RESPONSE **************
    };

    var onError = function (reason) {
      $scope.error = "Cannot not fetch the data."
    };


    $scope.search = function (username) {
      $http.get("https://api.github.com/users/" + username)
        .then(onUserComplete, onError);
    };
    $scope.username = "angular";
    $scope.message = "GitHub Viewer";
  };

  //app.controller("MainController", MainController);
  app.controller("MainController", ["$scope", "$http", MainController]);

}());  //IIFE
