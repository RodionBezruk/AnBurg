'use strict';
angular.module('ngMaterialWeburger')
.controller('WbSelfLayoutWbSettingsCtrl', function($scope, $settings) {
    var scope = $scope;
    scope.flexAlignItem = [ {
	title : 'auto',
	value : 'wb-flex-item-auto'
    }, {
	title : 'Start',
	value : 'wb-flex-item-start'
    }, {
	title : 'End',
	value : 'wb-flex-item-end'
    }, {
	title : 'Center',
	value : 'wb-flex-item-center'
    }, {
	title : 'stretch',
	value : 'wb-flex-item-stretch'
    } ];
});
