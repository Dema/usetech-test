'use strict';

angular.module('usetechApp')
    .service('FolderListService', function FolderListService($florm) {
        this.Folders = $florm('folders', {
            hasMany: 'notes'
        });
        this.Notes = $florm('notes', {
            belongsTo: 'folders'
        });
        this.findNotes = function(folderId) {
            if (folderId === undefined) {
                return this.Notes.all();
            } else {
                return this.Notes.all({
                    foldersId: folderId
                });
            }
        };
        this.findNote = function(noteId) {
            return this.Notes.find(noteId);
        };
        this.createNote = function() {
            return this.Notes.new();
        };
        this.createFolder = function() {
            return this.Folders.new();
        };
        this.findFolder = function(id) {
            return this.Folders.find(id);
        };

        this.folders = this.Folders.all();

        this.refreshFolders = function() {
            this.folders = this.Folders.all();
        };
        this.refreshFolders();
    });
