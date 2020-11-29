'use strict';
angular.module('ngMaterialWeburger')
.directive('mdeCopyright', function() {
	return {
		restrict : 'E',
		replace : true,
		templateUrl : 'views/directives/mdecopyright.html',
		scope : {
			mdeEditable : '=?',
			mdeModel : '=?',
			mdeParent: '=?'
		},
		controller : function($scope, $mdDialog, $act) {
			var scope = $scope;
			var model = $scope.mdeModel;
			function removeWidget() {
				if (scope.mdeParent) {
					scope.mdeParent.removeWidget(model);
				}
			}
			function settings() {
				return $mdDialog.show({
					controller : 'DialogsCtrl',
					templateUrl : 'views/dialogs/mdesettings.html',
					parent : angular.element(document.body),
					clickOutsideToClose : true,
					fullscreen : true,
					locals : {
						mdeModel : model,
						style : {
							pages : [ 'text' ]
						}
					}
				});
			}
			scope.removeWidget = removeWidget;
			scope.settings = settings;
		}
	};
});
