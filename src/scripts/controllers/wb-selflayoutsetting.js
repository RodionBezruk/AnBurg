'use strict';
angular.module('ngMaterialWeburger')
.controller('WbSelfLayoutWbSettingsCtrl', function($scope, $settings) {
    var scope = $scope;
    scope.flexAlignItem = [ {
	title : 'auto',
	value : 'mde-flex-item-auto'
    }, {
	title : 'Start',
	value : 'mde-flex-item-start'
    }, {
	title : 'End',
	value : 'mde-flex-item-end'
    }, {
	title : 'Center',
	value : 'mde-flex-item-center'
    }, {
	title : 'stretch',
	value : 'mde-flex-item-stretch'
    } ];
});
