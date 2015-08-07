(function(angular, $) {

	'use strict';

	angular
		.module('adminlte')
		.directive('alMorrisAreaConfig', alMorrisAreaConfig)
		.directive('alMorrisLineConfig', alMorrisLineConfig)
		.directive('alMorrisDonutConfig', alMorrisDonutConfig)
	;

	alMorrisAreaConfig.$inject = [];
	function alMorrisAreaConfig() {
		return {
			restrict: 'A',
			scope: {
				alMorrisAreaConfig: '='
			},
			link: function(scope, element, attributes, controller) {
				var config = angular.extend({}, scope.alMorrisAreaConfig, {element: element});
				var area = new Morris.Area(config);
			}
		};
	}

	alMorrisLineConfig.$inject = [];
	function alMorrisLineConfig() {
		return {
			restrict: 'A',
			scope: {
				alMorrisLineConfig: '='
			},
			link: function(scope, element, attributes, controller) {
				var config = angular.extend({}, scope.alMorrisLineConfig, {element: element});
				var line = new Morris.Line(config);
			}
		};
	}

	alMorrisDonutConfig.$inject = [];
	function alMorrisDonutConfig() {
		return {
			restrict: 'A',
			scope: {
				alMorrisDonutConfig: '='
			},
			link: function(scope, element, attributes, controller) {
				var config = angular.extend({}, scope.alMorrisDonutConfig, {element: element});
				var donut = new Morris.Donut(config);
			}
		};
	}

})(window.angular, window.jQuery);