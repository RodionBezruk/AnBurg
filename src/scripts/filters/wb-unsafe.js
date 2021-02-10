'use strict';
angular.module('ngMaterialWeburger')
.filter('wbunsafe', function($sce) {
	return function(val) {
		return $sce.trustAsHtml(val);
	};
});
