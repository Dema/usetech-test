'use strict';

angular.module('usetechApp')
    .controller('NoteViewCtrl', function($scope, FolderListService, $routeParams, $location) {

        $scope.note = FolderListService.findNote($routeParams.noteId);

        $scope.edit = function() {
            $location.path(['/notes', $scope.note.folders.id, $scope.note.id, 'edit'].join('/'));
        };
    });
