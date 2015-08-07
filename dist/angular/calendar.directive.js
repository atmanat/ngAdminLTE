(function(angular, $) {

	'use strict';

	angular
		.module('adminlte')
		.directive('alCalendar', alCalendar)
	;

	alCalendar.$inject = [];
	function alCalendar() {
		return {
			restrict: 'A',
			link: function(scope, element, attibutes, controller) {
				element.datepicker();
			}
		};
	}

})(window.angular, window.jQuery);