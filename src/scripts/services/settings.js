'use strict';
angular.module('ngMaterialExtension')
.service('$settings', function() {
	var settingPages = {
		notFound : {
			label : 'Settings not found',
			page : 'views/settings/notfound.html'
		},
		general : {
			label : 'general',
			page : 'views/settings/general.html'
		},
		background : {
			label : 'background',
			page : 'views/settings/background.html'
		},
		text : {
			label : 'Frontend text',
			page : 'views/settings/text.html'
		},
		description : {
			label : 'Description',
			page : 'views/settings/description.html'
		},
		layout : {
			label : 'Layout',
			page : 'views/settings/layout.html'
		},
		border : {
			label : 'Border',
			page : 'views/settings/border.html'
		},
		pageLayout : {
			label : 'Page Layout',
			page : 'views/settings/page-layout.html'
		},
		selfLayout : {
			label : 'Self Layout',
			page : 'views/settings/self-layout.html'
		},
		marginPadding : {
			label: 'Margin/Padding',
			page: 'views/settings/margin-padding.html'
		},
		minMaxSize: {
			label : 'Min/Max',
			page : 'views/settings/min-max-size.html'
		}
	};
	function page(settingId) {
		var widget = settingPages.notFound;
		if (settingId in settingPages) {
			widget = settingPages[settingId];
		}
		return widget;
	}
	function addPage(settingId, page) {
		settingPages[settingId] = page;
	}
	this.page = page;
	this.newPage = addPage;
});
