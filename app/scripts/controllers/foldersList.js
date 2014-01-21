'use strict';

angular.module('usetechApp')
    .controller('FoldersListCtrl', function($scope, $florm, FolderListService) {
        $scope.folderListService = FolderListService;
        $scope.refreshFolders = function() {
            FolderListService.refreshFolders();
        };
        $scope.refreshFolders();
    });
