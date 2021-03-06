'use strict';
angular
    .module('ngMaterialWeburger', [
        'ngMessages',
        'ngAnimate',
        'ngAria',
        'ngMaterial',
        'pascalprecht.translate',
        'pluf',
        'ngMaterialWysiwyg',
        'ui.tinymce'
    ]);
'use strict';
'use strict';
angular.module('ngMaterialWeburger')
.controller('WbActionCtrl', function($scope) {
    var types = [ {
	icon : 'link',
	label : 'Link internal or external',
	key : 'link'
    }, {
	icon : 'action',
	label : 'State change',
	key : 'state'
    } ];
    $scope.types = types;
});
'use strict';
angular.module('ngMaterialWeburger')
.controller('WbBorderSettingCtrl', function($scope) {
    var scope = $scope;
    var model = $scope.mdeModel;
    scope.styles = [ {
	title : 'No Border',
	value : 'none'
    }, {
	title : 'Solid',
	value : 'solid'
    }, {
	title : 'Dotted',
	value : 'dotted'
    }, {
	title : 'Dashed',
	value : 'dashed'
    }, {
	title : 'Double',
	value : 'double'
    }, {
	title : 'Groove',
	value : 'groove'
    }, {
	title : 'Ridge',
	value : 'ridge'
    }, {
	title : 'Inset',
	value : 'inset'
    }, {
	title : 'Outset',
	value : 'outset'
    } ];
});
'use strict';
angular.module('ngMaterialWeburger')
.controller('WbCmsCtrl',
	function($scope, $rootScope, $http, $cms, PaginatorParameter) {
	    var paginatorParameter = new PaginatorParameter();
	    var requests = null;
	    var status = {
		working : false
	    };
	    function find() {
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
	    function clear() {
		$scope.concats.length = 0;
	    }
	    function search(text) {
		paginatorParameter
		.setQuery(text)
		.setPage(0);
		clear();
		find();
	    }
	    function date(dateTiem) {
		clear();
		find();
	    }
	    function mimetype(type) {
		clear();
		find();
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
		})
		.then(function() {
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
		find();
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
	    find();
	});
'use strict';
angular.module('ngMaterialWeburger')
.controller('ContentSelectCtrl', function($scope, $widget, PaginatorParameter) {
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
'use strict';
angular.module('ngMaterialWeburger')
    .controller('WbDialogsCtrl', function ($scope, $mdDialog, wbModel, style) {
        function hide() {
            $mdDialog.hide();
        }
        function cancel() {
            $mdDialog.cancel();
        }
        function answer(response) {
            $mdDialog.hide(response);
        }
        $scope.wbModel = wbModel;
        $scope.style = style;
        $scope.hide = hide;
        $scope.cancel = cancel;
        $scope.answer = answer;
    })
    .controller('WbSettingDialogsCtrl', function ($scope, $mdDialog, wbModel, wbParent, style) {
        function hide() {
            $mdDialog.hide();
        }
        function cancel() {
            $mdDialog.cancel();
        }
        function answer(response) {
            $mdDialog.hide(response);
        }
        $scope.wbModel = wbModel;
        $scope.wbParent = wbParent;
        $scope.style = style;
        $scope.hide = hide;
        $scope.cancel = cancel;
        $scope.answer = answer;
    });
'use strict';
angular.module('ngMaterialWeburger')
.controller('WbLayoutWbSettingsCtrl', function($scope, $settings) {
    var scope = $scope;
    scope.directions = [ {
	title : 'row',
	icon : 'view_column',
	value : 'row'
    }, {
	title : 'column',
	icon : 'view_agenda',
	value : 'column'
    } ];
    scope.directionAlignments = [ {
	title : 'none',
	value : 'none'
    }, {
	title : 'start',
	value : 'start'
    }, {
	title : 'center',
	value : 'center'
    }, {
	title : 'end',
	value : 'end'
    }, {
	title : 'space-around',
	value : 'space-around'
    }, {
	title : 'space-between',
	value : 'space-between'
    } ];
    scope.perpendicularAlignments = [ {
	title : 'none',
	value : 'none'
    }, {
	title : 'start',
	value : 'start'
    }, {
	title : 'center',
	value : 'center'
    }, {
	title : 'end',
	value : 'end'
    }, {
	title : 'stretch',
	value : 'stretch'
    }, ]
});
'use strict';
angular.module('ngMaterialWeburger')
.controller('WbSelfLayoutWbSettingsCtrl', function($scope, $settings) {
	var scope = $scope;
	scope.flexDirection = [ {
		title : 'row',
		icon : 'column',
		value : 'mde-flex-row'
	}, {
		title : 'column',
		icon : 'view_agenda',
		value : 'mde-flex-column'
	} ];
	scope.justifyContent = [ {
		title : 'Start',
		value : 'mde-flex-justify-content-start'
	}, {
		title : 'End',
		value : 'mde-flex-justify-content-end'
	}, {
		title : 'Center',
		value : 'mde-flex-justify-content-center'
	}, {
		title : 'Space Around',
		value : 'mde-flex-justify-content-space-around'
	}, {
		title : 'Space Between',
		value : 'mde-flex-justify-content-space-between'
	}];
	scope.alignItems = [{
		title : 'Stretch',
		value : 'mde-flex-align-items-stretch'
	}, {
		title : 'Start',
		value : 'mde-flex-align-items-start'
	}, {
		title : 'End',
		value : 'mde-flex-align-items-end'
	}, {
		title : 'Center',
		value : 'mde-flex-align-items-center'
	}]
});
'use strict';
angular.module('ngMaterialWeburger')
    .controller('WbSelfLayoutWbSettingsCtrl', function($scope, $settings) {
        var scope = $scope;
        scope.flexAlignItem = [
            {
            title : 'auto',
            value : 'mde-flex-item-auto'
        },  {
            title : 'Start',
            value : 'mde-flex-item-start'
        }, {
            title : 'End',
            value : 'mde-flex-item-end'
        }, {
            title : 'Center',
            value : 'mde-flex-item-center'
        }, {
            title : 'stretch',
            value : 'mde-flex-item-stretch'
        }];
    });
'use strict';
angular.module('ngMaterialWeburger')
.controller('WbSettingsCtrl', function($scope, $settings) {
	var scope = $scope;
	function loadPages() {
		var keys = scope.style.pages;
		var settings = [];
		for (var i = 0; i < keys.length; i++) {
			settings.push($settings.page(keys[i]));
		}
		scope.settings = settings;
	}
	loadPages();
});
'use strict';
angular.module('ngMaterialWeburger')
    .controller('WbTextSettingsCtrl', function($scope) {
        var scope = $scope;
        scope.tinymceOptions = {
            selector: 'textarea',
            height: 500,
            theme: 'modern',
            plugins: ['advlist autolink lists link image charmap print preview hr anchor pagebreak',
                'searchreplace wordcount visualblocks visualchars code fullscreen',
                'insertdatetime media nonbreaking save table contextmenu directionality',
                'emoticons template paste textcolor colorpicker textpattern imagetools'
            ],
            toolbar1: 'fontselect fontsizeselect | insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
            toolbar2: 'print preview media | forecolor backcolor emoticons',
            image_advtab: true,
            templates: [
                { title: 'Test template 1', content: 'Test 1' },
                { title: 'Test template 2', content: 'Test 2' }
            ],
            content_css: ['
                '
            ]
        };
    });
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
		    controller : 'WbDialogsCtrl',
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
		    controller : 'WbDialogsCtrl',
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
'use strict';
angular.module('ngMaterialWeburger')
.directive('wbCollapsibleItemList', function() {
    return {
	templateUrl : 'views/directives/wb-collapsibleitemlist.html',
	restrict : 'E',
	replase : true,
	scope : {
	    mdeEditable : '=?',
	    mdeModel : '=?'
	}
    };
});
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
			    controller : 'WbDialogsCtrl',
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
'use strict';
angular.module('ngMaterialWeburger')
.directive('wbCopyright', function() {
    return {
	restrict : 'E',
	replace : true,
	templateUrl : 'views/directives/wb-copyright.html',
	scope : {
	    mdeEditable : '=?',
	    mdeModel : '=?',
	    mdeParent : '=?'
	},
	controller : function($scope, $mdDialog, $act) {
	    var scope = $scope;
	    var model = $scope.mdeModel;
	    function removeWidget() {
		if (scope.mdeParent) {
		    scope.mdeParent.removeWidget(model);
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
			    pages : [ 'text' ]
			}
		    }
		});
	    }
	    scope.removeWidget = removeWidget;
	    scope.settings = settings;
	}
    };
});
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
'use strict';
angular.module('ngMaterialWeburger')
.directive(
	'wbHtml',
	function() {
	    return {
		templateUrl : 'views/directives/wb-html.html',
		restrict : 'E',
		replase : true,
		scope : {
		    wbEditable : '=?',
		    wbModel : '=?',
		    wbParent : '=?'
		},
		link : function(scope, elem, attrs) {
		    scope.$watch('wbModel.style.flexAlignItem', function(
			    newValue, oldValue) {
			elem.removeClass(oldValue);
			elem.addClass(newValue);
		    });
		    scope.$watch('wbModel.style.flexItemGrow', function(
			    newValue, oldValue) {
			elem.css('flex-grow', newValue);
		    });
		},
		controller : function($scope, $element, $mdDialog) {
		    var scope = $scope;
		    var model = $scope.wbModel;
		    var parentModel = $scope.wbParent;
		    function removeWidget() {
			if (scope.wbParent) {
			    scope.wbParent.removeWidget(scope.wbModel);
			}
		    }
		    function settings() {
			return $mdDialog.show({
			    controller : 'WbSettingDialogsCtrl',
			    templateUrl : 'views/dialogs/wb-settings.html',
			    parent : angular.element(document.body),
			    clickOutsideToClose : true,
			    fullscreen : true,
			    locals : {
				wbModel : model,
				wbParent : parentModel,
				style : {
				    pages : [ 'text', 'selfLayout', 'border',
					    'background', 'marginPadding',
					    'minMaxSize' ]
				}
			    }
			});
		    }
		    scope.removeWidget = removeWidget;
		    scope.settings = settings;
		}
	    };
	});
'use strict';
angular.module('ngMaterialWeburger')
.directive(
	'wbIconfontChoise',
	function() {
	    return {
		restrict : 'E',
		replace : 'true',
		templateUrl : 'views/directives/wb-iconfontchoise.html',
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
'use strict';
angular.module('ngMaterialWeburger')
.directive('wbInfinateScroll', function() {
    return {
	restrict : 'A',
	scope : {
	    loadPage : '=wbInfinateScroll'
	},
	link : function(scope, elem, attrs) {
	    elem.on('scroll', function(evt) {
		var raw = elem[0];
		if (raw.scrollTop + raw.offsetHeight == raw.scrollHeight) {
		    scope.loadPage();
		}
	    });
	}
    };
});
'use strict';
angular.module('ngMaterialWeburger')
.directive('wbLinkList', function() {
    return {
	restrict : 'E',
	replace : 'true',
	templateUrl : 'views/directives/wb-linklist.html',
	require : '^mdeModel',
	scope : {
	    mdeEditable : '=?',
	    mdeModel : '=?'
	},
    };
});
'use strict';
angular.module('ngMaterialWeburger')
.directive(
	'wbMembers',
	function() {
	    var bodyElementSelector = 'div#wb-members-body';
	    var placeholderElementSelector = 'div#wb-members-placeholder';
	    return {
		restrict : 'E',
		replace : 'true',
		templateUrl : 'views/directives/wb-members.html',
		require : '^wbModel',
		scope : {
		    wbEditable : '=?',
		    wbModel : '=?'
		},
		controller : function($scope, $usr, $element, $widget,
			$compile, $settings) {
		    var scope = $scope;
		    function isEditable() {
			if (scope.wbParent) {
			    return scope.wbParent.isEditable();
			}
			return scope.wbEditable;
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
		    function removeWidgets() {
			$element
			.children(bodyElementSelector)
			.children(placeholderElementSelector)
			.empty();
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
		    function loadUsers(widget, users) {
			var template = JSON.stringify(scope.wbModel.template);
			var root = $element
			.children(bodyElementSelector)
			.children(placeholderElementSelector);
			for (var i = 0; i < users.items.length; i++) {
			    var user = users.items[i];
			    var ft = template.replace(/{{user.id}}/g, user.id);
			    ft = ft.replace(/{{user.login}}/g, user.login);
			    ft = ft.replace(/{{user.first_name}}/g,
				    user.first_name);
			    ft = ft.replace(/{{user.last_name}}/g,
				    user.last_name);
			    var item = JSON.parse(ft);
			    var w = createWidget(widget.dom, $scope, item);
			    root.append(w);
			}
		    }
		    function reload() {
			removeWidgets();
			var users = {}
			$usr.role(scope.wbModel.role)
			.then(function(role) {
			    return role.users();
			})
			.then(function(ul) {
			    users = ul;
			    return $widget.widget(scope.wbModel.template);
			})
			.then(function(widget) {
			    loadUsers(widget, users);
			});
		    }
		    function loadRoles() {
			return $usr.roles()
			.then(function(roles) {
			    scope.roles = roles;
			}, function(error) {
			    alert(error);
			});
		    }
		    scope.loadRoles = loadRoles;
		    scope.settings = settings;
		    scope.isEditable = isEditable
		    scope.$watch('wbEditable', function() {
			if (!scope.wbEditable) {
			    reload();
			} else {
			    removeWidgets();
			}
		    });
		}
	    };
	});
'use strict';
angular.module('ngMaterialWeburger')
.directive('wbNotfoundElement', function() {
    return {
	templateUrl : 'views/directives/wb-notfoundelement.html',
	restrict : 'E',
	link : function postLink() {
	}
    };
});
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
					controller : 'WbDialogsCtrl',
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
					controller : 'WbDialogsCtrl',
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
'use strict';
angular.module('ngMaterialWeburger')
.filter('unsafe', function($sce) {
	return function(val) {
		return $sce.trustAsHtml(val);
	};
});
'use strict';
angular.module('ngMaterialWeburger')
.service('$settings', function($mdDialog) {
    var settingPages = {
	notFound : {
	    label : 'Settings not found',
	    page : 'views/settings/wb-notfound.html'
	},
	general : {
	    label : 'general',
	    page : 'views/settings/wb-general.html'
	},
	background : {
	    label : 'background',
	    page : 'views/settings/wb-background.html'
	},
	text : {
	    label : 'Frontend text',
	    page : 'views/settings/wb-text.html'
	},
	description : {
	    label : 'Description',
	    page : 'views/settings/wb-description.html'
	},
	layout : {
	    label : 'Layout',
	    page : 'views/settings/wb-layout.html'
	},
	border : {
	    label : 'Border',
	    page : 'views/settings/wb-border.html'
	},
	pageLayout : {
	    label : 'Page Layout',
	    page : 'views/settings/wb-layout-page.html'
	},
	selfLayout : {
	    label : 'Self Layout',
	    page : 'views/settings/wb-layout-self.html'
	},
	marginPadding : {
	    label : 'Margin/Padding',
	    page : 'views/settings/wb-margin-padding.html'
	},
	minMaxSize : {
	    label : 'Min/Max',
	    page : 'views/settings/wb-min-max-size.html'
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
    function loadSetting(locals) {
	return $mdDialog.show({
	    controller : 'WbSettingDialogsCtrl',
	    templateUrl : 'views/dialogs/wb-settings.html',
	    parent : angular.element(document.body),
	    clickOutsideToClose : true,
	    fullscreen : true,
	    locals : locals
	});
    }
    this.page = page;
    this.load = loadSetting;
    this.newPage = addPage;
});
'use strict';
angular.module('ngMaterialWeburger')
.service('$widget', function($q, $timeout, PaginatorPage) {
	var contentElementAsso = {
		Page : {
			dom : '<wb-content></wb-content>',
			label : 'Panel',
			description : 'Panel contains list of widgets.',
			image : 'images/wb/content.svg',
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
			dom : '<wb-brand-action></wb-brand-action>',
			label : 'Brand with action',
			description : 'A brand image with action list',
			image : 'images/wb/brandaction.svg',
			link : 'http:
			data : {
				type : 'BrandAction',
				style : {},
			}
		},
		Copyright : {
			dom : '<wb-copyright></wb-copyright>',
			label : 'Copyright',
			description : 'Copyright text',
			image : 'images/wb/copyright.svg',
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
			dom : '<wb-feature-list></wb-feature-list>',
			label : 'Features list',
			description : 'List of features',
			image : 'images/wb/featurelist.svg',
			link : 'http:
			data : {
				type : 'FeatureList',
				style : {},
			}
		},
		SocialList : {
			dom : '<wb-social-list></wb-social-list>',
			label : 'Socials link',
			description : 'Social link list',
			image : 'images/wb/sociallist.svg',
			link : 'http:
			data : {
				type : 'SocialList',
				style : {},
			}
		},
		LinkList : {
			dom : '<wb-link-list></wb-link-list>',
			label : 'Link list',
			description : 'List of links and ticktes',
			image : 'images/wb/linklist.svg',
			link : 'link',
			data : {
				type : 'LinkList',
				style : {},
			}
		},
		NotfoundElement : {
			dom : '<wb-notfound-element></wb-notfound-element>',
			label : 'Not found',
			image : 'images/wb/notfoundelement.svg',
			link : 'link',
		},
		HtmlText : {
			dom : '<wb-html ng-class="[mdeModel.style.flexAlignItem]" ></wb-html>',
			label : 'HTML text',
			description : 'An HTML block text.',
			image : 'images/wb/html.svg',
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
			dom : '<wb-collapsible-item-list></wb-collapsible-item-list>',
			label : 'Collapsible item list',
			description : 'List of item with a collapsiblity',
			image : 'images/wb/notfoundelement.svg',
			link : 'http:
			data : {
				type : 'CollapsibleItemList',
				style : {},
			}
		},
		Members : {
			dom : '<wb-members></wb-members>',
			label : 'Members list',
			description : 'List of members',
			image : 'images/wb/notfoundelement.svg',
			link : 'http:
			data : {
				type : 'Members',
				style : {},
				template: {}
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
			widgets.items.push(contentElementAsso.Members);
			deferred.resolve(widgets);
		}, 1);
		return deferred.promise;
	}
	this.widget = widget;
	this.widgets = widgets;
});
angular.module('ngMaterialWeburger').run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('views/dialogs/wb-action.html',
    "<md-dialog ng-controller=WbActionCtrl aria-label=\"edit action dialog\" ng-cloak>  <md-toolbar> <div class=md-toolbar-tools> <h2 translate>Action</h2> <span flex></span> <md-button class=md-icon-button ng-click=answer(mdeModel)> <md-icon aria-label=\"Close dialog\">done</md-icon> </md-button> <md-button class=md-icon-button ng-click=cancel()> <md-icon aria-label=\"Close dialog\">close</md-icon> </md-button> </div> </md-toolbar>    <md-dialog-content> <div layout=column class=md-dialog-content> <mde-iconfont-choise mde-model=model.icon mde-list-url=styles/fonts/codepoints.json mde-font-set=material-icons> </mde-iconfont-choise> <md-input-container> <label translate>Label</label> <input ng-model=mdeModel.label> </md-input-container> <md-input-container> <label translate>Text</label> <input ng-model=mdeModel.text> </md-input-container>  <md-input-container> <label>Module type</label> <md-select ng-model=mdeModel.type> <md-option ng-repeat=\"type in types\" value={{type.key}}> <md-icon>{{type.icon}}</md-icon> {{type.label}} </md-option> </md-select> </md-input-container> <md-input-container> <label translate>Value</label> <input ng-model=mdeModel.value> </md-input-container> <md-checkbox ng-model=mdeModel.primary aria-label=primary> Primary action </md-checkbox> <md-checkbox ng-model=mdeModel.accent aria-label=accent> Accent action </md-checkbox> </div> </md-dialog-content> </md-dialog>"
  );
  $templateCache.put('views/dialogs/wb-alert.html',
    "<md-dialog ng-cloak> <md-toolbar> <div class=md-toolbar-tools> <md-icon ng-if=style.icon>{{mdeModel.style.icon}}</md-icon> <h2 translate>{{mdeModel.title}}</h2> <span flex></span> <md-button class=md-icon-button ng-click=cancel()> <md-icon aria-label=\"Close dialog\">close</md-icon> </md-button> </div> </md-toolbar> <md-dialog-content ng-style=\"{\n" +
    "      'direction' : style.direction,\n" +
    "      'text-align': style.textAlign\n" +
    "    }\"> <div class=md-dialog-content> <md-dialog-content translate>{{mdeModel.text}}</md-dialog-content> </div> <div layout=row> <md-button ng-click=cancel()> {{mdeModel.label | translate}} </md-button> </div> </md-dialog-content> </md-dialog>"
  );
  $templateCache.put('views/dialogs/wb-directivesettings.html',
    "<md-dialog ng-cloak>  <md-toolbar> <div class=md-toolbar-tools> <md-icon ng-if=style.icon>{{style.icon}}</md-icon> <h2 translate>{{mdeModel.title}}</h2> <span flex></span> <md-button class=md-icon-button ng-click=cancel()> <md-icon aria-label=\"Close dialog\">close</md-icon> </md-button> </div> </md-toolbar>  <md-dialog-content>  <md-tabs md-dynamic-height md-border-bottom> <md-tab label=Context> <md-content layout=column layout-padding> <md-input-container> <label translate>title</label> <input ng-model=model.title> </md-input-container> <md-input-container> <label translate>text</label> <input ng-model=model.text> </md-input-container> </md-content> </md-tab> <md-tab label=Style> <md-content layout=column layout-padding> <md-color-picker label=\"Background color\" icon=brush ng-model=model.style.backgroundColor> </md-color-picker> <md-color-picker label=Color icon=brush ng-model=model.style.color> </md-color-picker> <md-input-container> <label translate>Font</label> <input ng-model=model.style.font> </md-input-container> <md-input-container> <label translate>Padding</label> <input ng-model=model.style.padding> </md-input-container> <md-input-container> <label translate>Width</label> <input ng-model=model.style.width> </md-input-container> <md-input-container> <label translate>Height</label> <input ng-model=model.style.height> </md-input-container> <md-checkbox ng-model=model.style.rtl aria-label=\"Right to left\"> Right to left </md-checkbox> </md-content> </md-tab> </md-tabs> </md-dialog-content> </md-dialog>"
  );
  $templateCache.put('views/dialogs/wb-login.html',
    " <md-dialog aria-label=\"Submit for DigiDoci News\" ng-cloak> <form ng-submit=answer(credentioal)> <md-toolbar> <div class=md-toolbar-tools> <h2 translate>user login</h2> <span flex></span> <md-button class=md-icon-button ng-click=cancel()> <md-icon aria-label=\"Close dialog\">close</md-icon> </md-button> </div> </md-toolbar> <md-dialog-content> <div class=md-dialog-content layout=column>  <md-input-container> <label translate>user name</label> <input ng-model=credentioal.login> </md-input-container> <md-input-container> <label translate>password</label> <input type=password ng-model=credentioal.password> </md-input-container> <input type=submit hidden> <div layout=row> <md-button ng-click=answer(credentioal) class=\"md-raised md-primary\"> {{ 'ok' | translate }} </md-button> <md-button ng-click=cancel()> {{ 'cancel' | translate }} </md-button> </div> </div> </md-dialog-content> </form> </md-dialog>"
  );
  $templateCache.put('views/dialogs/wb-selectcontent.html',
    " <md-dialog aria-label=\"Select media\" ng-controller=WbCmsCtrl ng-cloak> <form ng-submit=answer(content)>  <md-toolbar> <div class=md-toolbar-tools> <h2 translate>Media select</h2> <span flex></span> <md-button class=md-icon-button ng-click=answer(content)> <md-icon aria-label=\"Close dialog\">done</md-icon> </md-button> <md-button class=md-icon-button ng-click=cancel()> <md-icon aria-label=\"Close dialog\">close</md-icon> </md-button> </div> </md-toolbar> <md-dialog-content> <div class=md-dialog-content layout=column>  <div layout=row> <div layout=column flex> <div ng-repeat=\"content in contents\" ng-click=select(content) layout-padding> {{content.id}}: {{content.title}} </div> </div> <div flex=40> <div> {{content.id}}:{{content.title}} <img alt=\"No priview\" src={{content.link}} width=500> </div> </div> <div> <input onchange=angular.element(this).scope().upload(this.files[0]) type=\"file\"> </div> </div> </div> </md-dialog-content> </form> </md-dialog>"
  );
  $templateCache.put('views/dialogs/wb-selectwidget.html',
    "<md-dialog aria-label=\"edit action dialog\" ng-controller=ContentSelectCtrl ng-cloak>  <md-toolbar> <div class=md-toolbar-tools> <h2 translate>Widget list</h2> <span flex></span> <md-button class=md-icon-button ng-click=cancel()> <md-icon aria-label=\"Close dialog\">close</md-icon> </md-button> </div> </md-toolbar>    <md-dialog-content> <md-content class=\"md-padding md-dialog-content\" layout-xs=column layout=row layout-wrap>    <md-card ng-repeat=\"widget in widgets.items\" flex-xs flex-gt-xs=45 md-theme-watch> <md-card-title> <md-card-title-text> <span class=md-headline>{{widget.label}}</span> <span class=md-subhead>{{widget.description}}</span> </md-card-title-text> <md-card-title-media> <img src=\"{{widget.image}}\"> </md-card-title-media> </md-card-title> <md-card-actions layout=row layout-align=\"end center\"> <md-button ng-click=answerWidget(widget)> <md-icon>add</md-icon> {{ 'Add' | translate }} </md-button>  </md-card-actions> </md-card> </md-content> </md-dialog-content> </md-dialog>"
  );
  $templateCache.put('views/dialogs/wb-settings.html',
    " <md-dialog ng-controller=WbSettingsCtrl aria-label=\"Setting dialog\" ng-cloak> <md-toolbar> <div class=md-toolbar-tools> <h2 translate>Settings</h2> <span flex></span> <md-button class=md-icon-button ng-click=answer()> <md-icon aria-label=\"Close dialog\">close</md-icon> </md-button> </div> </md-toolbar> <md-dialog-content> <md-content class=md-dialog-content> <md-tabs md-dynamic-height md-border-bottom> <md-tab ng-repeat=\"setting in settings\" label=\"{{setting.label | translate}}\"> <md-content layout=row flex ng-include=setting.page class=md-padding> </md-content> </md-tab> </md-tabs> </md-content> </md-dialog-content> </md-dialog>"
  );
  $templateCache.put('views/dialogs/wb-social.html',
    "<md-dialog aria-label=\"edit action dialog\" ng-cloak> <form ng-submit=answer(mdeModel)>  <md-toolbar> <div class=md-toolbar-tools> <h2 translate>Social</h2> <span flex></span> <md-button class=md-icon-button ng-click=cancel()> <md-icon aria-label=\"Close dialog\">close</md-icon> </md-button> </div> </md-toolbar>    <md-dialog-content> <div ng-controller=WbActionCtrl layout=column class=md-dialog-content> <mde-iconfont-choise mde-model=mdeModel.icon mde-list-url=styles/fonts/social-codepoints.json mde-font-set=mono-social-icons> </mde-iconfont-choise>              <md-input-container> <label translate>Link</label> <input ng-model=mdeModel.action.value> </md-input-container> </div> </md-dialog-content> <input type=submit hidden> </form> </md-dialog>"
  );
  $templateCache.put('views/dialogs/wb-submit.html',
    " <md-dialog ng-class=\"{'mde-rtl':mdeModel.style.rtl}\" aria-label=\"Submit for Donate News\" ng-cloak> <form ng-submit=answer(address)> <md-toolbar> <div class=md-toolbar-tools>  <img src=images/logo.svg width=64> <h2>{{mdeModel.title}}</h2> <span flex></span> <md-button class=md-icon-button ng-click=cancel()> <md-icon aria-label=\"Close dialog\">close</md-icon> </md-button> </div> </md-toolbar> <md-dialog-content> <div class=md-dialog-content layout=column>  <p>{{mdeModel.message}}</p>  <md-input-container> <label translate>email</label> <input ng-model=address> </md-input-container> <div layout=row> <md-button class=\"md-raised md-primary\" ng-click=answer(address)> {{'submit'|translate}} </md-button> <md-button ng-click=cancel()> {{'cancel'|translate}} </md-button> </div> </div> </md-dialog-content> </form> </md-dialog>"
  );
  $templateCache.put('views/dialogs/wb-ticket.html',
    "<md-dialog aria-label=\"edit action dialog\" ng-cloak> <form ng-submit=answer(mdeModel)>  <md-toolbar> <div class=md-toolbar-tools> <h2 translate>Ticket</h2> <span flex></span> <md-button class=md-icon-button ng-click=answer(mdeModel)> <md-icon aria-label=\"Close dialog\">done</md-icon> </md-button> <md-button class=md-icon-button ng-click=cancel()> <md-icon aria-label=\"Close dialog\">close</md-icon> </md-button> </div> </md-toolbar>  <md-dialog-content> <div layout=column class=md-dialog-content> <mde-iconfont-choise mde-model=mdeModel.icon mde-list-url=styles/fonts/codepoints.json mde-font-set=material-icons> </mde-iconfont-choise> <md-input-container> <label translate>Title</label> <input ng-model=mdeModel.title> </md-input-container> <md-wysiwyg textarea-id=question textarea-class=form-control textarea-height=100px textarea-name=textareaQuestion textarea-required ng-model=mdeModel.text enable-bootstrap-title=true textarea-menu=yourModel.customMenu></md-wysiwyg> </div> </md-dialog-content> <input type=submit hidden> </form> </md-dialog>"
  );
  $templateCache.put('views/directives/wb-brandaction.html',
    "<div ng-class=\"{'mde-widget': mdeEditable, 'fill':mdeModel.style.fill}\">  <div ng-show=mdeEditable layout=row class=mde-widget-header ng-include=\"'views/partials/mdewidgetheaderactions.html'\"> </div> <div ng-show=mdeModel ng-style=\"{ 'background-image': 'url('+mdeModel.style.backgroundImage+')', 'background-size': mdeModel.style.backgroundSize, 'color': mdeModel.style.color, 'width': mdeModel.style.width, 'height': mdeModel.style.height}\" layout=column layout-align=\"space-between center\"> <div ng-style=\"{'width': '100%'}\" layout=column layout-align=\"center center\"> <h1 class=md-display-3 ng-style=\"{'color': mdeModel.style.color}\" ng-class=\"{'mde-rtl':mdeModel.style.rtl}\">{{ mdeModel.title }}</h1> <div ng-style=\"{'color': mdeModel.style.color}\" ng-class=\"{'mde-rtl':mdeModel.style.rtl}\" ng-bind-html=\"mdeModel.text | unsafe\" hide show-gt-xs></div> <div layout=column layout-gt-xs=row layout-align-gt-xs=\"center center\"> <md-button ng-if=!mdeEditable ng-repeat=\"action in mdeModel.actions\" ng-style=\"{'color': mdeModel.style.color, 'font-size': '20px'}\" class=md-raised ng-class=\"{'md-primary': action.primary, 'md-accent': action.accent}\" ng-click=runAction(action)>{{ action.label }} </md-button> <md-menu ng-if=mdeEditable ng-repeat=\"action in mdeModel.actions\"> <md-button ng-class=\"{'md-primary': action.primary, 'md-accent': action.accent}\" class=md-raised aria-label=\"Open phone interactions menu\" ng-click=\"openMenu($mdOpenMenu, $event)\"> <md-icon ng-style=\"{ 'color': mdeModel.style.color }\" class=md-48 md-font-set=social> {{action.icon}} </md-icon> {{ action.label }} </md-button> <md-menu-content width=4> <md-menu-item> <md-button ng-click=\"edit(action, $event)\"> <md-icon>edit</md-icon> {{ 'Edit' | translate }} </md-button> </md-menu-item> <md-menu-item> <md-button ng-click=\"remove(action, $event)\"> <md-icon>delete</md-icon> {{ 'Delete' | translate }} </md-button> </md-menu-item> </md-menu-content> </md-menu> <md-button ng-if=mdeEditable ng-click=add()> <md-icon>add</md-icon> </md-button> </div> </div> </div> </div>"
  );
  $templateCache.put('views/directives/wb-collapsibleitemlist.html',
    "<div ng-class=\"{'mde-widget': mdeEditable, 'fill':mdeModel.style.fill}\">  <div ng-show=mdeEditable layout=row class=mde-widget-header ng-include=\"'views/partials/mdewidgetheaderactions.html'\"> </div> <div ng-style=\"{'background-color': mdeModel.style.backgroundColor,\n" +
    "    'color': mdeModel.style.color,\n" +
    "    'width': mdeModel.style.width,\n" +
    "    'height': mdeModel.style.height}\" ng-html-bind=mdeModel.body|unsafe ng-class=\"{'mde-rtl':mdeModel.style.rtl}\"> <ul> <li ng-repeat=\"item in mdeModel.list\"> <md-icon>{{item.icon}}</md-icon> {{item.title}} <p ng-bind-html=\"item.text | unsafe\"></p> </li> </ul> </div> </div>"
  );
  $templateCache.put('views/directives/wb-content.html',
    "<div ng-class=\"{'wb-panel': wbEditable}\">  <div ng-show=wbEditable class=wb-panel-header layout=row> <span translate> Panel</span> <span flex></span> <md-button ng-click=newWidget(wbModel) class=\"md-icon-button md-mini\"> <md-icon class=wb-icon-mini>add_circle</md-icon> </md-button> <md-button ng-click=settings() class=\"md-icon-button md-mini\"> <md-icon class=wb-icon-mini>settings</md-icon> </md-button> <md-button class=\"md-icon-button md-mini\" ng-mouseenter=\"hoveringDelBtn=true\" ng-mouseleave=\"hoveringDelBtn=false\" ng-click=removeWidget(wbModel) ng-show=wbParent> <md-icon class=wb-icon-mini>delete</md-icon> </md-button> </div>  <div class=wb-panel-body id=wb-content-body> <div ng-show=hoveringDelBtn class=overlay></div>  <div class=flex ng-class=\"[wbModel.style.flexDirection,wbModel.style.justifyContent, wbModel.style.alignItems]\" id=wb-content-placeholder ng-style=\"{ 'background': wbModel.style.background,'border-radius': wbModel.style.borderRadius, 'border': wbModel.style.border }\"> </div>  </div> </div>"
  );
  $templateCache.put('views/directives/wb-copyright.html',
    "<div ng-class=\"{'mde-widget': mdeEditable, 'fill':mdeModel.style.fill}\">  <div ng-show=mdeEditable layout=row class=mde-widget-header ng-include=\"'views/partials/mdewidgetheaderactions.html'\"> </div> <div layout=column layout-align=\"start center\" ng-style=\"{ 'color': mdeModel.style.color, 'background-color': mdeModel.style.backgroundColor,\n" +
    "      'width': mdeModel.style.width, 'font-family': mdeModel.style.font, 'padding': mdeModel.style.padding }\"> <div ng-style=\"{'width': '80%', 'margin-top': '3em', 'border-bottom': '1px solid #fff' }\"> </div> <div layout=column layout-align=\"start center\" ng-class=\"{'mde-rtl':mdeModel.style.rtl}\"> <h3>{{mdeModel.title}}</h3> <div ng-bind-html=mdeModel.text|unsafe></div> </div> </div> </div>"
  );
  $templateCache.put('views/directives/wb-featurelist.html',
    "<div ng-class=\"{'mde-widget': mdeEditable, 'fill':mdeModel.style.fill}\">  <div ng-show=mdeEditable layout=row class=mde-widget-header ng-include=\"'views/partials/mdewidgetheaderactions.html'\"> </div> <div ng-style=\"{ 'background': mdeModel.style.background,'border-radius': mdeModel.style.borderRadius, 'border': mdeModel.style.border }\" layout=column>  <h1 style=\"text-align: center\">{{mdeModel.title}}</h1> <div ng-style=\"{'width': '100%'}\" ng-bind-html=\"mdeModel.text | unsafe\"> </div> <div ng-class=\"{'mde-rtl':mdeModel.style.rtl}\" layout=column layout-align=\"center center\" layout-gt-sm=row layout-align-gt-sm=\"space-around center\" ng-style=\"{'width': '100%'}\"> <div layout=column flex=100 flex-gt-sm=none layout-align=\"center center\" layout-padding ng-repeat=\"feature in mdeModel.features\"> <md-icon ng-style=\"{ 'font-size': '64px', 'color': mdeModel.style.color}\">{{feature.icon}}</md-icon> <h3 ng-style=\"{'color': mdeModel.style.color}\" ng-class=\"{'mde-rtl':mdeModel.style.rtl}\"> {{feature.title}} <div ng-if=mdeEditable> <md-button class=md-icon-button ng-click=edit(feature)> <md-icon ng-style=\"{ 'color': mdeModel.style.color }\">edit</md-icon> </md-button> <md-button class=md-icon-button ng-click=remove(feature)> <md-icon ng-style=\"{ 'color': mdeModel.style.color }\">delete</md-icon> </md-button> </div> </h3> <div ng-style=\"{'color': mdeModel.style.color}\" ng-class=\"{'mde-rtl':mdeModel.style.rtl}\" ng-bind-html=\"feature.text | unsafe\"></div> </div> </div> </div> </div>"
  );
  $templateCache.put('views/directives/wb-html.html',
    "<div ng-class=\"{'wb-widget': wbEditable, 'fill':wbModel.style.fill}\">  <div ng-show=wbEditable layout=row class=wb-widget-header ng-include=\"'views/partials/wb-widgetheaderactions.html'\"> </div>  <div ng-bind-html=\"wbModel.text | unsafe\" ng-style=\"{\n" +
    "            'margin-left':wbModel.style.marginLeft,\n" +
    "            'margin-right':wbModel.style.marginRight,\n" +
    "            'margin-top':wbModel.style.marginTop,\n" +
    "            'margin-bottom':wbModel.style.marginBottom,\n" +
    "\n" +
    "            'padding-left':wbModel.style.paddingLeft,\n" +
    "            'padding-right':wbModel.style.paddingRight,\n" +
    "            'padding-top':wbModel.style.paddingTop,\n" +
    "            'padding-bottom':wbModel.style.paddingBottom,\n" +
    "\n" +
    "            'background-color': wbModel.style.backgroundColor,\n" +
    "            'color': wbModel.style.color,\n" +
    "\n" +
    "            'min-width':wbModel.style.minWidth,\n" +
    "            'min-height':wbModel.style.minHeight,\n" +
    "            'max-width':(wbModel.style.maxWidth==0) ? 'none' : wbModel.style.maxWidth,\n" +
    "            'max-height':(wbModel.style.maxHeight==0)?'none':wbModel.style.maxHeight,\n" +
    "\n" +
    "            'border-top-left-radius':(wbModel.style.borderRadius.uniform) ? wbModel.style.borderRadius.all : wbModel.style.borderRadius.topLeft,\n" +
    "            'border-top-right-radius':(wbModel.style.borderRadius.uniform) ? wbModel.style.borderRadius.all : wbModel.style.borderRadius.topRight,\n" +
    "            'border-bottom-left-radius':(wbModel.style.borderRadius.uniform) ? wbModel.style.borderRadius.all : wbModel.style.borderRadius.bottomLeft,\n" +
    "            'border-bottom-right-radius':(wbModel.style.borderRadius.uniform) ? wbModel.style.borderRadius.all : wbModel.style.borderRadius.bottomRight,\n" +
    "\n" +
    "            'border-left-style':(wbModel.style.borderStyleColorWidth.uniform) ? wbModel.style.borderStyle.all : wbModel.style.borderStyle.left,\n" +
    "            'border-right-style':(wbModel.style.borderStyleColorWidth.uniform) ? wbModel.style.borderStyle.all : wbModel.style.borderStyle.right,\n" +
    "            'border-top-style':(wbModel.style.borderStyleColorWidth.uniform) ? wbModel.style.borderStyle.all : wbModel.style.borderStyle.top,\n" +
    "            'border-bottom-style':(wbModel.style.borderStyleColorWidth.uniform) ? wbModel.style.borderStyle.all : wbModel.style.borderStyle.bottom,\n" +
    "\n" +
    "            'border-left-width':(wbModel.style.borderStyleColorWidth.uniform) ? wbModel.style.borderWidth.all : wbModel.style.borderWidth.left,\n" +
    "            'border-right-width':(wbModel.style.borderStyleColorWidth.uniform) ? wbModel.style.borderWidth.all : wbModel.style.borderWidth.right,\n" +
    "            'border-top-width':(wbModel.style.borderStyleColorWidth.uniform) ? wbModel.style.borderWidth.all : wbModel.style.borderWidth.top,\n" +
    "            'border-bottom-width':(wbModel.style.borderStyleColorWidth.uniform) ? wbModel.style.borderWidth.all : wbModel.style.borderWidth.bottom,\n" +
    "\n" +
    "            'border-left-color':(wbModel.style.borderStyleColorWidth.uniform) ? wbModel.style.borderColor.all : wbModel.style.borderColor.left,\n" +
    "            'border-right-color':(wbModel.style.borderStyleColorWidth.uniform) ? wbModel.style.borderColor.all : wbModel.style.borderColor.right,\n" +
    "            'border-top-color':(wbModel.style.borderStyleColorWidth.uniform) ? wbModel.style.borderColor.all : wbModel.style.borderColor.top,\n" +
    "            'border-bottom-color':(wbModel.style.borderStyleColorWidth.uniform) ? wbModel.style.borderColor.all : wbModel.style.borderColor.bottom,\n" +
    "            }\"> </div> </div>"
  );
  $templateCache.put('views/directives/wb-iconfontchoise.html',
    "<div> <md-autocomplete ng-disabled=false md-no-cache=false md-selected-item=mdeModel md-search-text-change=searchTextChange(searchText) md-search-text=searchText md-selected-item-change=selectedItemChange(item) md-items=\"item in querySearch(searchText)\" md-item-text=item md-min-length=0 placeholder=\"What is your iconfont symbol?\"> <md-item-template> <md-icon md-font-set={{mdeFontSet}}>{{item}}</md-icon> <span md-highlight-text=searchText md-highlight-flags=^i>{{item}}</span> </md-item-template> <md-not-found> No iconfont matching \"{{searchText}}\" were found. </md-not-found> </md-autocomplete> </div>"
  );
  $templateCache.put('views/directives/wb-linklist.html',
    "<div ng-class=\"{'mde-widget': mdeEditable, 'fill':mdeModel.style.fill}\">  <div ng-show=mdeEditable layout=row class=mde-widget-header ng-include=\"'views/partials/mdewidgetheaderactions.html'\"> </div> <div layout=column ng-class=\"{'mde-rtl':mdeModel.style.rtl}\" ng-style=\"{'color': mdeModel.style.color,'background-color': mdeModel.style.backgroundColor,\n" +
    "\t   'width': mdeModel.style.width,'font-family': mdeModel.style.font,'padding': mdeModel.style.padding }\"> <div ng-if=mdeEditable> <md-button aria-label=settings ng-click=settings(mdeModel)> <md-icon ng-style=\"{ 'color': mdeModel.style.color }\">settings</md-icon> </md-button> <md-button ng-if=ngContent aria-label=save ng-click=save()> <md-icon ng-style=\"{ 'color': mdeModel.style.color }\">save</md-icon> </md-button> </div> <div layout-gt-sm=row layout=column layout-padding>  <div layout=column flex=none flex-gt-sm=30> <div ng-repeat=\"link in mdeModel.links\"> <md-button class=md-primary ng-click=runAction(link.action)> <md-icon ng-if=link.action.icon>{{link.action.icon}}</md-icon> {{link.title}} </md-button> <md-button ng-if=mdeEditable class=md-icon-button ng-click=editLink(link)> <md-icon ng-style=\"{ 'color': mdeModel.style.color }\">edit</md-icon> </md-button> <md-button ng-if=mdeEditable class=md-icon-button ng-click=deleteLink(link)> <md-icon ng-style=\"{ 'color': mdeModel.style.color }\">delete</md-icon> </md-button> </div> <div> <md-button ng-if=mdeEditable aria-label=\"add social\" ng-click=addLink(mdeModel)> <md-icon ng-style=\"{ 'color': mdeModel.style.color }\">add</md-icon> </md-button> </div> </div>  <div layout=row flex=none flex-gt-sm=70 layout-wrap layout-padding> <div layout=column layout-align=\"center start\" flex=100 flex-gt-md=50 ng-repeat=\"tile in mdeModel.tiles\"> <h3>{{tile.title}}</h3> <div ng-if=mdeEditable> <md-button class=md-icon-button ng-click=editTicket(tile)> <md-icon ng-style=\"{ 'color': mdeModel.style.color }\">edit</md-icon> </md-button> <md-button class=md-icon-button ng-click=deleteTicket(tile)> <md-icon ng-style=\"{ 'color': mdeModel.style.color }\">delete</md-icon> </md-button> </div> <p class=md-body-1>{{tile.description}}</p> <md-button class=md-primary ng-click=runAction(tile.action)> <md-icon ng-if=tile.action.icon>{{tile.action.icon}}</md-icon> {{tile.action.title}} </md-button> </div> <md-button ng-if=mdeEditable aria-label=\"add social\" ng-click=addTicket(mdeModel)> <md-icon ng-style=\"{ 'color': mdeModel.style.color }\">add</md-icon> </md-button> </div> </div> </div> </div>"
  );
  $templateCache.put('views/directives/wb-members.html',
    " <div ng-class=\"{'wb-widget': wbEditable, 'fill':wbModel.style.fill}\">  <div ng-show=wbEditable layout=row class=wb-widget-header ng-include=\"'views/partials/wb-widgetheaderactions.html'\"> </div>  <div class=wb-panel-body id=wb-members-body> <div> <md-select ng-show=wbEditable placeholder=\"User list role\" ng-model=wbModel.role md-on-open=loadRoles() style=\"min-width: 200px\"> <md-option ng-value=role.id ng-repeat=\"role in roles.items\"> {{role.name}} </md-option> </md-select> </div> <wb-content ng-show=wbEditable wb-editable=wbEditable wb-model=wbModel.template> </wb-content> <div id=wb-members-placeholder ng-style=\"{\n" +
    "\t         'margin-left':wbModel.style.marginLeft,\n" +
    "\t         'margin-right':wbModel.style.marginRight,\n" +
    "\t         'margin-top':wbModel.style.marginTop,\n" +
    "\t         'margin-bottom':wbModel.style.marginBottom,\n" +
    "\t\n" +
    "\t         'padding-left':wbModel.style.paddingLeft,\n" +
    "\t         'padding-right':wbModel.style.paddingRight,\n" +
    "\t         'padding-top':wbModel.style.paddingTop,\n" +
    "\t         'padding-bottom':wbModel.style.paddingBottom,\n" +
    "\t\n" +
    "\t         'background-color': wbModel.style.backgroundColor,\n" +
    "\t         'color': wbModel.style.color,\n" +
    "\t\n" +
    "\t         'min-width':wbModel.style.minWidth,\n" +
    "\t         'min-height':wbModel.style.minHeight,\n" +
    "\t         'max-width':(wbModel.style.maxWidth==0) ? 'none' : wbModel.style.maxWidth,\n" +
    "\t         'max-height':(wbModel.style.maxHeight==0)?'none':wbModel.style.maxHeight,\n" +
    "\t\n" +
    "\t         'border-top-left-radius':(wbModel.style.borderRadius.uniform) ? wbModel.style.borderRadius.all : wbModel.style.borderRadius.topLeft,\n" +
    "\t         'border-top-right-radius':(wbModel.style.borderRadius.uniform) ? wbModel.style.borderRadius.all : wbModel.style.borderRadius.topRight,\n" +
    "\t         'border-bottom-left-radius':(wbModel.style.borderRadius.uniform) ? wbModel.style.borderRadius.all : wbModel.style.borderRadius.bottomLeft,\n" +
    "\t         'border-bottom-right-radius':(wbModel.style.borderRadius.uniform) ? wbModel.style.borderRadius.all : wbModel.style.borderRadius.bottomRight,\n" +
    "\t\n" +
    "\t         'border-left-style':(wbModel.style.borderStyleColorWidth.uniform) ? wbModel.style.borderStyle.all : wbModel.style.borderStyle.left,\n" +
    "\t         'border-right-style':(wbModel.style.borderStyleColorWidth.uniform) ? wbModel.style.borderStyle.all : wbModel.style.borderStyle.right,\n" +
    "\t         'border-top-style':(wbModel.style.borderStyleColorWidth.uniform) ? wbModel.style.borderStyle.all : wbModel.style.borderStyle.top,\n" +
    "\t         'border-bottom-style':(wbModel.style.borderStyleColorWidth.uniform) ? wbModel.style.borderStyle.all : wbModel.style.borderStyle.bottom,\n" +
    "\t\n" +
    "\t         'border-left-width':(wbModel.style.borderStyleColorWidth.uniform) ? wbModel.style.borderWidth.all : wbModel.style.borderWidth.left,\n" +
    "\t         'border-right-width':(wbModel.style.borderStyleColorWidth.uniform) ? wbModel.style.borderWidth.all : wbModel.style.borderWidth.right,\n" +
    "\t         'border-top-width':(wbModel.style.borderStyleColorWidth.uniform) ? wbModel.style.borderWidth.all : wbModel.style.borderWidth.top,\n" +
    "\t         'border-bottom-width':(wbModel.style.borderStyleColorWidth.uniform) ? wbModel.style.borderWidth.all : wbModel.style.borderWidth.bottom,\n" +
    "\t\n" +
    "\t         'border-left-color':(wbModel.style.borderStyleColorWidth.uniform) ? wbModel.style.borderColor.all : wbModel.style.borderColor.left,\n" +
    "\t         'border-right-color':(wbModel.style.borderStyleColorWidth.uniform) ? wbModel.style.borderColor.all : wbModel.style.borderColor.right,\n" +
    "\t         'border-top-color':(wbModel.style.borderStyleColorWidth.uniform) ? wbModel.style.borderColor.all : wbModel.style.borderColor.top,\n" +
    "\t         'border-bottom-color':(wbModel.style.borderStyleColorWidth.uniform) ? wbModel.style.borderColor.all : wbModel.style.borderColor.bottom,\n" +
    "\t         }\"> </div> </div> </div>"
  );
  $templateCache.put('views/directives/wb-notfoundelement.html',
    "<div ng-class=\"{'mde-widget': mdeEditable, 'fill':mdeModel.style.fill}\">  <div ng-show=mdeEditable layout=row class=mde-widget-header ng-include=\"'views/partials/mdewidgetheaderactions.html'\"> </div> <div ng-show=mdeEditable> Unsuported widget?! </div> </div>"
  );
  $templateCache.put('views/directives/wb-sociallist.html',
    "<div ng-class=\"{'mde-widget': mdeEditable, 'fill':mdeModel.style.fill}\">  <div ng-show=mdeEditable layout=row class=mde-widget-header ng-include=\"'views/partials/mdewidgetheaderactions.html'\"> </div> <div layout=row layout-align=\"start start\" layout-wrap ng-class=\"{'mde-rtl':mdeModel.style.rtl}\" ng-style=\"{ 'color': mdeModel.style.color, 'background-color': mdeModel.style.backgroundColor, 'width': mdeModel.style.width, 'font-family': mdeModel.style.font, 'padding': mdeModel.style.padding }\">   <md-button ng-if=!mdeEditable ng-repeat=\"social in mdeModel.socials\" ng-click=gotoSocial(social)> <md-icon ng-style=\"{ 'color': mdeModel.style.color }\" class=md-48 md-font-set=social>{{social.icon}} </md-icon> </md-button> <md-menu ng-if=mdeEditable ng-repeat=\"social in mdeModel.socials\"> <md-button aria-label=\"Open phone interactions menu\" class=md-icon-button ng-click=\"openMenu($mdOpenMenu, $event)\"> <md-icon ng-style=\"{ 'color': mdeModel.style.color }\" class=md-48 md-font-set=social> {{social.icon}} </md-icon> </md-button> <md-menu-content width=4> <md-menu-item> <md-button ng-click=\"edit(social, $event)\"> <md-icon>edit</md-icon> {{ 'Edit' | translate }} </md-button> </md-menu-item> <md-menu-item> <md-button ng-click=\"delete(social, $event)\"> <md-icon>delete</md-icon> {{ 'Delete' | translate }} </md-button> </md-menu-item> </md-menu-content> </md-menu> </div> </div>"
  );
  $templateCache.put('views/partials/wb-widgetheaderactions.html',
    "<span translate> widget</span> <span flex></span> <md-button ng-if=add ng-click=add() class=\"md-icon-button md-mini\"> <md-icon class=mde-icon-mini>add_circle</md-icon> </md-button> <md-button ng-click=settings() class=\"md-icon-button md-mini\"> <md-icon class=mde-icon-mini>settings</md-icon> </md-button> <md-button class=\"md-icon-button md-mini\" ng-click=removeWidget() ng-show=mdeParent&&removeWidget> <md-icon class=mde-icon-mini>delete</md-icon> </md-button>"
  );
  $templateCache.put('views/settings/wb-background.html',
    " <div layout=column>  <div class=\"preview-box wb-flex-item-stretch\"> <div class=header>Preview</div> <div class=preview-area ng-class=\"[wbParent.wbModel.style.flexDirection,wbModel.style.justifyContent, wbModel.style.alignItems]\" style=\"display: flex\"> <div class=widget style=\"width:100px; height:50px; margin: 20px\" ng-style=\"{\n" +
    "            'opacity':'calc('+wbModel.style.opacity+'/100)',\n" +
    "            'background-color':wbModel.style.backgroundColor,\n" +
    "            }\" layout=row layout-align=\"center center\"> <p>item</p> </div> </div> </div> <div class=setting-panel layout=column layout-gt-sm=row>  <md-list> <md-subheader>Opacity</md-subheader> <md-divider></md-divider> <div layout=row class=wb-flex-align-items-center> <span>Percent</span> <md-slider flex min=0 max=100 ng-model=wbModel.style.opacity> </md-slider> <md-input-container> <input style=\"width: 50px\" flex type=number ng-model=wbModel.style.opacity> </md-input-container> </div> </md-list>  <md-list> <md-subheader>Color</md-subheader> <md-divider></md-divider> <div layout=row class=wb-flex-align-items-start> <md-color-picker md-color-clear-button=false label=Color icon=brush ng-model=wbModel.style.backgroundColor> </md-color-picker> </div> </md-list> </div> </div>"
  );
  $templateCache.put('views/settings/wb-border.html',
    " <div layout=column>   <div class=\"preview-box wb-flex-item-stretch\"> <div class=header>Preview</div> <div class=preview-area ng-class=\"[wbParent.wbModel.style.flexDirection,wbModel.style.justifyContent, wbModel.style.alignItems]\" style=\"display: flex\"> <div class=widget style=\"width:100px; height:50px; margin: 20px\" ng-style=\"{\n" +
    "            'border-top-left-radius':(wbModel.style.borderRadius.uniform) ? wbModel.style.borderRadius.all : wbModel.style.borderRadius.topLeft,\n" +
    "            'border-top-right-radius':(wbModel.style.borderRadius.uniform) ? wbModel.style.borderRadius.all : wbModel.style.borderRadius.topRight,\n" +
    "            'border-bottom-left-radius':(wbModel.style.borderRadius.uniform) ? wbModel.style.borderRadius.all : wbModel.style.borderRadius.bottomLeft,\n" +
    "            'border-bottom-right-radius':(wbModel.style.borderRadius.uniform) ? wbModel.style.borderRadius.all : wbModel.style.borderRadius.bottomRight,\n" +
    "\n" +
    "            'border-left-style':(wbModel.style.borderStyleColorWidth.uniform) ? wbModel.style.borderStyle.all : wbModel.style.borderStyle.left,\n" +
    "            'border-right-style':(wbModel.style.borderStyleColorWidth.uniform) ? wbModel.style.borderStyle.all : wbModel.style.borderStyle.right,\n" +
    "            'border-top-style':(wbModel.style.borderStyleColorWidth.uniform) ? wbModel.style.borderStyle.all : wbModel.style.borderStyle.top,\n" +
    "            'border-bottom-style':(wbModel.style.borderStyleColorWidth.uniform) ? wbModel.style.borderStyle.all : wbModel.style.borderStyle.bottom,\n" +
    "\n" +
    "            'border-left-width':(wbModel.style.borderStyleColorWidth.uniform) ? wbModel.style.borderWidth.all : wbModel.style.borderWidth.left,\n" +
    "            'border-right-width':(wbModel.style.borderStyleColorWidth.uniform) ? wbModel.style.borderWidth.all : wbModel.style.borderWidth.right,\n" +
    "            'border-top-width':(wbModel.style.borderStyleColorWidth.uniform) ? wbModel.style.borderWidth.all : wbModel.style.borderWidth.top,\n" +
    "            'border-bottom-width':(wbModel.style.borderStyleColorWidth.uniform) ? wbModel.style.borderWidth.all : wbModel.style.borderWidth.bottom,\n" +
    "\n" +
    "            'border-left-color':(wbModel.style.borderStyleColorWidth.uniform) ? wbModel.style.borderColor.all : wbModel.style.borderColor.left,\n" +
    "            'border-right-color':(wbModel.style.borderStyleColorWidth.uniform) ? wbModel.style.borderColor.all : wbModel.style.borderColor.right,\n" +
    "            'border-top-color':(wbModel.style.borderStyleColorWidth.uniform) ? wbModel.style.borderColor.all : wbModel.style.borderColor.top,\n" +
    "            'border-bottom-color':(wbModel.style.borderStyleColorWidth.uniform) ? wbModel.style.borderColor.all : wbModel.style.borderColor.bottom,\n" +
    "            }\" layout=row layout-align=\"center center\"> <p>item</p> </div> </div> </div> <div ng-controller=WbBorderSettingCtrl class=setting-panel layout=column layout-gt-sm=row>  <md-list> <md-subheader>Corner Radius</md-subheader> <md-divider></md-divider> <md-checkbox ng-model=wbModel.style.borderRadius.uniform>All equal</md-checkbox> <div layout=row class=wb-flex-align-items-center ng-show=wbModel.style.borderRadius.uniform> <span>Radius</span> <md-slider flex min=0 max=100 ng-model=wbModel.style.borderRadius.all> </md-slider> <md-input-container> <input style=\"width: 50px\" flex type=number ng-model=wbModel.style.borderRadius.all> </md-input-container> </div>         <div layout=row class=wb-flex-align-items-center ng-hide=wbModel.style.borderRadius.uniform> <span>Left</span> <md-slider flex min=0 max=100 ng-model=wbModel.style.borderRadius.topLeft> </md-slider> <md-input-container> <input style=\"width: 50px\" flex type=number ng-model=wbModel.style.borderRadius.topLeft> </md-input-container> </div> <div layout=row class=wb-flex-align-items-center ng-hide=wbModel.style.borderRadius.uniform> <span>Right</span> <md-slider flex min=0 max=100 ng-model=wbModel.style.borderRadius.topRight> </md-slider> <md-input-container> <input style=\"width: 50px\" flex type=number ng-model=wbModel.style.borderRadius.topRight> </md-input-container> </div> <div layout=row class=wb-flex-align-items-center ng-hide=wbModel.style.borderRadius.uniform> <span>Top</span> <md-slider flex min=0 max=100 ng-model=wbModel.style.borderRadius.bottomLeft> </md-slider> <md-input-container> <input style=\"width: 50px\" flex type=number ng-model=wbModel.style.borderRadius.bottomLeft> </md-input-container> </div> <div layout=row class=wb-flex-align-items-center ng-hide=wbModel.style.borderRadius.uniform> <span>Bottom</span> <md-slider flex min=0 max=100 ng-model=wbModel.style.borderRadius.bottomRight> </md-slider> <md-input-container> <input style=\"width: 50px\" flex type=number ng-model=wbModel.style.borderRadius.bottomRight> </md-input-container> </div> </md-list>  <md-list> <md-subheader>Style/Color/Thickness</md-subheader> <md-divider></md-divider> <md-checkbox ng-model=wbModel.style.borderStyleColorWidth.uniform>All equal</md-checkbox> <div layout=row class=wb-flex-align-items-start ng-show=wbModel.style.borderStyleColorWidth.uniform> <md-input-container flex=1> <label>Style</label> <md-select ng-model=wbModel.style.borderStyle.all> <md-option ng-repeat=\"style in styles\" value={{style.value}}> {{style.title}} </md-option> </md-select> </md-input-container> <md-input-container flex=0 style=\"min-width: 100px\"> <label>Thickness</label> <input flex type=number ng-model=wbModel.style.borderWidth.all> </md-input-container> <md-color-picker class=color-picker-hide-textbox md-color-clear-button=false label=Color icon=brush ng-model=wbModel.style.borderColor.all> </md-color-picker> </div>  <div layout=row class=wb-flex-align-items-start ng-hide=wbModel.style.borderStyleColorWidth.uniform> <span>Left: </span> <md-input-container flex=1> <label>Style</label> <md-select ng-model=wbModel.style.borderStyle.left> <md-option ng-repeat=\"style in styles\" value={{style.value}}> {{style.title}} </md-option> </md-select> </md-input-container> <md-input-container flex=0 style=\"min-width: 100px\"> <label>Thickness</label> <input flex type=number ng-model=wbModel.style.borderWidth.left> </md-input-container> <md-color-picker class=color-picker-hide-textbox md-color-clear-button=false label=Color icon=brush ng-model=wbModel.style.borderColor.left> </md-color-picker> </div>  <div layout=row class=wb-flex-align-items-start ng-hide=wbModel.style.borderStyleColorWidth.uniform> <span>Right: </span> <md-input-container flex=1> <label>Style</label> <md-select ng-model=wbModel.style.borderStyle.right> <md-option ng-repeat=\"style in styles\" value={{style.value}}> {{style.title}} </md-option> </md-select> </md-input-container> <md-input-container flex=0 style=\"min-width: 100px\"> <label>Thickness</label> <input flex type=number ng-model=wbModel.style.borderWidth.right> </md-input-container> <md-color-picker class=color-picker-hide-textbox md-color-clear-button=false label=Color icon=brush ng-model=wbModel.style.borderColor.right> </md-color-picker> </div>  <div layout=row class=wb-flex-align-items-start ng-hide=wbModel.style.borderStyleColorWidth.uniform> <span>Top: </span> <md-input-container flex=1> <label>Style</label> <md-select ng-model=wbModel.style.borderStyle.top> <md-option ng-repeat=\"style in styles\" value={{style.value}}> {{style.title}} </md-option> </md-select> </md-input-container> <md-input-container flex=0 style=\"min-width: 100px\"> <label>Thickness</label> <input flex type=number ng-model=wbModel.style.borderWidth.top> </md-input-container> <md-color-picker class=color-picker-hide-textbox md-color-clear-button=false label=Color icon=brush ng-model=wbModel.style.borderColor.top> </md-color-picker> </div>  <div layout=row class=wb-flex-align-items-start ng-hide=wbModel.style.borderStyleColorWidth.uniform> <span>Down: </span> <md-input-container flex=1> <label>Style</label> <md-select ng-model=wbModel.style.borderStyle.bottom> <md-option ng-repeat=\"style in styles\" value={{style.value}}> {{style.title}} </md-option> </md-select> </md-input-container> <md-input-container flex=0 style=\"min-width: 100px\"> <label>Thickness</label> <input flex type=number ng-model=wbModel.style.borderWidth.bottom> </md-input-container> <md-color-picker class=color-picker-hide-textbox md-color-clear-button=false label=Color icon=brush ng-model=wbModel.style.borderColor.bottom> </md-color-picker> </div> </md-list> </div> </div>"
  );
  $templateCache.put('views/settings/wb-description.html',
    " <div layout=column style=width:100%> <md-input-container> <label translate>Lable</label> <input ng-model=wbModel.label> </md-input-container> <md-input-container> <label translate>Description</label> <input ng-model=wbModel.description> </md-input-container> </div>"
  );
  $templateCache.put('views/settings/wb-general.html',
    "General settings"
  );
  $templateCache.put('views/settings/wb-layout-page.html',
    " <div layout=column>   <div class=\"preview-box wb-flex-item-stretch\"> <div class=header>Preview</div> <div class=\"preview-area wb-flex\" ng-class=\"[wbModel.style.flexDirection,wbModel.style.justifyContent, wbModel.style.alignItems]\"> <div class=widget layout=row layout-align=\"center center\"><p>1</p></div> <div class=widget layout=row layout-align=\"center center\"><p>2</p></div> <div class=widget layout=row layout-align=\"center center\"><p>3</p></div> </div> </div> <div class=setting-panel layout=column layout-gt-sm=row ng-controller=WbSelfLayoutWbSettingsCtrl>  <md-list> <md-subheader>Direction</md-subheader> <md-divider style=\"margin-bottom: 1em\"></md-divider> <md-radio-group ng-model=wbModel.style.flexDirection role=radiogroup> <md-list-item ng-repeat=\"direction in flexDirection\"> <md-radio-button value={{direction.value}}> <md-icon>{{direction.icon}}</md-icon> {{direction.title |translate}} </md-radio-button> </md-list-item> </md-radio-group> </md-list>  <md-list> <md-subheader ng-show=\"wbModel.style.flexDirection=='wb-flex-row'\">Vertical Setting</md-subheader> <md-subheader ng-show=\"wbModel.style.flexDirection!='wb-flex-row'\">Horizontal Setting</md-subheader> <md-divider style=\"margin-bottom: 1em\"></md-divider> <md-radio-group ng-model=wbModel.style.alignItems role=radiogroup> <md-list-item ng-repeat=\"align in alignItems\"> <md-radio-button value={{align.value}}> <md-icon>{{direction.icon}}</md-icon> {{align.title |translate}} </md-radio-button> </md-list-item> </md-radio-group> </md-list>  <md-list> <md-subheader ng-show=\"wbModel.style.flexDirection!='wb-flex-row'\">Vertical Setting</md-subheader> <md-subheader ng-show=\"wbModel.style.flexDirection=='wb-flex-row'\">Horizontal Setting</md-subheader> <md-divider style=\"margin-bottom: 1em\"></md-divider> <md-radio-group ng-model=wbModel.style.justifyContent role=radiogroup> <md-list-item ng-repeat=\"align in justifyContent\"> <md-radio-button value={{align.value}}> <md-icon>{{direction.icon}}</md-icon> {{align.title |translate}} </md-radio-button> </md-list-item> </md-radio-group> </md-list> </div> </div>"
  );
  $templateCache.put('views/settings/wb-layout-self.html',
    " <div layout=column>   <div class=\"preview-box wb-flex-item-stretch\"> <div class=header>Preview</div> <div class=preview-area ng-class=\"[mdeParent.mdeModel.style.flexDirection,mdeModel.style.justifyContent, mdeModel.style.alignItems]\" style=\"display: flex\"> <div class=widget layout=row layout-align=\"center center\"><p>before</p></div> <div class=widget ng-class=mdeModel.style.flexAlignItem ng-style=\"{'flex-grow':mdeModel.style.flexItemGrow,'-webkit-flex-grow':mdeModel.style.flexItemGrow}\" layout=row layout-align=\"center center\" style=\"border: 2px dotted\"><p> item</p></div> <div class=widget layout=row layout-align=\"center center\"><p>after</p></div> </div> </div> <div class=setting-panel layout=column layout-align=\"none none\" layout-gt-sm=row layout-align-gt-sm=\"space-around none\" ng-controller=WbSelfLayoutWbSettingsCtrl>  <md-list> <md-subheader ng-show=\"mdeModel.style.flexDirection!='mde-flex-row'\">Vertical Setting</md-subheader> <md-subheader ng-show=\"mdeModel.style.flexDirection=='mde-flex-row'\">Horizontal Setting</md-subheader> <md-divider style=\"margin-bottom: 1em\"></md-divider> <md-radio-group ng-model=mdeModel.style.flexAlignItem role=radiogroup> <md-list-item ng-repeat=\"direction in flexAlignItem\"> <md-radio-button value={{direction.value}}> <md-icon>{{direction.icon}}</md-icon> {{direction.title |translate}} </md-radio-button> </md-list-item> </md-radio-group> </md-list>  <md-list> <md-subheader>Fill Extra Space</md-subheader> <md-divider style=\"margin-bottom: 1em\"></md-divider> <div layout=column style=\"margin-left: 14px; margin-right: 14px; min-width: 200px\"> <md-checkbox ng-model=mdeModel.style.flexItemGrowEnabled style=\"margin-bottom: 2em\">Enabled</md-checkbox> <div layout=row class=mde-flex-align-items-center ng-disabled=!mdeModel.style.flexItemGrowEnabled> <span>Weight</span> <md-slider ng-disabled=!mdeModel.style.flexItemGrowEnabled flex min=0 max=10 step=1 ng-model=mdeModel.style.flexItemGrow> </md-slider> <md-input-container> <input ng-disabled=!mdeModel.style.flexItemGrowEnabled style=\"width: 50px\" flex type=number ng-model=mdeModel.style.flexItemGrow> </md-input-container> </div> </div> </md-list> </div> </div>"
  );
  $templateCache.put('views/settings/wb-layout.html',
    " <div layout=column ng-style=\"{'width': '100%'}\">  <div class=preview-box> <div class=header>Preview</div> <div class=preview-area layout={{wbModel.style.direction}} layout-align=\"{{wbModel.style.directionAlignment}} {{wbModel.style.perpendicularAlignment}}\"> <div class=widget layout=row layout-align=\"center center\"><p>1</p></div> <div class=widget layout=row layout-align=\"center center\"><p>2</p></div> <div class=widget layout=row layout-align=\"center center\"><p>3</p></div> </div> </div> <div layout=column layout-align=\"none none\" layout-gt-sm=row layout-align-gt-sm=\"space-around none\" ng-controller=WbLayoutWbSettingsCtrl> <div> <div>Layout Direction</div> <md-radio-group ng-model=wbModel.style.direction role=radiogroup> <md-radio-button ng-repeat=\"direction in directions\" value={{direction.value}}> <md-icon>{{direction.icon}}</md-icon> {{direction.title |translate}} </md-radio-button> </md-radio-group> </div> <div> <div>Alignment in Layout Direction</div> <md-radio-group ng-model=wbModel.style.directionAlignment role=radiogroup> <md-radio-button ng-repeat=\"align in directionAlignments\" value={{align.value}}> {{align.title}} </md-radio-button> </md-radio-group> </div> <div> <div>Alignment in Perpendicular Direction</div> <md-radio-group ng-model=wbModel.style.perpendicularAlignment role=radiogroup> <md-radio-button ng-repeat=\"align in perpendicularAlignments\" value={{align.value}}> {{align.title}} </md-radio-button> </md-radio-group> </div> </div> </div>"
  );
  $templateCache.put('views/settings/wb-margin-padding.html',
    " <div layout=column>   <div class=\"preview-box wb-flex-item-stretch\"> <div class=header>Preview</div> <div class=preview-area ng-class=\"[wbParent.wbModel.style.flexDirection,wbModel.style.justifyContent, wbModel.style.alignItems]\" style=\"display: flex\"> <div class=widget layout=row layout-align=\"center center\"><p>before</p></div> <div class=widget ng-class=wbModel.style.flexAlignItem ng-style=\"{\n" +
    "                'margin-left':wbModel.style.marginLeft,\n" +
    "                'margin-right':wbModel.style.marginRight,\n" +
    "                'margin-top':wbModel.style.marginTop,\n" +
    "                'margin-bottom':wbModel.style.marginBottom,\n" +
    "\n" +
    "                'padding-left':wbModel.style.paddingLeft,\n" +
    "                'padding-right':wbModel.style.paddingRight,\n" +
    "                'padding-top':wbModel.style.paddingTop,\n" +
    "                'padding-bottom':wbModel.style.paddingBottom,\n" +
    "\n" +
    "                 'flex-grow':wbModel.style.flexItemGrow,\n" +
    "                 '-webkit-flex-grow':wbModel.style.flexItemGrow}\" layout=row layout-align=\"center center\" style=\"border: 2px dotted\"><p> item</p></div> <div class=widget layout=row layout-align=\"center center\"><p>after</p></div> </div> </div> <div class=setting-panel layout=column layout-gt-sm=row> <md-list> <md-subheader>Margin</md-subheader> <md-divider style=\"margin-bottom: 1em\"></md-divider> <div layout=row class=wb-flex-align-items-center> <span>Left</span> <md-slider flex min=0 max=100 ng-model=wbModel.style.marginLeft> </md-slider> <md-input-container> <input style=\"width: 50px\" flex type=number ng-model=wbModel.style.marginLeft> </md-input-container> </div> <div layout=row class=wb-flex-align-items-center> <span>Right</span> <md-slider flex min=0 max=100 ng-model=wbModel.style.marginRight> </md-slider> <md-input-container> <input style=\"width: 50px\" flex type=number ng-model=wbModel.style.marginRight> </md-input-container> </div> <div layout=row class=wb-flex-align-items-center> <span>Top</span> <md-slider flex min=0 max=100 ng-model=wbModel.style.marginTop> </md-slider> <md-input-container> <input style=\"width: 50px\" flex type=number ng-model=wbModel.style.marginTop> </md-input-container> </div> <div layout=row class=wb-flex-align-items-center> <span>Bottom</span> <md-slider flex min=0 max=100 ng-model=wbModel.style.marginBottom> </md-slider> <md-input-container> <input style=\"width: 50px\" flex type=number ng-model=wbModel.style.marginBottom> </md-input-container> </div> </md-list> <md-list> <md-subheader>Padding</md-subheader> <md-divider style=\"margin-bottom: 1em\"></md-divider> <div layout=row class=wb-flex-align-items-center> <span>Left</span> <md-slider flex min=0 max=100 ng-model=wbModel.style.paddingLeft> </md-slider> <md-input-container> <input style=\"width: 50px\" flex type=number ng-model=wbModel.style.paddingLeft> </md-input-container> </div> <div layout=row class=wb-flex-align-items-center> <span>Right</span> <md-slider flex min=0 max=100 ng-model=wbModel.style.paddingRight> </md-slider> <md-input-container> <input style=\"width: 50px\" flex type=number ng-model=wbModel.style.paddingRight> </md-input-container> </div> <div layout=row class=wb-flex-align-items-center> <span>Top</span> <md-slider flex min=0 max=100 ng-model=wbModel.style.paddingTop> </md-slider> <md-input-container> <input style=\"width: 50px\" flex type=number ng-model=wbModel.style.paddingTop> </md-input-container> </div> <div layout=row class=wb-flex-align-items-center> <span>Bottom</span> <md-slider flex min=0 max=100 ng-model=wbModel.style.paddingBottom> </md-slider> <md-input-container> <input style=\"width: 50px\" flex type=number ng-model=wbModel.style.paddingBottom> </md-input-container> </div> </md-list> </div> </div>"
  );
  $templateCache.put('views/settings/wb-min-max-size.html',
    " <div layout=column>  <div class=\"preview-box wb-flex-item-stretch\"> <div class=header>Preview</div> <div class=\"wb-flex preview-area wb-flex-justify-content-center\"> <div class=\"widget wb-flex-item-center\" ng-class=wbModel.style.flexAlignItem ng-style=\"{\n" +
    "                'min-width':wbModel.style.minWidth,\n" +
    "                'min-height':wbModel.style.minHeight,\n" +
    "                'max-width':(wbModel.style.maxWidth==0) ? 'none' : wbModel.style.maxWidth,\n" +
    "                'max-height':(wbModel.style.maxHeight==0)?'none':wbModel.style.maxHeight}\" layout=row layout-align=\"center center\" style=\"border: 2px dotted\"><p> item</p></div> </div> </div> <div class=setting-panel layout=column layout-gt-sm=row>  <md-list> <md-subheader>MIN</md-subheader> <md-divider style=\"margin-bottom: 1em\"></md-divider> <div layout=row class=wb-flex-align-items-center> <span>Width<md-tooltip>set value \"0\" for ignoring</md-tooltip></span> <md-slider flex min=0 max=100 ng-model=wbModel.style.minWidth> </md-slider> <md-input-container> <input style=\"width: 50px\" flex type=number ng-model=wbModel.style.minWidth> </md-input-container> </div> <div layout=row class=wb-flex-align-items-center> <span>Height<md-tooltip>set value \"0\" for ignoring</md-tooltip></span> <md-slider flex min=0 max=100 ng-model=wbModel.style.minHeight> </md-slider> <md-input-container> <input style=\"width: 50px\" flex type=number ng-model=wbModel.style.minHeight> </md-input-container> </div> </md-list>  <md-list> <md-subheader>MAX</md-subheader> <md-divider style=\"margin-bottom: 1em\"></md-divider> <div layout=row class=wb-flex-align-items-center> <span>Width<md-tooltip>set value \"0\" for ignoring</md-tooltip></span> <md-slider flex min=0 max=100 ng-model=wbModel.style.maxWidth> </md-slider> <md-input-container> <input style=\"width: 50px\" flex ng-model=wbModel.style.maxWidth> </md-input-container> </div> <div layout=row class=wb-flex-align-items-center> <span>Height<md-tooltip>set value \"0\" for ignoring</md-tooltip></span> <md-slider flex min=0 max=100 ng-model=wbModel.style.maxHeight> </md-slider> <md-input-container> <input style=\"width: 50px\" flex ng-model=wbModel.style.maxHeight> </md-input-container> </div> </md-list> </div> </div>"
  );
  $templateCache.put('views/settings/wb-notfound.html',
    " <md-icon>bug</md-icon> <h2>Settings page not found</h2>"
  );
  $templateCache.put('views/settings/wb-text.html',
    " <div ng-controller=WbTextSettingsCtrl layout=column>  <textarea ui-tinymce=tinymceOptions ng-model=wbModel.text style=\"width: 100%\">\n" +
    "\t</textarea> </div>"
  );
}]);
