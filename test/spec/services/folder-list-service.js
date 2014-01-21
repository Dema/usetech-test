'use strict';

describe('Service: FolderListService', function () {

  // load the service's module
  beforeEach(module('usetechApp'));

  // instantiate service
  var FolderListService;
  beforeEach(inject(function (_FolderListService_) {
    FolderListService = _FolderListService_;
  }));

  it('should do something', function () {
    expect(!!FolderListService).toBe(true);
  });

});
