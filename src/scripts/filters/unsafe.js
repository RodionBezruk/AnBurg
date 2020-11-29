'use strict';
angular.module('ngMaterialWeburger')
.filter('unsafe', function($sce) {
	return function(val) {
		return $sce.trustAsHtml(val);
	};
});
