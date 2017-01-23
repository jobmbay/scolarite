'use strict';

/**
 * @ngdoc function
 * @name jobmbayeProjectAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the jobmbayeProjectAngularApp
 */
angular.module('scolariteLockApp')
  .controller('lockscreenCtrl', function (API_URL, $scope, $http) {
  	$scope.user={};
    $scope.user.nom=localStorage.getItem("username");
    $scope.utilisateur={};
    $scope.deverouiller=function()
    {
    	if($scope.utilisateur.password==localStorage.getItem("password"))
    	{
    		document.getElementById("deverouiller").click();
    	}
    	else
    	{
    		$scope.utilisateur.password="";
    		document.getElementById("deverouillerInput").placeholder="Mot de passe incorect";
    		//document.getElementById("deverouillerInput").style.color="red";
    	}
    }
  });