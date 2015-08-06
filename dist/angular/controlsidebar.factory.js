(function() {

	'use strict';

	angular
		.module('adminlte')
		.factory('alControlSidebarService', alControlSidebarServiceFactory)
	;

	alControlSidebarServiceFactory.$inject = ['alOptions'];
	function alControlSidebarServiceFactory(alOptions) {

		var _this = this;

		_this.activate = activate;
		_this.open = open;
		_this.close = close;
		_this._fix = _fix;
		_this._fixForFixed = _fixForFixed;
		_this._fixForContent = _fixForContent;

		return {
			activate: _this.activate,
			open: _this.open,
			close: _this.close,
			_fix: _this._fix,
			_fixForFixed: _this._fixForFixed,
			_fixForContent: _this._fixForContent
		};

		function activate(sidebar, btn) {
			//Get the object
			var _this = this;
			//Update options
			var o = alOptions.controlSidebarOptions;

			//Listen to the click event
			btn.on('click', function (e) {
				e.preventDefault();
				//If the sidebar is not open
				if (!sidebar.hasClass('control-sidebar-open') && !$('body').hasClass('control-sidebar-open')) {
					//Open the sidebar
					_this.open(sidebar, o.slide);
				} else {
					_this.close(sidebar, o.slide);
				}
			});

			//If the body has a boxed layout, fix the sidebar bg position
			var bg = $(".control-sidebar-bg");
			_this._fix(bg);

			$(window).resize(function () {
				_this._fix(bg);
			});

			//If the body has a fixed layout, make the control sidebar fixed      
			if ($('body').hasClass('fixed')) {
				_this._fixForFixed(sidebar);
			} else {
				//If the content height is less than the sidebar's height, force max height
				if ($('.content-wrapper, .right-side').height() < sidebar.height()) {
					_this._fixForContent(sidebar);
				}
			}
		}

		function open(sidebar, slide) {
			var _this = this;
			//Slide over content
			if (slide) {
				sidebar.addClass('control-sidebar-open');
			} else {
				//Push the content by adding the open class to the body instead 
				//of the sidebar itself
				$('body').addClass('control-sidebar-open');
			}
		}

		function close(sidebar, slide) {
			if (slide) {
				sidebar.removeClass('control-sidebar-open');
			} else {
				$('body').removeClass('control-sidebar-open');
			}
		}

		function _fix(sidebar) {
			var _this = this;
			if ($("body").hasClass('layout-boxed')) {
				sidebar.css('position', 'absolute');
				sidebar.height($(".wrapper").height());
			} else {
				sidebar.css({
					'position': 'fixed',
					'height': 'auto'
				});
			}
		}

		function _fixForFixed(sidebar) {
			sidebar.css({
				'position': 'fixed',
				'max-height': '100%',
				'overflow': 'auto',
				'padding-bottom': '50px'
			});
		}

		function _fixForContent(sidebar) {
			$(".content-wrapper, .right-side").css('min-height', sidebar.height());
		}
	}

})(window.angular, window.jQuery);