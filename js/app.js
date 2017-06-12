const myApp = angular.module('myApp', ['ngRoute'])
    .config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix('')
    }])
    .config(['$routeProvider', function($routeProvider) {

        $routeProvider
            .when('/addmodules', {
                controller: 'AddModule',
                templateUrl: 'views/addmodules.html'
            })
            .when('/', {
                templateUrl: 'views/main.html'
            })
            .otherwise({
                redirectTo: '/'
            })
    }])