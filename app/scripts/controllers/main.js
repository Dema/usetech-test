'use strict';

angular.module('usetechApp')
    .controller('MainCtrl', function($scope, $florm, $routeParams) {
        var Notes = $florm('notes', {
            belongsTo: 'folders'
        });
        if ($routeParams.folderId !== undefined) {
            $scope.notes = Notes.all({
                folder: $routeParams.folderId
            });
        } else {
            $scope.notes = Notes.all();
        }
    });
