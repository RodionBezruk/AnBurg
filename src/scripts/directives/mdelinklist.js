'use strict';
angular.module('ngMaterialExtension')
.directive('mdeLinkList', function() {
	return {
		restrict : 'E',
		replace : 'true',
		templateUrl : 'views/directives/mdelinklist.html',
		require : '^mdeModel',
		scope : {
			mdeEditable : '=?',
			mdeModel : '=?'
		},
	};
});
