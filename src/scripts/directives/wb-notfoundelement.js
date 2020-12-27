'use strict';
angular.module('ngMaterialWeburger')
.directive('wbNotfoundElement', function() {
    return {
	templateUrl : 'views/directives/wb-notfoundelement.html',
	restrict : 'E',
	link : function postLink() {
	}
    };
});
