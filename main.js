// RADAR
var radarData = {
	"canon":{
		data:[0,	0.3988288874,	0.2279549719,	0,	0.3919413919,	0,	0,	0.3540296053]
	},
	"nikon":{
		data:[0.1951807229,	0.4580351334,	0.4287054409,	0.03778096604,	0.601953602,	0.1019371229,	0.1484145145,	0.421875]
	},
	"sony":{
		data:[0.1413654618,	0.5123617437,	0.1519699812,	0.3883309421,	0.2490842491,	0.01905366783,	0.1274926447,	0.1986019737]
	},
	"fuji":{
		data:[0.4530120482,	0.6525699414,	0.2063789869,	0.4232424677,	0.21001221	,0.1559225151,	0.2098725074,	0]
	},
	"olympus":{
		data:[0.983935743,	1,	1,	1,	1,	0.525563671,	0.6194834913,	0.8355263158]
	},
	"panasonic":{
		data:[0.1445783133,	0.500325309,	0,	0.4457197513,	0,	0.02635757383,	0.1520104609,	0.09457236842]
	},
	"pentax":{
		data:[1,	0.5113858165,	0.8306754221,	0.2840746055,	0.8864468864	,0.3655128612,	0.3906505394,	1]
	},
	"others":{
		data:[0.6192771084,	0,	0.3320825516,	0.02391200383,	0.7301587302,	1,	1,	0.5008223684]
	}
}

var radar = {
		labels: ["Build Quality", "Weight", "Auto-Focus", "Size", "Battery Life", "Handling Ergonomics",  "User-Friendliness", "Price"  ],
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