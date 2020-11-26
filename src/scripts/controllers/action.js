'use strict';
angular.module('ngMaterialExtension')
.controller('ActionCtrl', function($scope) {
	var types = [ {
		icon : 'link',
		label : 'Link internal or external',
		key : 'link'
	}, {
		icon : 'action',
		label : 'State change',
		key : 'state'
	} ];
	$scope.types = types;
});
