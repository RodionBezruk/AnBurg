'use strict';
angular.module('ngMaterialExtension')
.directive('mdeNotfoundElement', function() {
	return {
		templateUrl : 'views/directives/mdenotfoundelement.html',
		restrict : 'E',
		link : function postLink() {
		}
	};
});
