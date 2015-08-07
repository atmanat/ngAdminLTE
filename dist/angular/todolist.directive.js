(function(angular, $) {

	'use strict';

	angular
		.module('adminlte')
		.directive('alTodoList', alTodoList)
	;

	alTodoList.$inject = [];
	function alTodoList() {
		return {
			restrict: 'A',
			scope: {
				alTodoList: '='
			},
			controller: function() { ;; },
			link: function(scope, element, attributes, controllers) {

			}
		}
	}

})(window.angular, window.jQuery);