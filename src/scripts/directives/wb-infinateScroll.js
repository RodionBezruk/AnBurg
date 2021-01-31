'use strict';
angular.module('ngMaterialWeburger')
.directive('wbInfinateScroll', function() {
    return {
	restrict : 'A',
	scope : {
	    loadPage : '=wbInfinateScroll'
	},
	link : function(scope, elem, attrs) {
	    elem.on('scroll', function(evt) {
		var raw = elem[0];
		if (raw.scrollTop + raw.offsetHeight == raw.scrollHeight) {
		    scope.loadPage();
		}
	    });
	}
    };
});
