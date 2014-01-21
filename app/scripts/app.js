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
            .when('/notes/:folderId/:noteId/view', {
                templateUrl: 'views/noteView.html',
                controller: 'NoteViewCtrl'
            })
            .when('/notes/:folderId/new', {
                templateUrl: 'views/noteEdit.html',
                controller: 'NoteEditCtrl'
            })
            .when('/notes/:folderId/:noteId/edit', {
                templateUrl: 'views/noteEdit.html',
                controller: 'NoteEditCtrl'
            })
            .otherwise({
                redirectTo: '/notes/'
            });
    });
