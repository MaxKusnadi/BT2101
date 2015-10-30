// RADAR
var radarData = {
	"canon":{
		data:[16.15	,25.89,		39.82	,		17.68,	45.59,		44.64,		33.04,		31.65]
	},
	"nikon":{
		data:[18.58,	27.71,		44.1,		18.47,		49.03,			47.85,		37.58,		33.3]
	},
	"sony":{
		data:[17.91,	29.38,		38.2,		25.8,		43.25,			45.24,		36.94,		27.87]
	},
	"fuji":{
		data:[21.79,	33.69,		39.36,		26.53,		42.61,			49.55,		39.46,		23.04]
	},
	"olympus":{
		data:[28.4,	44.37,		56.28,		38.59,		55.55,			61.19,		51.99,		43.36]
	},
	"panasonic":{
		data:[17.95,	29.01,		34.96,		27,		39.17,			45.47,		37.69,		25.34]
	},
	"pentax":{
		data:[28.6,	29.35,		52.67,		23.62,		53.69,			56.15,		44.99	,	47.36]
	},
	"others":{
		data:[23.86	,13.63,		42.04,		18.18,		51.13,			76.13	,	63.63,		35.22]
	}
}

var radarDataPos = {
	"canon":{
		data:[0.08086633346,	0.1898886548,	0.3933970997,	0.4858858859,		1,	0.9488247545,	0.3536243492]
	},
	"nikon":{
		data:[0.003203895937,	0.08516400843,	0.3835236038,	0.4618618619,		0.9412288513,	0.8774174353,	0.1149379255]
	},
	"sony":{
		data:[0.08778674869,	0.3114655432,	0.1761801913,	0.1447447447	,	0.5227070347,	0.5739363285,	0.1982378855]
	},
	"fuji":{
		data:[0.3930539536,	0.01655130906,	0.1379203949,	0.01501501502,		0.4016028495,	0.7566200536,	0.01001201442]
	},
	"olympus":{
		data:[0.1605792644,	0.139331929,	0.007713668621,	0.06666666667,		0.02226179875,	0.4745611425,	0.133360032]
	},
	"panasonic":{
		data:[0.2279892349,	0.3644297322,	0.1397716754,	0.1987987988,		0.624220837,	0.7221065159,	0.2390869043]
	},
	"pentax":{
		data:[0.28078944,	0.007523322299,	0.3619253317,	0.2612612613,		0.7951914515,	1,	0.498598318]
	},
	"others":{
		data:[1,	1,	1,	1,		0.06322350846,	0.007438262422,	1]
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

var radarPos = {
		labels: ["Build Quality", "Weight", "Auto-Focus", "Battery Life", "Handling Ergonomics",  "User-Friendliness", "Price"  ],
		datasets: [
			{
				label: "Canon Dataset",
				fillColor: "rgba(220,220,220,0.2)",
				strokeColor: "rgba(220,220,220,1)",
				pointColor: "rgba(220,220,220,1)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(220,220,220,1)",
				data: radarDataPos["canon"].data
			}
		]
	};

var myRadar = new Chart(document.getElementById("chart1").getContext("2d")).Radar(radar);

var myRadarPos = new Chart(document.getElementById("chart1pos").getContext("2d")).Radar(radarPos);

function nikonR(){
	for (var i = 0; i < 8;i++){ 
		myRadar.datasets[0].points[i].value = radarData["nikon"].data[i];
		if(i<7){
			myRadarPos.datasets[0].points[i].value = radarDataPos["nikon"].data[i]
		}
	}
	myRadar.update();
	myRadarPos.update();
};

function canonR(){
	for (var i = 0; i < 8;i++){ 
		myRadar.datasets[0].points[i].value = radarData["canon"].data[i];
		if(i<7){
			myRadarPos.datasets[0].points[i].value = radarDataPos["canon"].data[i]
		}
	}
	myRadar.update();
	myRadarPos.update();
};

function fujiR(){
	for (var i = 0; i < 8;i++){ 
		myRadar.datasets[0].points[i].value = radarData["fuji"].data[i];
		if(i<7){
			myRadarPos.datasets[0].points[i].value = radarDataPos["fuji"].data[i]
		}
	}
	myRadar.update();
	myRadarPos.update();
};

function sonyR(){
	for (var i = 0; i < 8;i++){ 
		myRadar.datasets[0].points[i].value = radarData["sony"].data[i];
		if(i<7){
			myRadarPos.datasets[0].points[i].value = radarDataPos["sony"].data[i]
		}
	}
	myRadar.update();
	myRadarPos.update();
};

function olympusR(){
	for (var i = 0; i < 8;i++){ 
		myRadar.datasets[0].points[i].value = radarData["olympus"].data[i];
		if(i<7){
			myRadarPos.datasets[0].points[i].value = radarDataPos["olympus"].data[i]
		}
	}
	myRadar.update();
	myRadarPos.update();
};

function panasonicR(){
	for (var i = 0; i < 8;i++){ 
		myRadar.datasets[0].points[i].value = radarData["panasonic"].data[i];
		if(i<7){
			myRadarPos.datasets[0].points[i].value = radarDataPos["panasonic"].data[i]
		}
	}
	myRadar.update();
	myRadarPos.update();
};

function pentaxR(){
	for (var i = 0; i < 8;i++){ 
		myRadar.datasets[0].points[i].value = radarData["pentax"].data[i];
		if(i<7){
			myRadarPos.datasets[0].points[i].value = radarDataPos["pentax"].data[i]
		}
	}
	myRadar.update();
	myRadarPos.update();
};

function othersR(){
	for (var i = 0; i < 8;i++){ 
		myRadar.datasets[0].points[i].value = radarData["others"].data[i];
		if(i<7){
			myRadarPos.datasets[0].points[i].value = radarDataPos["others"].data[i]
		}
	}
	myRadar.update();
	myRadarPos.update();
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