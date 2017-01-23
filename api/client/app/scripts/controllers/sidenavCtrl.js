'use strict';

/**
 * @ngdoc function
 * @name eSchoolApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the eSchoolApp
 */
angular.module('scolariteApp')
  .controller('sidenavCtrl', function ($scope,$http,$location, $timeout) {
  	$scope.user={};
  	$scope.user.email=localStorage.getItem("email");
  	$scope.faire_sta=function(){
  		$location.path("/statistique");
  		
  	};
  	$scope.faire_staInfo=function(){
  		$location.path("/statistique/Info");
  		
  	};
  	$scope.faire_staElec=function(){
  		$location.path("/statistique/Elec");
  		
  	};
    $scope.faire_staMeca=function(){
      $location.path("/statistique/Meca");
      
    };
    $scope.faire_staCivil=function(){
      $location.path("/statistique/Civil");
      
    };
    $scope.faire_staBiologie=function(){
      $location.path("/statistique/Biologie");
      
    };
    $scope.faire_staGestion=function(){
      $location.path("/statistique/Gestion");
      
    };
    $scope.ajout_etu=function(){
      $location.path("/ajout/etudiant");
      
    };
    $scope.ajout_user=function(){
      $location.path("/register");
      
    };
  });