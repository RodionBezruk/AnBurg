'use strict';
angular.module('ngMaterialWeburger')
.controller(
		'OldBackgroundSettingCtrl',
		function($scope) {
			var scope = $scope;
			var model = $scope.mdeModel;
			scope.types = [ {
				title : 'None',
				value : 'none'
			}, {
				title : 'Color',
				value : 'color'
			}];
		});
