(function(angular, $) {

	'use strict';

	angular
		.module('adminlte')
		.directive('altNavbarMenuSlimscroll', altNavbarMenuSlimscroll)
	;

	altNavbarMenuSlimscroll.$inject = [];
	function altNavbarMenuSlimscroll() {
		return {
			restrict: 'A',
			link: function(scope, element, attributes, controller) {
				//Easy access to options
				var o = $.AdminLTE.options;

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