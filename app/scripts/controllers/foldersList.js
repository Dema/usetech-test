'use strict';

angular.module('usetechApp')
    .controller('FoldersListCtrl', function($scope, $florm) {
        var Folders = $florm('folders');
        $scope.folders = Folders.all();
    });
