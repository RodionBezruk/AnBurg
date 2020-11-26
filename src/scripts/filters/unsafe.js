'use strict';
angular.module('ngMaterialExtension')
.filter('unsafe', function($sce) {
	return function(val) {
		return $sce.trustAsHtml(val);
	};
});
