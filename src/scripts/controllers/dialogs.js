'use strict';
angular.module('ngMaterialExtension')
    .controller('DialogsCtrl', function ($scope, $mdDialog, mdeModel, style) {
        function hide() {
            $mdDialog.hide();
        }
        function cancel() {
            $mdDialog.cancel();
        }
        function answer(response) {
            $mdDialog.hide(response);
        }
        $scope.mdeModel = mdeModel;
        $scope.style = style;
        $scope.hide = hide;
        $scope.cancel = cancel;
        $scope.answer = answer;
    })
    .controller('SettingDialogsCtrl', function ($scope, $mdDialog, mdeModel, mdeParent, style) {
        function hide() {
            $mdDialog.hide();
        }
        function cancel() {
            $mdDialog.cancel();
        }
        function answer(response) {
            $mdDialog.hide(response);
        }
        $scope.mdeModel = mdeModel;
        $scope.mdeParent = mdeParent;
        $scope.style = style;
        $scope.hide = hide;
        $scope.cancel = cancel;
        $scope.answer = answer;
    });
