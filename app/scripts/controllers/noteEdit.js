'use strict';

angular.module('usetechApp')
    .controller('NoteEditCtrl', function($scope, $florm, $routeParams, $window, $location, FolderListService) {
        if ($routeParams.noteId !== undefined) {
            $scope.note = FolderListService.findNote($routeParams.noteId);
        } else {
            $scope.note = FolderListService.createNote();
        }
        $scope.folderListService = FolderListService;
        if ($scope.note.folders !== undefined) {
            $scope.noteFolder = $scope.note.folders.id; //Отдельную переменную завёл для того, чтобы обойти зацикливание $digest
        }

        $scope.cancel = function() {
            $window.history.back();
        };
        $scope.save = function() {
            $scope.note.folders = $scope.noteFolder;
            $scope.note.save();
            $window.history.back();
        };
        $scope.delete = function() {
            $scope.note.delete();
            $location.path('');
        };

    });
