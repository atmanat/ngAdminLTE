(function(angular, $) {

	'use strict';

	angular
		.module('adminlte')
		/*
		.directive('connectedSortable', connectedSortable)
		.directive('boxHeader', boxHeader)
		.directive('navTabsCustom', navTabsCustom)
		.directive('toDo', toDo)
		*/
		.directive('alSortableConfig', alSortableConfig)
	;

	alSortableConfig.$inject = [];
	function alSortableConfig() {
		return {
			restrict: 'A',
			scope: {
				alSortableConfig: '='
			},
			link: function(scope, element, attributes, controller) {
				element.sortable(scope.alSortableConfig);		
			}
		};
	}

/*
	connectedSortable.$inject = [];
	function connectedSortable() {
		return {
			restrict: 'C',
			controller: function() { ;; },
			controllerAs: 'connectedSortableController',
			link: function(scope, element, attributes, controller) {
				element.sortable({
					placeholder: "sort-highlight",
					connectWith: ".connectedSortable",
					handle: ".box-header, .nav-tabs",
					forcePlaceholderSize: true,
					zIndex: 999999
				});
			}
		}
	}
*/
	boxHeader.$inject = [];
	function boxHeader() {
		return {
			restrict: 'C',
			require: '^connectedSortable',
			link: function(scope, element, attributes, connectedSortableController) {
				element.css("cursor", "move");
			}
		}
	}

	navTabsCustom.$inject = [];
	function navTabsCustom() {
		return {
			restrict: 'C',
			require: '^connectedSortable',
			link: function(scope, element, attributes, connectedSortableController) {
				element.css("cursor", "move");
			}
		}
	}

	toDo.$inject = [];
	function toDo() {
		return {
			restrict: 'C',
			link: function(scope, element, attributes, controller) {
				element.sortable({
					placeholder: "sort-highlight",
					handle: ".handle",
					forcePlaceholderSize: true,
					zIndex: 999999
				})
			}
		}
	}

})(window.angular, window.jQuery);