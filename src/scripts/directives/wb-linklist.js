'use strict';
angular.module('ngMaterialWeburger')
.directive('wbLinkList', function() {
    return {
	restrict : 'E',
	replace : 'true',
	templateUrl : 'views/directives/wb-linklist.html',
	require : '^mdeModel',
	scope : {
	    mdeEditable : '=?',
	    mdeModel : '=?'
	},
    };
});
