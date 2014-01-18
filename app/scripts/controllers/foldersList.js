'use strict';

angular.module('usetechApp')
    .controller('FoldersListCtrl', function($scope, $florm) {
        var Folders = $florm('folders', {
            hasMany: 'notes'
        });
        $scope.refreshFolders = function() {
            $scope.folders = Folders.all();
        };
        $scope.refreshFolders();
        $scope.newFolder = function() {
            return Folders.new();
        };
    });
