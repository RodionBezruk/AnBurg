'use strict';
describe('Controller: WbDialogsCtrl', function() {
    beforeEach(module('ngMaterialWeburger'));
    var WbDialogsCtrl;
    var scope;
    var ngModel;
    var mdDialog;
    beforeEach(inject(function($controller, $rootScope) {
	scope = $rootScope.$new();
	WbDialogsCtrl = $controller('WbDialogsCtrl', {
	    $scope : scope,
	    $mdDialog : mdDialog,
	    wbModel : ngModel,
	    style : {}
	});
    }));
    it('should attach a list of awesomeThings to the scope', function() {
	expect(WbDialogsCtrl).not.toBe(null);
    });
});
