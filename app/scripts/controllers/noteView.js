'use strict';

angular.module('usetechApp')
    .controller('NoteViewCtrl', function($scope, $florm, $routeParams, $location) {
        var Note = $florm('notes');
        $scope.note = Note.find($routeParams.id);

        $scope.edit = function() {
            $location.path('/note/' + $scope.note.id + '/edit');
        };
    });
