'use strict';
angular.module('ngMaterialWeburger')
.directive('wbFeatureList', function() {
    return {
	restrict : 'E',
	replace : true,
	templateUrl : 'views/directives/wb-featurelist.html',
	scope : {
	    mdeEditable : '=?',
	    mdeModel : '=?',
	    mdeParent : '=?'
	},
	controller : function($scope, $mdDialog) {
	    var scope = $scope;
	    var model = $scope.mdeModel;
	    var originatorEv;
	    function addFeature() {
		return editFeature({}).then(function(feature) {
		    if (!model.features) {
			model.features = [];
		    }
		    model.features.push(feature);
		    return feature;
		});
	    }
	    function editFeature(feature) {
		return $mdDialog.show({
		    controller : 'WbDialogsCtrl',
		    templateUrl : 'views/dialogs/wb-ticket.html',
		    parent : angular.element(document.body),
		    clickOutsideToClose : true,
		    fullscreen : true,
		    locals : {
			mdeModel : feature,
			style : {}
		    }
		});
	    }
	    function removeFeature(feature) {
		var index = model.features.indexOf(feature);
		if (index > -1) {
		    model.features.splice(index, 1);
		}
	    }
	    function removeWidget() {
		if (scope.mdeParent) {
		    scope.mdeParent.removeWidget(scope.mdeModel);
		}
	    }
	    function settings() {
		return $mdDialog.show({
		    controller : 'WbDialogsCtrl',
		    templateUrl : 'views/dialogs/wb-settings.html',
		    parent : angular.element(document.body),
		    clickOutsideToClose : true,
		    fullscreen : true,
		    locals : {
			mdeModel : model,
			style : {
			    pages : [ 'text', 'background' ]
			}
		    }
		});
	    }
	    scope.add = addFeature;
	    scope.remove = removeFeature;
	    scope.edit = editFeature;
	    scope.removeWidget = removeWidget;
	    scope.settings = settings;
	}
    };
});
