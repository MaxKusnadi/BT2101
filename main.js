// RADAR

var radar = {
		labels: ["Price", "Size", "Lens", "AAAAAAA", "BBBBBB"],
		datasets: [
			{
				label: "Canon Dataset",
				fillColor: "rgba(220,220,220,0.2)",
				strokeColor: "rgba(220,220,220,1)",
				pointColor: "rgba(220,220,220,1)",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(220,220,220,1)",
				data: [65,59,90,81,56]
			}
		]
	};

var myRadar = new Chart(document.getElementById("chart1").getContext("2d")).Radar(radar);

var nikonBut = document.getElementById('nikonRadar');

function nikonR(){
	console.log("HAHA")
	myRadar.datasets[0].points[0].value = 30;
	myRadar.datasets[0].points[1].value = 10;
	myRadar.datasets[0].points[2].value = 70;
	myRadar.datasets[0].points[3].value = 20;
	myRadar.datasets[0].points[4].value = 80;
	myRadar.update();
};

function canonR(){
	console.log("HAHA")
	myRadar.datasets[0].points[0].value = 65;
	myRadar.datasets[0].points[1].value = 59;
	myRadar.datasets[0].points[2].value = 90;
	myRadar.datasets[0].points[3].value = 81;
	myRadar.datasets[0].points[4].value = 56;
	myRadar.update();
};

// PIE
var pieData = [
				{
					value: 300,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "Nikon"
				},
				{
					value: 50,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "Canon"
				},
				{
					value: 100,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "Sony"
				},
				{
					value: 40,
					color: "#949FB1",
					highlight: "#A8B3C5",
					label: "Theodore"
				},
				{
					value: 120,
					color: "#4D5360",
					highlight: "#616774",
					label: "Chan Khan"
				}

			];

var myPie = new Chart(document.getElementById("chart2").getContext("2d")).Pie(pieData);

