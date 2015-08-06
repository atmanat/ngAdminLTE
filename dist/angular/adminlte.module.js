(function(angular, $) {

	'use strict';

	angular
		.module('adminlte', [])
	;

	angular
		.module('adminlte')
		.run(run)
	;
	
	run.$inject = ['altLayout', 'altControlSidebar', 'altPushMenu'];
	function run(altLayout, altControlSidebar, altPushMenu) {
		//Easy access to options
		var o = $.AdminLTE.options;

		//Activate the layout maker
		altLayout.activate();

		//Enable control sidebar
		if (o.enableControlSidebar) {
			altControlSidebar.activate();
		}

		//Activate sidebar push menu
		if (o.sidebarPushMenu) {
			altPushMenu.activate(o.sidebarToggleSelector);
		}

		//Activate Bootstrap tooltip
		if (o.enableBSToppltip) {
			$('body').tooltip({
				selector: o.BSTooltipSelector
			});
		}

	}

})(window.angular, window.jQuery);