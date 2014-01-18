'use strict';

angular.module('usetechApp')
    .controller('NoteEditCtrl', function($scope, $florm, $routeParams, $window, $location) {
        var Note = $florm('notes', {
            belongsTo: 'folders'
        });
        if ($routeParams.id !== undefined) {
            $scope.note = Note.find($routeParams.id);
        } else {
            $scope.note = Note.new();
        }
        var Folders = $florm('folders'); //FIXME Убрать дублирование
        $scope.folders = Folders.all();
        if ($scope.note.folders !== undefined) {
            $scope.newFolder = $scope.note.folders.id; //Отдельную переменную завёл для того, чтобы обойти зацикливание $digest
        }

        $scope.cancel = function() {
            $window.history.back();
        };
        $scope.save = function() {
            $scope.note.folders = $scope.newFolder;
            $scope.note.save();
            $window.history.back();
        };
        $scope.delete = function() {
            $scope.note.delete();
            $location.path('');
        };

    });
