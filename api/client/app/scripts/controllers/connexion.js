'use strict';

/**
 * @ngdoc function
 * @name jobmbayeProjectAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jobmbayeProjectAngularApp
 */
angular.module('scolariteLockApp')
  .controller('ConnexionCtrl', function (API_URL, $scope, $http, $location) {//API_URL, $scope, $http
   $scope.user={};

    $scope.checkbox=function(){};

    $scope.btnSubmit=function(){
		$http.post(API_URL + '/Users/login',$scope.user).then(function(data){
      /*$scope.bonRep=*/console.log(data);
      localStorage.setItem("email", $scope.user.email);
      localStorage.setItem("password", $scope.user.password);
      localStorage.setItem("username", data.data.prenom);
      localStorage.setItem("id", data.data.id);
      $scope.user={};
      document.getElementById('accueil').click();
    }, 
    function(data){
      /*$scope.bonRep=*/console.log(data);
      $scope.user.password="";
      document.getElementById('password').placeholder="Email ou Mot de passe incorect";
    });
    }; 
 
    $scope.btnFacebook=function(){},
    $scope.btnGoogle=function(){}
    
  });