(function(angular, $) {

	'use strict';

	angular
		.module('adminlte', ['ui.router'])
	;

	angular
		.module('adminlte')
		.run(run)
		.config(config)
		.controller('DemoController', DemoController)
	;
	
	run.$inject = ['alOptions', 'altLayout'];
	function run(alOptions, altLayout) {
		//Easy access to options
		var o = alOptions;

		//Activate the layout maker
		altLayout.activate();

		//Activate Bootstrap tooltip
		if (o.enableBSToppltip) {
			$('body').tooltip({
				selector: o.BSTooltipSelector
			});
		}

	}

	config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function config($stateProvider, $urlRouterProvider) {
		$urlRouterProvider
			.otherwise(function($injector, $location) {
				var $state = $injector.get('$state');
				$state.go('home');
			})
		;
		$stateProvider
			.state('secured', {
				abstract: true,
				template: '<ui-view/>'
			})
		;
	}

	DemoController.$inject = [];
	function DemoController() {

	}

})(window.angular, window.jQuery);