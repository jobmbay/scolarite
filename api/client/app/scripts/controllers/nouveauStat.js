'use strict';

/**
 * @ngdoc function
 * @name jobmbayeProjectAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jobmbayeProjectAngularApp
 */
angular.module('scolariteApp')
  .controller('NouveauStatCtrl', function (API_URL,$scope,$http) {
  	$http
  	.get(API_URL + '/etudiant')
  	.then(
  	function(data){
      console.log(data.data);
    },
    function(data){
      console.log(data);
    });
    
  	/*$scope.fichier={};
  	$scope.excel=function(){
  		$scope.fichier.fiche='fkjlm'
  		console.log();
  	}*/
  	//$scope.fichier={};
$scope.uploadExcel = function()
	{
		console.log();
	$http.post('http://localhost:3000/api/upload',$scope.fichier.file).then(
		function(data){
			console.log(data);
		},
		function(data){
			console.log(data);
		});
	}









$scope.fichier={};


    $scope.onPictureCrop = function(dataUri) {
      console.log('onPictureCrop', dataUri);
    }


    $scope.upload = function (file) {
        Upload.upload({
            url: API_URL + '/uploads',
            data: {
              file: file, 
              'username': $scope.username
            }
        }).then(function (resp) {
            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
    } 

    $scope.uploadFile = function()
    {
      $scope.showAddFile = true;

      //var submitBtn = document.getElementById('submitBtn');
      //submitBtn.click();
    }

    $scope.annulerUpload = function()
    {
      $scope.showAddFile = false;
    }
    $scope.file= {};
    $scope.matieres=[];
    $scope.smartTableData=[];
    $scope.validerUpload = function()
    {
      console.log($scope.fichier.file);
      $scope.file.formation=localStorage.getItem("formation");
      $scope.file.facon='hint';
      $http.post(API_URL + '/addHint',$scope.file).success(function(data){
          $scope.file={};
          $http.get(API_URL + '/getHint').success(function(donnee){
              $scope.upload($scope.fichier.file);
              $scope.showAddFile = false;
              $scope.hints=donnee;
            });
      });
    }










  });
