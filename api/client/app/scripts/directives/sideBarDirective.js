'use strict';

/**
 * @ngdoc directive
 * @name hintespApp.directive:sidernavbarDirective
 * @description
 * # sidernavbarDirective
 */
angular.module('scolariteApp')
.directive('baSidebar', function () { 
    var directiveDefinitionObject = {
        restrict: 'E',
        templateUrl: '../../views/sideNav.html',
        replace: true,
        transclude: true,
        scope: false,
        controller:'sidenavCtrl',
        /*link: function postLink(scope, iElement, iAttrs) { ... }, 
        compile: function compile(tElement, tAttrs, transclude) {
            return {
                pre: function preLink(scope, iElement, iAttrs, controller) { ... }, 
                post: function postLink(scope, iElement, iAttrs, controller) { ... }
            }
        }*/
    };
    return directiveDefinitionObject; 
});
