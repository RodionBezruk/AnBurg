'use strict';
angular.module('ngMaterialExtension')
.service('$widget', function($q, $timeout, PaginatorPage) {
	var contentElementAsso = {
		Page : {
			dom : '<mde-content></mde-content>',
			label : 'Panel',
			description : 'Panel contains list of widgets.',
			image : 'images/mde/mdecontent.svg',
			link : 'http:
			data : {
				type : 'Page',
				style : {
					direction : 'column',
				},
				contents : []
			}
		},
		BrandAction : {
			dom : '<mde-brand-action></mde-brand-action>',
			label : 'Brand with action',
			description : 'A brand image with action list',
			image : 'images/mde/mdebrandaction.svg',
			link : 'http:
			data : {
				type : 'BrandAction',
				style : {},
			}
		},
		Copyright : {
			dom : '<mde-copyright></mde-copyright>',
			label : 'Copyright',
			description : 'Copyright text',
			image : 'images/mde/mdecopyright.svg',
			link : 'http:
			data : {
				type : 'Copyright',
				title : 'copyright example',
				text : 'This is a simple copy right text.',
				style : {
					width : '100%',
					color : '#000000',
					backgroundColor : '#00000000'
				}
			}
		},
		FeatureList : {
			dom : '<mde-feature-list></mde-feature-list>',
			label : 'Features list',
			description : 'List of features',
			image : 'images/mde/mdefeaturelist.svg',
			link : 'http:
			data : {
				type : 'FeatureList',
				style : {},
			}
		},
		SocialList : {
			dom : '<mde-social-list></mde-social-list>',
			label : 'Socials link',
			description : 'Social link list',
			image : 'images/mde/mdesociallist.svg',
			link : 'http:
			data : {
				type : 'SocialList',
				style : {},
			}
		},
		LinkList : {
			dom : '<mde-link-list></mde-link-list>',
			label : 'Link list',
			description : 'List of links and ticktes',
			image : 'images/mde/mdelinklist.svg',
			link : 'link',
			data : {
				type : 'LinkList',
				style : {},
			}
		},
		NotfoundElement : {
			dom : '<mde-notfound-element></mde-notfound-element>',
			label : 'Not found',
			image : 'images/mde/mdenotfoundelement.svg',
			link : 'link',
		},
		HtmlText : {
			dom : '<mde-html ng-class="[mdeModel.style.flexAlignItem]" ></mde-html>',
			label : 'HTML text',
			description : 'An HTML block text.',
			image : 'images/mde/mdehtml.svg',
			link : 'http:
			data : {
				type : 'HtmlText',
				body : '<h2>HTML Text</h2><p>Insert HTML text heare</p>',
				style : {
					marginLeft:1,marginRight:1,marginTop:1,marginBottom:1,
					paddingLeft:1,paddingRight:1,paddingTop:1,paddingBottom:1,
					minWidth:0,maxWidth:0,minHeight:0,maxHeight:0}
			}
		},
		CollapsibleItemList : {
			dom : '<mde-collapsible-item-list></mde-collapsible-item-list>',
			label : 'Collapsible item list',
			description : 'List of item with a collapsiblity',
			image : 'images/mde/mdenotfoundelement.svg',
			link : 'http:
			data : {
				type : 'CollapsibleItemList',
				style : {},
			}
		}
	};
	function widget(model) {
		var deferred = $q.defer();
		$timeout(function() {
			var widget = contentElementAsso.mdeNotfoundElement;
			if (model.type in contentElementAsso) {
				widget = contentElementAsso[model.type];
			}
			deferred.resolve(widget);
		}, 1);
		return deferred.promise;
	}
	function widgets() {
		var deferred = $q.defer();
		$timeout(function() {
			var widgets = new PaginatorPage({});
			widgets.items = [];
			widgets.items.push(contentElementAsso.Page);
			widgets.items.push(contentElementAsso.BrandAction);
			widgets.items.push(contentElementAsso.Copyright);
			widgets.items.push(contentElementAsso.FeatureList);
			widgets.items.push(contentElementAsso.SocialList);
			widgets.items.push(contentElementAsso.LinkList);
			widgets.items.push(contentElementAsso.HtmlText);
			deferred.resolve(widgets);
		}, 1);
		return deferred.promise;
	}
	this.widget = widget;
	this.widgets = widgets;
});
