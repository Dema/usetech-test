'use strict';

angular.module('usetechApp', [
    'ngCookies',
    'ngSanitize',
    'ngRoute',
    'ngFlorm'
])
    .config(function($routeProvider) {
        $routeProvider
            .when('/notes/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/notes/:folderId', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/note/:id/view', {
                templateUrl: 'views/noteView.html',
                controller: 'NoteViewCtrl'
            })
            .otherwise({
                redirectTo: '/notes/'
            });
    });
