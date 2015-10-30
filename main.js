// RADAR
var radarData = {
	"canon":{
		data:[0, 9.74, 23.67,	1.53,	29.44,	28.49,	16.89,	15.5]
	},
	"nikon":{
		data:[0.11,	9.24,	25.63,	0,	30.56,	29.38,	19.11,	14.83]
	},
	"sony":{
		data:[0, 11.47,	20.29,	7.89,	25.34,	27.33,	19.03,	9.996]
	},
	"fuji":{
		data:[0,	11.9,	17.57,	4.74,	20.82,	27.76,	17.67,	1.25]
	},
	"olympus":{
		data:[0,	15.97,	27.88,	10.19,	27.15,	32.79,	23.59,	14.96]
	},
	"panasonic":{
		data:[0,	11.06,	17.01,	9.05,	21.22,	27.52,	19.74,	7.39]
	},
	"pentax":{
		data:[4.98,	5.73,	29.05,	0,	30.07,	32.53,	21.37,	23.74]
	},
	"others":{
		data:[10.23,	0,	28.41,	4.55,	37.5,	62.5,	50,	21.59]
	}
}

var radar = {
		labels: ["Build Quality", "Battery Life", "Handling Ergonomics", "Size", "User-Friendliness", "Price", "Weight", "Auto-Focus"],
		datasets: [
			{
				label: "Canon Dataset",
				fillColor: "rgba(220,220,220,0.2)",
				strokeColor: "rgba(220,220,220,1)",
				pointColor: "rgba(220,220,220,1)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(220,220,220,1)",
				data: radarData["canon"].data
			}
		]
	};

var myRadar = new Chart(document.getElementById("chart1").getContext("2d")).Radar(radar);

var nikonBut = document.getElementById('nikonRadar');

function nikonR(){
	for (var i = 0; i < 8;i++){ 
		myRadar.datasets[0].points[i].value = radarData["nikon"].data[i];
	}
	myRadar.update();
};

function canonR(){
	for (var i = 0; i < 8;i++){ 
		myRadar.datasets[0].points[i].value = radarData["canon"].data[i];
	}
	myRadar.update();
};

function fujiR(){
	for (var i = 0; i < 8;i++){ 
		myRadar.datasets[0].points[i].value = radarData["fuji"].data[i];
	}
	myRadar.update();
};

function sonyR(){
	for (var i = 0; i < 8;i++){ 
		myRadar.datasets[0].points[i].value = radarData["sony"].data[i];
	}
	myRadar.update();
};

function olympusR(){
	for (var i = 0; i < 8;i++){ 
		myRadar.datasets[0].points[i].value = radarData["olympus"].data[i];
	}
	myRadar.update();
};

function panasonicR(){
	for (var i = 0; i < 8;i++){ 
		myRadar.datasets[0].points[i].value = radarData["panasonic"].data[i];
	}
	myRadar.update();
};

function pentaxR(){
	for (var i = 0; i < 8;i++){ 
		myRadar.datasets[0].points[i].value = radarData["pentax"].data[i];
	}
	myRadar.update();
};

function othersR(){
	for (var i = 0; i < 8;i++){ 
		myRadar.datasets[0].points[i].value = radarData["others"].data[i];
	}
	myRadar.update();
};

// PIE
var pieData = [
				{
					value: 40.1,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "Canon"
				},
				{
					value: 18.3,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Nikon"
				},
				{
					value: 18.7,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "Sony"
				},
				{
					value: 8.3,
					color: "#949FB1",
					highlight: "#A8B3C5",
					label: "Fuji"
				},
				{
					value: 8.5,
					color: "#4D5360",
					highlight: "#616774",
					label: "Panasonic"
				},
				{
					value: 4.2,
					color: "#949FB1",
					highlight: "#A8B3C5",
					label: "Olympus"
				},
				{
					value: 0.07,
					color: "#4D5360",
					highlight: "#616774",
					label: "Sony"
				}

			];

var myPie = new Chart(document.getElementById("chart2").getContext("2d")).Pie(pieData);

function year1P(){
	console.log("HAHA")
	myPie.segments[0].value=20;
	myPie.segments[1].value=30;
	myPie.segments[2].value=40;
	myPie.segments[3].value=50;
	myPie.segments[4].value=60;
	myPie.update();
};

function year2P(){
	console.log("HAHA")
	myPie.segments[0].value=60;
	myPie.segments[1].value=120;
	myPie.segments[2].value=210;
	myPie.segments[3].value=224;
	myPie.segments[4].value=123;
	myPie.update();
};

// Line
var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
var lineChartData = {
	labels : ["2011","2012","2013","2014","2015"],
	datasets : [
		{
			label: "My First dataset",
			fillColor : "rgba(220,220,220,0.2)",
			strokeColor : "rgba(220,220,220,1)",
			pointColor : "rgba(220,220,220,1)",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(220,220,220,1)",
			data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
		}
	]
};

myLine = new Chart(document.getElementById("chart3").getContext("2d")).Line(lineChartData);

function canonL(){
	console.log("HAHA")
	myLine.datasets[0].points[0].value = 65;
	myLine.datasets[0].points[1].value = 59;
	myLine.datasets[0].points[2].value = 90;
	myLine.datasets[0].points[3].value = 81;
	myLine.datasets[0].points[4].value = 56;
	myLine.update();
};

function nikonL(){
	console.log("HAHA")
	myLine.datasets[0].points[0].value = randomScalingFactor();
	myLine.datasets[0].points[1].value = randomScalingFactor();
	myLine.datasets[0].points[2].value = randomScalingFactor();
	myLine.datasets[0].points[3].value = randomScalingFactor();
	myLine.datasets[0].points[4].value = randomScalingFactor();
	myLine.update();
};