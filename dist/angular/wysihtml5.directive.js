(function(angular, $) {

	'use strict';

	angular
		.module('adminlte')
		.directive('alHtmlEditor', alHtmlEditor)
	;

	alHtmlEditor.$inject = [];
	function alHtmlEditor() {
		return {
			restrict: 'A',
			link: function(scope, element, attributes, controller) {
				element.wysihtml5();
			}
		}
	}

})(window.angular, window.jQuery);