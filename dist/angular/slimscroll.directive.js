(function(angular, $) {

	'use strict';

	angular
		.module('adminlte')
		.directive('alSlimscroll', alSlimscroll)
	;

	alSlimscroll.$inject = [];
	function alSlimscroll() {
		return {
			restrict: 'A',
			scope: {
				alSlimscroll: '='
			},
			link: function(scope, element, attributes, controller) {
				if (!angular.isUndefined(scope.alSlimscroll)) {
					element.slimscroll(scope.alSlimscroll);
				} else {
					element.slimscroll();
				}
			}
		};
	}

})(window.angular, window.jQuery);