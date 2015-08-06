(function(angular, $) {

	'use strict';

	angular
		.module('adminlte')
		.directive('alVectorMapConfig', alVectorMapConfig)
	;

	alVectorMapConfig.$inject = [];
	function alVectorMapConfig() {
		return {
			restrict: 'A',
			scope: {
				alVectorMapConfig: '='
			},
			link: function(scope, element, attributes, controller) {
				element.vectorMap(scope.alVectorMapConfig);
			}
		};
	}

})(window.angular, window.jQuery);