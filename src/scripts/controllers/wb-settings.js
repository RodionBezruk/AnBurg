'use strict';
angular.module('ngMaterialWeburger')
.controller('WbSettingsCtrl', function($scope, $settings) {
	var scope = $scope;
	function loadPages() {
		var keys = scope.style.pages;
		var settings = [];
		for (var i = 0; i < keys.length; i++) {
			settings.push($settings.page(keys[i]));
		}
		scope.settings = settings;
	}
	loadPages();
});
