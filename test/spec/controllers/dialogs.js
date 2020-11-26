'use strict';
describe('Controller: DialogsCtrl', function () {
  beforeEach(module('ngMaterialExtension'));
  var DialogsCtrl;
  var scope;
  var ngModel;
  var mdDialog;
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DialogsCtrl = $controller('DialogsCtrl', {
      $scope: scope,
      $mdDialog: mdDialog,
      mdeModel: ngModel,
      style: {}
    });
  }));
  it('should attach a list of awesomeThings to the scope', function () {
  });
});
