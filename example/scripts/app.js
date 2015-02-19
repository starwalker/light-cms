'use strict';
var lightApp = angular.module('lightApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'angular-underscore/filters',
    'schemaForm',
    'ui.ace',
    'ui.tree',
    'ui.tree-filter',
    'ui.highlight',
    'ui.select',
    'ui.sortable',
    'hc.marked',
    'toaster',
    'schemaForm-marked',
    'pascalprecht.translate',
    'mgcrea.ngStrap',
    'schemaForm-datepicker',
    'schemaForm-datetimepicker',
    'schemaForm-timepicker',
    'angular-loading-bar',
    'LocalStorageModule'
])
.config(['$httpProvider',
    function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptorService');
    }
])
.config(['$routeProvider', '$locationProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', function ($routeProvider, $locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {

    // Notice that the registration methods on the
    // module are now being overridden by their provider equivalents
    lightApp.controller = $controllerProvider.register;
    lightApp.directive  = $compileProvider.directive;
    lightApp.filter     = $filterProvider.register;
    lightApp.factory    = $provide.factory;
    lightApp.service    = $provide.service;

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainCtrl'
      })
      .when('/signin', {
        templateUrl: 'views/form.html',
        controller: 'signinCtrl'
      })
      .when('/form/:id/:parentId?', {
        templateUrl: 'views/form.html',
        controller: 'formCtrl'
      })
      .when('/formAdmin', {
        templateUrl: 'views/formAdmin.html',
        controller: 'FormAdminCtrl'
      })
      .when('/menuAdmin', {
        templateUrl: 'views/menuAdmin.html',
        controller: 'MenuAdminCtrl'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl'
      })
      .when('/page/com-networknt-light-v-forum-home', {
          templateUrl: 'views/com-networknt-light-v-forum-home.html'
      })
      .when('/page/com-networknt-light-v-forum-post', {
          templateUrl: 'views/com-networknt-light-v-forum-post.html'
      })
      .when('/page/com-networknt-light-v-forum-post-view', {
          templateUrl: 'views/com-networknt-light-v-forum-post-view.html'
      })
      .when('/page/:id', {
          templateUrl: 'views/page.html',
          controller: 'pageCtrl'
      })
      .otherwise({
          templateUrl: '404.html',
          controller: 'mainCtrl'
      });
    $locationProvider.html5Mode(true);
}])
.run(['$rootScope', 'authService', 'lightLoggingService', function ($rootScope, authService, lightLoggingService) {
        lightLoggingService.debug('debug information from lightLoggingService: Angular is running...');
        authService.fillAuthData();
    }
]);
