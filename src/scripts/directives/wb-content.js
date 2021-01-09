'use strict';
angular.module('ngMaterialWeburger')
.directive(
	'wbContent',
	function($compile, $widget) {
	    var bodyElementSelector = 'div#wb-content-body';
	    var placeholderElementSelector = 'div#wb-content-placeholder';
	    return {
		templateUrl : 'views/directives/wb-content.html',
		transclude : true,
		restrict : 'E',
		replace : true,
		scope : {
		    wbModel : '=?',
		    wbEditable : '=?',
		    wbParent : '=?'
		},
		controller : function($scope, $element, $settings, $mdDialog) {
		    var scope = $scope;
		    function isEditable() {
			if (scope.wbParent) {
			    return scope.wbParent.isEditable();
			}
			return scope.wbEditable;
		    }
		    function createWidget(widget, parentScope, model) {
			var element = angular.element(widget);
			element.attr('wb-model', 'model');
			element.attr('wb-editable', 'wbEditable()');
			element.attr('wb-parent', 'wbParent');
			var childScope = parentScope.$new(true, parentScope);
			childScope.model = model;
			childScope.wbEditable = scope.isEditable;
			childScope.wbParent = parentScope;
			return $compile(element)(childScope);
		    }
		    function removeWidgets() {
			$element
			.children(bodyElementSelector)
			.children(placeholderElementSelector)
			.empty();
		    }
		    function removeWidget(model) {
			if (model == scope.wbModel) {
			    scope.wbParent.removeWidget(model);
			}
			var index = scope.wbModel.contents.indexOf(model);
			if (index > -1) {
			    scope.wbModel.contents.splice(index, 1);
			}
			removeWidgets();
			scope.wbModel.contents.forEach(addWidget);
		    }
		    function newWidget(wbModel) {
			$mdDialog.show({
			    controller : 'DialogsCtrl',
			    templateUrl : 'views/dialogs/wb-selectwidget.html',
			    parent : angular.element(document.body),
			    clickOutsideToClose : true,
			    fullscreen : true,
			    locals : {
				wbModel : {},
				style : {}
			    },
			}).then(function(model) {
			    wbModel.contents.push(model);
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
			return $settings.load({
			    wbModel : scope.wbModel,
			    wbParent : scope.wbParent,
			    style : {
				pages : [ 'description', 'border',
					'background', 'pageLayout',
					'selfLayout' ]
			    }
			});
		    }
		    function isArray(model) {
			return (model && model.constructor === Array);
		    }
		    scope.settings = settings;
		    scope.removeWidgets = removeWidgets;
		    scope.removeWidget = removeWidget;
		    scope.newWidget = newWidget;
		    scope.isEditable = isEditable
		    scope.$watch('wbModel', function() {
			removeWidgets();
			if (!scope.wbModel) {
			    return;
			}
			if (!isArray(scope.wbModel.contents)) {
			    scope.wbModel.contents = [];
			}
			scope.wbModel.type = 'Page';
			scope.wbModel.contents.forEach(addWidget);
		    });
		}
	    };
	});
