(function(angular, $) {

	'use strict';

	angular
		.module('adminlte')
		.directive('knob', knob)
	;

	knob.$înject = [];
	function knob() {
		return {
			restrict: 'C',
			link: function(scope, element, attributes, controller) {
				element.knob();
			}
		};
	}

})(window.angular, window.jQuery);