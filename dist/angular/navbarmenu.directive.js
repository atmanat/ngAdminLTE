(function(angular, $) {

	'use strict';

	angular
		.module('adminlte')
		//.directive('altNavbarMenuSlimscroll', altNavbarMenuSlimscroll)
		.directive('navbar', navbar)
		.directive('menu', menu)
	;

	navbar.$inject = [];
	function navbar() {
		return {
			restrict: 'C',
			controller: function() { ;; },
			controllerAs: 'navbarController'
		}
	}

	menu.$inject = ['alOptions'];
	function menu(alOptions) {
		return {
			restrict: 'C',
			require: '^^navbar',
			link: function(scope, element, attributes, navbarController) {
				//Easy access to options
				var o = alOptions

				//Add slimscroll to navbar dropdown
				if (o.navbarMenuSlimscroll && typeof $.fn.slimscroll != 'undefined') {
					$(element).slimscroll({
						height: o.navbarMenuHeight,
						alwaysVisible: false,
						size: o.navbarMenuSlimscrollWidth
					}).css("width", "100%");
				}
			}
		}
	}

	altNavbarMenuSlimscroll.$inject = ['alOptions'];
	function altNavbarMenuSlimscroll(alOptions) {
		return {
			restrict: 'A',
			link: function(scope, element, attributes, controller) {
				//Easy access to options
				var o = alOptions;

				//Add slimscroll to navbar dropdown
				if (o.navbarMenuSlimscroll && typeof $.fn.slimscroll != 'undefined') {
					$(element).slimscroll({
						height: o.navbarMenuHeight,
						alwaysVisible: false,
						size: o.navbarMenuSlimscrollWidth
					}).css("width", "100%");
				}
			}
		};
	}

})(window.angular, window.jQuery);