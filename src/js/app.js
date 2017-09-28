var App = {
    version: "{{VERSION}}"
};

var app = angular.module('ksass', ['ngRoute', 'ngAria']);

//
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/partials/home-partial.html'
        })
        .when('/asignatura', {
            templateUrl: '/partials/asignatura.html',
            controller: 'asignatura-controller'
        });

    if (window.history && window.history.pushState) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }
}]).constant('urlBase', 'http://localhost:8080/StiData-web/rest/');
