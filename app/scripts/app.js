'use strict';

angular.module('usetechApp', [
    'ngCookies',
    'ngSanitize',
    'ngRoute',
    'ngFlorm',
    'textAngular'
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
            .when('/note/new', {
                templateUrl: 'views/noteEdit.html',
                controller: 'NoteEditCtrl'
            })
            .when('/note/:id/edit', {
                templateUrl: 'views/noteEdit.html',
                controller: 'NoteEditCtrl'
            })
            .otherwise({
                redirectTo: '/notes/'
            });
    });
