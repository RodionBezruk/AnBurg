'use strict';
angular.module('ngMaterialWeburger')
.directive('wbBrandAction', function() {
    return {
	restrict : 'E',
	replace : 'true',
	templateUrl : 'views/directives/wb-brandaction.html',
	scope : {
	    mdeModel : '=?',
	    mdeEditable : '=?',
	    mdeParent : '=?'
	},
	controller : function($scope, $mdDialog, $act) {
	    var scope = $scope;
	    var model = $scope.mdeModel;
	    var originatorEv;
	    function newAction() {
		return editAction({}).then(function(newModel) {
		    if (!model.actions) {
			model.actions = [];
		    }
		    model.actions.push(newModel);
		});
	    }
	    function editAction(action) {
		return $mdDialog.show({
		    controller : 'DialogsCtrl',
		    templateUrl : 'views/dialogs/wb-action.html',
		    parent : angular.element(document.body),
		    clickOutsideToClose : true,
		    fullscreen : true,
		    locals : {
			mdeModel : action,
			style : {
			    title : 'service'
			}
		    }
		});
	    }
	    function removeAction(action) {
		var index = model.actions.indexOf(action);
		if (index > -1) {
		    model.actions.splice(index, 1);
		}
	    }
	    function runAction(action) {
		$act.execute(action);
	    }
	    function removeWidget() {
		if (scope.mdeParent) {
		    scope.mdeParent.removeWidget(scope.mdeModel);
		}
	    }
	    function settings() {
		return $mdDialog.show({
		    controller : 'DialogsCtrl',
		    templateUrl : 'views/dialogs/wb-settings.html',
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
	    function openMenu($mdOpenMenu, ev) {
		originatorEv = ev;
		$mdOpenMenu(ev);
	    }
	    scope.add = newAction;
	    scope.edit = editAction;
	    scope.remove = removeAction;
	    scope.runAction = runAction;
	    scope.removeWidget = removeWidget;
	    scope.settings = settings;
	    scope.openMenu = openMenu;
	}
    };
});
