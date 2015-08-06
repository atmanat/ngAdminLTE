(function(angular, $) {

	'use strict';

	angular
		.module('adminlte')
		.directive('alSparklineValues', alSparklineValues)
		.directive('alSparklineConfig', alSparklineConfig)
	;

	function alSparklineConfig() {
		return {
			restrict: 'A',
			require: 'alSparklineValues',
			controller: function() { ;; },
			scope: {
				alSparklineConfig: '=',
				alSparklineValues: '='
			},
			link: function(scope, element, attributes, controllers) {
				element.sparkline(scope.alSparklineValues, scope.alSparklineConfig);
			}
		};
	}

	function alSparklineValues() {
		return {
			restrict: 'A',
			require: 'alSparklineConfig',
			controller: function() { ;; },
			link: function(scope, element, attributes, controllers) {

			}
		};
	}

})(window.angular, window.jQuery);