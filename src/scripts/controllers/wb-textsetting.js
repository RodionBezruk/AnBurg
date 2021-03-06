'use strict';
angular
	.module('ngMaterialWeburger')
	.controller(
		'WbTextSettingsCtrl',
		function($scope) {
		    var scope = $scope;
		    scope.tinymceOptions = {
			selector : 'textarea',
			height : 500,
			theme : 'modern',
			plugins : [
				'advlist autolink lists link image charmap print preview hr anchor pagebreak',
				'searchreplace wordcount visualblocks visualchars code fullscreen',
				'insertdatetime media nonbreaking save table contextmenu directionality',
				'emoticons template paste textcolor colorpicker textpattern imagetools' ],
			toolbar1 : 'fontselect fontsizeselect | insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
			toolbar2 : 'print preview media | forecolor backcolor emoticons',
			image_advtab : true,
			templates : [ {
			    title : 'Test template 1',
			    content : 'Test 1'
			}, {
			    title : 'Test template 2',
			    content : 'Test 2'
			} ],
			content_css : [
				'
				'
		    };
		});
