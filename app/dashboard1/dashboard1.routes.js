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

			_this.chatSlimscrollConfig = {
				height: '250px'
			};

			_this.revenueChartConfig = {
				resize: true,
				data: [
					{y: '2011 Q1', item1: 2666, item2: 2666},
					{y: '2011 Q2', item1: 2778, item2: 2294},
					{y: '2011 Q3', item1: 4912, item2: 1969},
					{y: '2011 Q4', item1: 3767, item2: 3597},
					{y: '2012 Q1', item1: 6810, item2: 1914},
					{y: '2012 Q2', item1: 5670, item2: 4293},
					{y: '2012 Q3', item1: 4820, item2: 3795},
					{y: '2012 Q4', item1: 15073, item2: 5967},
					{y: '2013 Q1', item1: 10687, item2: 4460},
					{y: '2013 Q2', item1: 8432, item2: 5713}
				],
				xkey: 'y',
				ykeys: ['item1', 'item2'],
				labels: ['Item 1', 'Item 2'],
				lineColors: ['#a0d0e0', '#3c8dbc'],
				hideHover: 'auto'
			};

			_this.lineChartConfig = {
				resize: true,
				data: [
					{y: '2011 Q1', item1: 2666},
					{y: '2011 Q2', item1: 2778},
					{y: '2011 Q3', item1: 4912},
					{y: '2011 Q4', item1: 3767},
					{y: '2012 Q1', item1: 6810},
					{y: '2012 Q2', item1: 5670},
					{y: '2012 Q3', item1: 4820},
					{y: '2012 Q4', item1: 15073},
					{y: '2013 Q1', item1: 10687},
					{y: '2013 Q2', item1: 8432}
				],
				xkey: 'y',
				ykeys: ['item1'],
				labels: ['Item 1'],
				lineColors: ['#efefef'],
				lineWidth: 2,
				hideHover: 'auto',
				gridTextColor: "#fff",
				gridStrokeWidth: 0.4,
				pointSize: 4,
				pointStrokeColors: ["#efefef"],
				gridLineColor: "#efefef",
				gridTextFamily: "Open Sans",
				gridTextSize: 10
			};

			_this.salesChartConfig = {
				resize: true,
				colors: ["#3c8dbc", "#f56954", "#00a65a"],
				data: [
					{label: "Download Sales", value: 12},
					{label: "In-Store Sales", value: 30},
					{label: "Mail-Order Sales", value: 20}
				],
				hideHover: 'auto'
			};

			$(".connectedSortable .box-header, .connectedSortable .nav-tabs-custom").css("cursor", "move");
		}
	}

})(window.angular, window.jQuery);