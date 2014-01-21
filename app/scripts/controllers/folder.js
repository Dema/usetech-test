'use strict';
/* global confirm, $ */
angular.module('usetechApp')
    .controller('FolderCtrl', function($scope, FolderListService) {
        $scope.isEditing = false;
        $scope.create = function() {
            $scope.folder = FolderListService.createFolder();
            $scope.isEditing = true;
        };
        $scope.save = function() {
            $scope.folder.save();
            FolderListService.refreshFolders();
            $scope.isEditing = false;
        };
        $scope.cancel = function() {
            $scope.isEditing = false;
            FolderListService.refreshFolders();
        };
        $scope.edit = function() {
            $scope.isEditing = true;
        };
        $scope.delete = function() {
            if (confirm('Вы уверены, что хотите удалить папку и все её заметки?')) {
                $.each($scope.folder.notes, function(idx, note) {
                    note.delete();
                });
                $scope.folder.delete();
                $scope.refreshFolders();
            }
        };
    });
