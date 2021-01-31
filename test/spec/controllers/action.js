'use strict';
describe('Controller: WbActionCtrl', function() {
    beforeEach(module('ngMaterialWeburger'));
    var WbActionCtrl, scope;
    beforeEach(inject(function($controller, $rootScope) {
	scope = $rootScope.$new();
	WbActionCtrl = $controller('WbActionCtrl', {
	    $scope : scope
	});
    }));
    it('should attach a list of awesomeThings to the scope', function() {
	expect(WbActionCtrl.types).not.toBe(null);
    });
});
