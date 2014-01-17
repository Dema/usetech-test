'use strict';

angular.module('usetechApp')
    .controller('NoteEditCtrl', function($scope, $florm, $routeParams, $window, $location) {
        var Note = $florm('notes');
        $scope.note = Note.find($routeParams.id);
        $scope.cancel = function() {
            $window.history.back();
        };
        $scope.save = function() {
            $scope.note.save();
            $window.history.back();
        };
        $scope.delete = function() {
            $scope.note.delete();
            $location.path('');
        };

    });
