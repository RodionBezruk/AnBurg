'use strict';
angular.module('ngMaterialWeburger')
.directive('wbCollapsibleItemList', function() {
    return {
	templateUrl : 'views/directives/wb-collapsibleitemlist.html',
	restrict : 'E',
	replase : true,
	scope : {
	    mdeEditable : '=?',
	    mdeModel : '=?'
	}
    };
});
