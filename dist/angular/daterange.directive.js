(function(angular, $) {

	'use strict';

	angular
		.module('adminlte')
		.directive('daterange', daterange)
	;

	daterange.$inject = [];
	function daterange() {
		return {
			restrict: 'C',
			scope: {
				alDaterangeConfig: '=',
				alDaterangeSelect: '='
			},
			controller: daterangeController,
			controllerAs: 'daterangeController',
			bindToController: true,
			link: function(scope, element, attributes, controller) {
				var config = controller.alDaterangeConfig;
				var fn = controller.alDaterangeSelect;
				element.daterangepicker(config, fn);
			}
		};
	}

	daterangeController.$inject = [];
	function daterangeController() {
	}
	
})(window.angular, window.jQuery);