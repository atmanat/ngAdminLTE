(function(angular, $) {

	'use strict';

	angular
		.module('demo')
		.config(config)
	;

	config.$inject = ['$stateProvider'];
	function config($stateProvider) {
		$stateProvider
			.state('home', {
				templateUrl: 'app/dashboard1/dashboard1.html',
				controller: HomeController,
				controllerAs: 'homeController'
			})
		;

		HomeController.$inject = [];
		function HomeController() {

			var _this = this;

			_this.daterangeConfig = {
				ranges: {
					'Today': [moment(), moment()],
					'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
					'Last 7 Days': [moment().subtract(6, 'days'), moment()],
					'Last 30 Days': [moment().subtract(29, 'days'), moment()],
					'This Month': [moment().startOf('month'), moment().endOf('month')],
					'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
				},
				startDate: moment().subtract(29, 'days'),
				endDate: moment()
			};

			_this.daterangeSelect = function(start, end) {
				alert("You chose: " + start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
			}

			_this.connectedSortableConfig = {
				placeholder: "sort-highlight",
				connectWith: ".connectedSortable",
				handle: ".box-header, .nav-tabs",
				forcePlaceholderSize: true,
				zIndex: 999999
			};

			_this.todoListSortableConfig = {
			    placeholder: "sort-highlight",
			    handle: ".handle",
			    forcePlaceholderSize: true,
			    zIndex: 999999
			};

			var visitorsData = {
				"US": 398, //USA
				"SA": 400, //Saudi Arabia
				"CA": 1000, //Canada
				"DE": 500, //Germany
				"FR": 760, //France
				"CN": 300, //China
				"AU": 700, //Australia
				"BR": 600, //Brazil
				"IN": 800, //India
				"GB": 320, //Great Britain
				"RU": 3000 //Russia
			};

			_this.vectorMapConfig = {
				map: 'world_mill_en',
				backgroundColor: "transparent",
				regionStyle: {
					initial: {
						fill: '#e4e4e4',
						"fill-opacity": 1,
						stroke: 'none',
						"stroke-width": 0,
						"stroke-opacity": 1
					}
				},
				series: {
					regions: [{
						values: visitorsData,
						scale: ["#92c1dc", "#ebf4f9"],
						normalizeFunction: 'polynomial'
					}]
				},
				onRegionLabelShow: function (e, el, code) {
					if (typeof visitorsData[code] != "undefined")
						el.html(el.html() + ': ' + visitorsData[code] + ' new visitors');
				}
			};

			_this.sparklineValues1 = [1000, 1200, 920, 927, 931, 1027, 819, 930, 1021];
			_this.sparklineValues2 = [515, 519, 520, 522, 652, 810, 370, 627, 319, 630, 921];
			_this.sparklineValues3 = [15, 19, 20, 22, 33, 27, 31, 27, 19, 30, 21];

			_this.sparklineConfig = {
			    type: 'line',
			    lineColor: '#92c1dc',
			    fillColor: "#ebf4f9",
			    height: '50',
			    width: '80'
			};

			$(".connectedSortable .box-header, .connectedSortable .nav-tabs-custom").css("cursor", "move");
		}
	}

})(window.angular, window.jQuery);