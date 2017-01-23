'use strict';

/**
 * @ngdoc overview
 * @name jobmbayeProjectAngularApp
 * @description
 * # jobmbayeProjectAngularApp
 *
 * Main module of the application.
 */
angular
  .module('scolariteApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'chartjs-directive',
    'highcharts-ng',
    'lbServices'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/accueil.html',
        controller: 'AccueilCtrl',
        controllerAs: 'acceuil'
      })
      .when('/connexion', {
        templateUrl: 'views/connexion.html',
        controller: 'ConnexionCtrl',
        controllerAs: 'connection'
      })
      .when('/statistique/nouveau', {
        templateUrl: 'views/nouveaustat.html',
        controller: 'NouveauStatCtrl',
        controllerAs: 'Nouveaustat'
      })
      .when('/ajout/etudiant', {
        templateUrl: 'views/ajoutEtudiant.html',
        controller: 'ajoutEtudiantCtrl',
        controllerAs: 'AjoutEtudiant'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
      })
      .when('/statistique', {
        templateUrl: 'views/statistique.html',
        controller: 'StatistiqueCtrl',
        controllerAs: 'about'
      })
      .when('/statistique/Info', {
        templateUrl: 'views/statistiqueInfo.html',
        controller: 'StatInfoCtrl',
        controllerAs: 'about'
      })
      .when('/statistique/Meca', {
        templateUrl: 'views/statistiqueMeca.html',
        controller: 'StatMecaCtrl',
        controllerAs: 'about'
      })
      .when('/statistique/Elec', {
        templateUrl: 'views/statistiqueElec.html',
        controller: 'StatElecCtrl',
        controllerAs: 'about'
      })
      .when('/statistique/Civil', {
        templateUrl: 'views/statistiqueCivil.html',
        controller: 'StatCivilCtrl',
        controllerAs: 'about'
      })
      .when('/statistique/Biologie', {
        templateUrl: 'views/statistiqueBiologie.html',
        controller: 'StatBiologieCtrl',
        controllerAs: 'about'
      })
      .when('/statistique/Gestion', {
        templateUrl: 'views/statistiqueGestion.html',
        controller: 'StatGestionCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .value('API_URL', 'http://localhost:3000/api');
