(function(angular, $) {

	'use strict';

	angular
		.module('adminlte')
		.directive('alControlSidebar', alControlSidebarDirective)
	;

	alControlSidebarDirective.$inject = ['alControlSidebarService'];
	function alControlSidebarDirective(alControlSidebarService) {
		return {
			restrict: 'A',
			scope: {
				alToggleBtnSelector: '@'
			},
			controller: function() {

			},
			controllerAs: 'alControlSidebarController',
			bindToController: true,
			link: function(scope, element, attributes, controller) {
				var toggleBtn = $(controller.alToggleBtnSelector);
				alControlSidebarService.activate(element, toggleBtn);
			}
		}
	}



})(window.angular, window.jQuery);