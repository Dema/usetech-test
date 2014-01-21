'use strict';
/* global confirm */
angular.module('usetechApp')
    .controller('MainCtrl', function($scope, $routeParams, $location, FolderListService) {
        $scope.folderListService = FolderListService;
        $scope.refreshNotes = function() {
            if ($routeParams.folderId !== undefined) {
                try {
                    $scope.currentFolder = FolderListService.findFolder($routeParams.folderId);
                } catch (e) {
                    $scope.currentFolder = undefined;
                    $scope.notes = FolderListService.findNotes();
                }
                $scope.notes = FolderListService.findNotes($routeParams.folderId);
            } else {
                $scope.notes = FolderListService.findNotes();
            }
        };
        $scope.refreshNotes();
        $scope.$watch('folderListService.folders', function() {
            //Отслеживаем переименование и удаление папки
            $scope.refreshNotes();
        });
        $scope.create = function() {
            $location.path('/notes/' + ($scope.currentFolder && $scope.currentFolder.id || undefined) + '/new');
        };
        $scope.delete = function(note) {
            if (confirm('Вы уверены, что хотите удалить заметку?')) {
                note.delete();
                $scope.refreshNotes();
            }
        };
    });
