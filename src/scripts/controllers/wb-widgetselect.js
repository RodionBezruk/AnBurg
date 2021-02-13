'use strict';
angular.module('ngMaterialWeburger')
.controller('WbWidgetSelectCtrl', function($scope, $widget, PaginatorParameter) {
	var scope = $scope;
	var paginatorParameter = new PaginatorParameter();
	function loadWidgets() {
		$widget.widgets(paginatorParameter).then(function(widgets) {
			scope.widgets = widgets;
			selectWidget(widgets.items[0]);
		});
	}
	function selectWidget(widget) {
		scope.cwidget = widget;
	}
	function answerWidget(widget) {
		var element = angular.copy(widget.data);
		$scope.answer(element);
	}
	scope.selectWidget = selectWidget;
	scope.answerWidget = answerWidget;
	loadWidgets();
});
