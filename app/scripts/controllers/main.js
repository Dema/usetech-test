'use strict';
/* global confirm */
angular.module('usetechApp')
    .controller('MainCtrl', function($scope, $florm, $routeParams) {
        var Notes = $florm('notes', {
            belongsTo: 'folders'
        });
        var refreshNotes = function() {
            if ($routeParams.folderId !== undefined) {
                $scope.notes = Notes.all({
                    folder: $routeParams.folderId
                });
            } else {
                $scope.notes = Notes.all();
            }
        };
        refreshNotes();
        $scope.create = function() {
            $location.path('/note/new');
        };
        $scope.delete = function(note) {
            if (confirm('Вы уверены, что хотите удалить заметку?')) {
                note.delete();
                refreshNotes();
            }
        };
    });
