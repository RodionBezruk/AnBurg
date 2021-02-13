'use strict';
angular.module('ngMaterialWeburger')
.controller('WbSettingDialogsCtrl',
	function($scope, $mdDialog, wbModel, wbParent, style) {
	    function hide() {
		$mdDialog.hide();
	    }
	    function cancel() {
		$mdDialog.cancel();
	    }
	    function answer(response) {
		$mdDialog.hide(response);
	    }
	    $scope.wbModel = wbModel;
	    $scope.wbParent = wbParent;
	    $scope.style = style;
	    $scope.hide = hide;
	    $scope.cancel = cancel;
	    $scope.answer = answer;
	});
