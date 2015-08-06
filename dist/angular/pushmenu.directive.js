(function(angular, $) {

	'use strict';

	angular
		.module('adminlte')
		.directive('alSidebarPushMenu', alSidebarPushMenu)
	;

	alSidebarPushMenu.$inject = ['alPushMenuService'];
	function alSidebarPushMenu(alPushMenuService) {
		return {
			restrict: 'A',
			link: function(scope, element, attributes, controller) {
				alPushMenuService.activate(element);
			}
		}
	}
	
})(window.angular, window.jQuery);