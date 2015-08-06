(function(angular, $) {

	'use strict';

	angular
		.module('adminlte')
		.factory('alPushMenuService', alPushMenuServiceFactory)
	;

	alPushMenuServiceFactory.$inject = ['alOptions'];
	function alPushMenuServiceFactory(alOptions) {

		var _this = this;

		_this.activate = activate;
		_this.expandOnHover = expandOnHover;
		_this.expand = expand;
		_this.collapse = collapse;

		return {
			activate: _this.activate,
			expandOnHover: _this.expandOnHover,
			expand: _this.expand,
			collapse: _this.collapse
		}

		function activate(toggleBtn) {
			//Get the screen sizes
			var screenSizes = alOptions.screenSizes;

			//Enable sidebar toggle
			$(toggleBtn).on('click', function (e) {
				e.preventDefault();

				//Enable sidebar push menu
				if ($(window).width() > (screenSizes.sm - 1)) {
					if ($("body").hasClass('sidebar-collapse')) {
						$("body").removeClass('sidebar-collapse').trigger('expanded.pushMenu');
					} else {
						$("body").addClass('sidebar-collapse').trigger('collapsed.pushMenu');
					}
				}
				//Handle sidebar push menu for small screens
				else {
					if ($("body").hasClass('sidebar-open')) {
						$("body").removeClass('sidebar-open').removeClass('sidebar-collapse').trigger('collapsed.pushMenu');
					} else {
						$("body").addClass('sidebar-open').trigger('expanded.pushMenu');
					}
				}
			});

			$(".content-wrapper").click(function () {
				//Enable hide menu when clicking on the content-wrapper on small screens
				if ($(window).width() <= (screenSizes.sm - 1) && $("body").hasClass("sidebar-open")) {
					$("body").removeClass('sidebar-open');
				}
			});

			//Enable expand on hover for sidebar mini
			if (alOptions.sidebarExpandOnHover || ($('body').hasClass('fixed') && $('body').hasClass('sidebar-mini'))) {
				this.expandOnHover();
			}
		}

		function expandOnHover() {
			var _this = this;
			var screenWidth = alOptions.screenSizes.sm - 1;
			//Expand sidebar on hover
			$('.main-sidebar').hover(function () {
				if ($('body').hasClass('sidebar-mini') && $("body").hasClass('sidebar-collapse') && $(window).width() > screenWidth) {
					_this.expand();
				}
			}, function () {
				if ($('body').hasClass('sidebar-mini') && $('body').hasClass('sidebar-expanded-on-hover') && $(window).width() > screenWidth) {
					_this.collapse();
				}
			});
		}

		function expand() {
			$("body").removeClass('sidebar-collapse').addClass('sidebar-expanded-on-hover');
		}
		
		function collapse() {
			if ($('body').hasClass('sidebar-expanded-on-hover')) {
				$('body').removeClass('sidebar-expanded-on-hover').addClass('sidebar-collapse');
			}
		}
	}

})(window.angular, window.jQuery);