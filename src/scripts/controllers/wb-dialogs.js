'use strict';
angular.module('ngMaterialWeburger')
.controller('WbDialogsCtrl', function($scope, $mdDialog, wbModel, style) {
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
    $scope.style = style;
    $scope.hide = hide;
    $scope.cancel = cancel;
    $scope.answer = answer;
});
