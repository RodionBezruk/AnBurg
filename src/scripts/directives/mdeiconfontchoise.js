'use strict';
angular.module('ngMaterialExtension')
.directive(
		'mdeIconfontChoise',
		function() {
			return {
				restrict : 'E',
				replace : 'true',
				templateUrl : 'views/directives/mdeiconfontchoise.html',
				require : '^mdeModel',
				scope : {
					mdeModel : '=',
					mdeFontSet : '@?',
					mdeListUrl : '@?'
				},
				controller : function($scope, $http, $q, $timeout, $log) {
					var self = $scope;
					self.mdeList = [];
					function querySearch(query) {
						var deferred = $q.defer();
						$timeout(function() {
							var results = query ? self.mdeList
									.filter(createFilterFor(query))
									: self.mdeList;
							deferred.resolve(results);
						}, Math.random() * 100, false);
						return deferred.promise;
					}
					function searchTextChange(text) {
						$log.info('Text changed to ' + text);
					}
					function selectedItemChange(item) {
						$log.info('Item changed to ' + JSON.stringify(item));
						$scope.mdeModel = item;
					}
					function loadAll() {
						$scope.state = 'loading';
						return $http.get($scope.mdeListUrl).then(function(res) {
							$scope.mdeList = res.data;
							$scope.state = 'normal';
						});
					}
					function createFilterFor(query) {
						var lowercaseQuery = angular.lowercase(query);
						return function filterFn(state) {
							return (state.indexOf(lowercaseQuery) === 0);
						};
					}
					loadAll();
					self.querySearch = querySearch;
					self.selectedItemChange = selectedItemChange;
					self.searchTextChange = searchTextChange;
				}
			};
		});
