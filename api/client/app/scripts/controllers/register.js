'use strict';

/**
 * @ngdoc function
 * @name jobmbayeProjectAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jobmbayeProjectAngularApp
 */
angular.module('scolariteApp')
  .controller('RegisterCtrl', function (API_URL, $scope, $http, $location) {//API_URL, $scope, $http
   $scope.user={};

  if($scope.user.password=$scope.user.confirme) 
 {
    $scope.btnSubmit=function(){
		$http.post(API_URL + '/Users',$scope.user).then(function(data){
      console.log(data);
      $scope.user={};
    }, 
    function(data){
      /*$scope.bonRep=*/console.log(data);
      $scope.user.password="";
      $scope.user.confirme="";

    });
    }; 
  }
 
    
  });