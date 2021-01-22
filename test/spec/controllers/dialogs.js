'use strict';
describe('Controller: DialogsCtrl', function() {
    beforeEach(module('ngMaterialWeburger'));
    var DialogsCtrl;
    var scope;
    var ngModel;
    var mdDialog;
    beforeEach(inject(function($controller, $rootScope) {
	scope = $rootScope.$new();
	DialogsCtrl = $controller('DialogsCtrl', {
	    $scope : scope,
	    $mdDialog : mdDialog,
	    wbModel : ngModel,
	    style : {}
	});
    }));
    it('should attach a list of awesomeThings to the scope', function() {
	expect(DialogsCtrl).not.toBe(null);
    });
});
