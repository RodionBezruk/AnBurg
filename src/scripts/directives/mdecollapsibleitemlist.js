'use strict';
angular.module('ngMaterialWeburger')
.directive('mdeCollapsibleItemList', function() {
	return {
		templateUrl : 'views/directives/mdecollapsibleitemlist.html',
		restrict : 'E',
		replase : true,
		scope : {
			mdeEditable : '=?',
			mdeModel : '=?'
		}
	};
});
