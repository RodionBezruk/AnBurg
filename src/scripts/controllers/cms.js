'use strict';
angular.module('ngMaterialWeburger')
.controller('MdeCmsCtrl', function($scope, $rootScope, $http, $cms, PaginatorParameter) {
	var paginatorParameter = new PaginatorParameter();
	var requests = null;
	var status = {
		working : false
	};
	function _find() {
		status.working = true;
		$cms.contents(paginatorParameter)
		.then(function(items) {
			requests = items;
			$scope.contents = $scope.contents.concat(requests.items);
			status.working = false;
		}, function() {
			status.working = false;
		});
	}
	function _clear() {
		$scope.concats.length = 0;
	}
	function search(text) {
		paginatorParameter
		.setQuery(text)
		.setPage(0);
		_clear();
		_find();
	}
	function date(dateTiem) {
		_clear();
		_find();
	}
	function mimetype(type) {
		_clear();
		_find();
	}
	function upload(file) {
		var content = null;
		return $cms.newContent({
			title : 'no name',
			description : ''
		})
		.then(function(newContent) {
			content = newContent;
			return content.upload(file);
		}).then(function() {
			$scope.contents.push(content);
			return content;
		});
	}
	function update(content) {
		return content.update();
	}
	function select(content) {
		$scope.content = content;
	}
	function remove(content) {
		return content.remove()
		.then(function() {
			var index = $scope.contents.indexOf(request);
			if (index > -1) {
				$scope.contents.splice(index, 1);
			}
		});
	}
	function next() {
		if (status.working || !requests.hasMore()) {
			return;
		}
		paginatorParameter.setPage(requests.next());
		_find();
	}
	$scope.status = status; 
	$scope.contents = []; 
	$scope.search = search;
	$scope.date = date;
	$scope.mimetype = mimetype;
	$scope.upload = upload;
	$scope.select = select;
	$scope.remove = remove;
	$scope.next = next;
	_find();
});
