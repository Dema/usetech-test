'use strict';
/* global confirm */
angular.module('usetechApp')
    .controller('MainCtrl', function($scope, $florm, $routeParams, $location) {
        var Notes = $florm('notes', {
            belongsTo: 'folders'
        });
        $scope.refreshNotes = function() {
            if ($routeParams.folderId !== undefined) {
                $scope.notes = Notes.all({
                    foldersId: $routeParams.folderId
                });
            } else {
                $scope.notes = Notes.all();
            }
        };
        $scope.refreshNotes();
        $scope.create = function() {
            $location.path('/note/new');
        };
        $scope.delete = function(note) {
            if (confirm('Вы уверены, что хотите удалить заметку?')) {
                note.delete();
                $scope.refreshNotes();
            }
        };
    });
