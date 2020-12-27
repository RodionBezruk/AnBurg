'use strict';
angular.module('ngMaterialWeburger')
.directive('wbSocialList', function() {
	return {
		restrict : 'E',
		replace : true,
		templateUrl : 'views/directives/wb-sociallist.html',
		scope : {
			mdeEditable: '=?',
			mdeModel: '=?',
			mdeParent: '=?'
		},
		controller : function($scope, $mdDialog, $act) {
			var scope = $scope;
		    var originatorEv;
			function addSocial(){
				return editSocial({}).then(function(model) {
					if (!scope.mdeModel.socials) {
						scope.mdeModel.socials = [];
					}
					scope.mdeModel.socials.push(model);
					return model;
				});
			}
			function editSocial(social){
				return $mdDialog.show({
					controller : 'DialogsCtrl',
					templateUrl : 'views/dialogs/wb-social.html',
					parent : angular.element(document.body),
					clickOutsideToClose : true,
					locals : {
						mdeModel : social,
						style : {
							title : 'social'
						}
					}
				});
			}
			function removeSocial(social) {
				var index = scope.mdeModel.socials.indexOf(social);
				if (index > -1) {
					scope.mdeModel.socials.splice(social, 1);
				}
			}
			function gotoSocial(social){
				if(scope.mdeEditable){
					return editSocial(social);
				}
				$act.execute(social.action);
			}
			function removeWidget() {
				if (scope.mdeParent) {
					scope.mdeParent.removeWidget(scope.mdeModel);
				}
			}
			function openMenu($mdOpenMenu, ev) {
				originatorEv = ev;
				$mdOpenMenu(ev);
			}
			function settings (){
				return $mdDialog.show({
					controller : 'DialogsCtrl',
					templateUrl : 'views/dialogs/wb-settings.html',
					parent : angular.element(document.body),
					clickOutsideToClose : true,
					locals : {
						mdeModel : scope.mdeModel,
						style : {
							pages : ['general', 'background']
						}
					}
				});
			}
			scope.add = addSocial;
			scope.edit = editSocial;
			scope.delete = removeSocial;
			scope.gotoSocial = gotoSocial;
			scope.removeWidget = removeWidget;
			scope.settings = settings;
			scope.openMenu = openMenu;
		}
	};
});
