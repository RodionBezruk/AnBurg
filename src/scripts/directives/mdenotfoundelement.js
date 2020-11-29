'use strict';
angular.module('ngMaterialWeburger')
.directive('mdeNotfoundElement', function() {
	return {
		templateUrl : 'views/directives/mdenotfoundelement.html',
		restrict : 'E',
		link : function postLink() {
		}
	};
});
