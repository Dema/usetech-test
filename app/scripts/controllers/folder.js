'use strict';
/* global confirm, $ */
angular.module('usetechApp')
    .controller('FolderCtrl', function($scope) {
        $scope.isEditing = false;
        $scope.create = function() {
            $scope.folder = $scope.newFolder(); //FIXME Как-то кривовато, но дублировать Folders не хочется
            $scope.isEditing = true;
        };
        $scope.save = function() {
            $scope.folder.save();
            $scope.refreshFolders();
            $scope.isEditing = false;
        };
        $scope.cancel = function() {
            $scope.isEditing = false;
            $scope.refreshFolders(); //FIXME Некрасиво, надо перечитывать только одну папку
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
