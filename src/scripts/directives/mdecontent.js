'use strict';
angular.module('ngMaterialExtension')
.directive('mdeContent', function($compile, $widget) {
	var bodyElementSelector = 'div#mde-content-body';
	var placeholderElementSelector = 'div#mde-content-placeholder';
	return {
		templateUrl : 'views/directives/mdecontent.html',
		transclude : true,
		restrict : 'E',
		replace : true,
		scope : {
			mdeModel : '=?',
			mdeEditable : '=?',
			mdeParent : '=?'
		},
		controller : function($scope, $element, $mdDialog) {
			var scope = $scope;
			function isEditable() {
				if (scope.mdeParent) {
					return scope.mdeParent.isEditable();
				}
				return scope.mdeEditable;
			}
			function createWidget(widget, parentScope, model) {
				var element = angular.element(widget);
				element.attr('mde-model', 'model');
				element.attr('mde-editable', 'mdeEditable()');
				element.attr('mde-parent', 'mdeParent');
				var childScope = parentScope.$new(true, parentScope);
				childScope.model = model;
				childScope.mdeEditable = scope.isEditable;
				childScope.mdeParent = parentScope;
				return $compile(element)(childScope);
			}
			function removeWidgets() {
				$element
				.children(bodyElementSelector)
				.children(placeholderElementSelector)
				.empty();
			}
			function removeWidget(model) {
				if (model == scope.mdeModel) {
					scope.mdeParent.removeWidget(model);
				}
				var index = scope.mdeModel.contents.indexOf(model);
				if (index > -1) {
					scope.mdeModel.contents.splice(index, 1);
				}
				removeWidgets();
				scope.mdeModel.contents.forEach(addWidget);
			}
			function newWidget(mdeModel) {
				$mdDialog.show({
					controller : 'DialogsCtrl',
					templateUrl : 'views/dialogs/mdeselectwidget.html',
					parent : angular.element(document.body),
					clickOutsideToClose : true,
					fullscreen : true,
					locals : {
						mdeModel : {},
						style : {}
					},
				}).then(function(model) {
					mdeModel.contents.push(model);
					addWidget(model);
				});
			}
			function addWidget(item) {
				$widget.widget(item).then(function(widget) {
					$element
					.children(bodyElementSelector)
					.children(placeholderElementSelector)
					.append(createWidget(widget.dom, $scope, item));
				});
			}
			function settings() {
				return $mdDialog.show({
					controller : 'SettingDialogsCtrl',
					templateUrl : 'views/dialogs/mdesettings.html',
					parent : angular.element(document.body),
					clickOutsideToClose : true,
					fullscreen : true,
					locals : {
						mdeModel : scope.mdeModel,
						mdeParent:scope.mdeParent,
						style : {
							pages : [ 'description', 'border', 'background','pageLayout','selfLayout' ]
						}
					}
				});
			}
			function isArray(model){
				return (model && model.constructor === Array);
			}
			scope.settings = settings;
			scope.removeWidgets = removeWidgets;
			scope.removeWidget = removeWidget;
			scope.newWidget = newWidget;
			scope.isEditable = isEditable
			scope.$watch('mdeModel', function() {
				removeWidgets();
				if (!scope.mdeModel) {
					return;
				}
				if(!isArray(scope.mdeModel.contents)){
					scope.mdeModel.contents = [];
				}
				scope.mdeModel.type = 'Page';
				scope.mdeModel.contents.forEach(addWidget);
			});
		}
	};
});
