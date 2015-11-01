// STACKED AREA

function Stacked() {
    $('#container2').highcharts({
        chart: {
            type: 'area'
        },
        title: {
            text: 'Review Volume Against Time'
        },
        subtitle:{
        },
        xAxis: {
            categories: ['2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'],
            tickmarkPlacement: 'off',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Percent'
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} reviews)<br/>',
            shared: true
        },
        plotOptions: {
            area: {
                stacking: 'percent',
                lineColor: '#ffffff',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#ffffff'
                }
            }
        },
        series: [{
            name: 'Canon',
            data: [249,868,1184,3571,4879,4601,5016,5355,14855,24315,23524, 22771]
        }, {
            name: 'Nikon',
            data: [33,129,725,1503,1536,1710,2331,2733,4763,16229,23860,24112]
        }, {
            name: 'Fuji',
            data: [13, 555,303,1154,1827,1385,989,1897,1030,714,4240,3338]
        }, {
            name: 'Sony',
            data: [23,89,319,501,1123,1967,5941,5925,5371,5199,9981,13662]
        }, {
            name: 'Pentax',
            data: [4,42,133,533,435,386,583,380,521,1549,2140,2788]
        }, {
            name: 'Olympus',
            data: [23,511,503,760,1145,1027,1112,1591,1966,2223,3506,2417]
        }, {
            name: 'Panasonic',
            data: [2,18,329,593,1017,1869,2923,1849,2369,2150,2099,1590]
        }]
    });
};

function Combine() {
    $('#container1').highcharts({
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: "Canon's Volume and Percentage of Positive Reviews"
        },
        xAxis: [{
            categories: ['2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015'],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}%',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: 'Percentage of Positive Reviews',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }, { // Secondary yAxis
            title: {
                text: 'Number of Reviews',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 120,
            verticalAlign: 'top',
            y: 100,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        series: [{
            name: 'Number of Reviews',
            type: 'column',
            yAxis: 1,
            data: [249,868,1184,3571,4879,4601,5016,5355,14855,24315,23524,22771],
            tooltip: {
            }

        }, {
            name: 'Percentage of Positive Reviews',
            type: 'spline',
            data: [33.7349,52.0737,55.5743,63.5676,65.7307,62.5082,62.1611,63.9402,58.3305,68.2747,74.6897,75.7103],
            tooltip: {
                valueSuffix: '°%'
            }
        }]
    });
};

function Line() {
    $('#container3').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Percentage of Positive Reviews Against Time'
        },
        xAxis: {
            categories: ['2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015'],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Percentage (%)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
           name: 'Canon',
            data: [33.7349,52.0737,55.5743,63.5676,65.7307,62.5082,62.1611,63.9402,58.3305,68.2747,74.6897,75.7103]
        }, {
            name: 'Nikon',
            data: [42.4242,31.0078,52,63.34,68.4245,63.5673,72.6298,63.0443,58.1566,66.4551,72.3067,77.5515]
        }, {
            name: 'Fuji',
            data: [53.8462,59.2793,60.396,62.3917,62.0142,61.7329,63.1951,61.8345,54.9515,53.6415,60.8726,69.4428]
        }, {
            name: 'Olympus',
            data: [52.1739,57.7299,59.841,63.2895,61.7467,56.962,54.2601,52.7341,53.764,52.0468,61.0953,65.6599]
        }, {
            name: 'Panasonic',
            data: [0,50,58.0547,59.6965,62.2419,58.1594,60.0068,58.8426,60.6163,63.814,65.4139,63.8645]
        }, {
            name: 'Pentax',
            data: [0,54.7619,52.6316,58.8785,57.4713,55.4404,58.319,61.8421,50.096,68.9477,66.9159,75.538]
        }, {
            name: 'Sony',
            data: [69.5652,55.0562,61.7555,60.2794,59.5726,60.1423,58.576,55.1055,54.4033,56.2224,61.3365,69.88]

        }]
    });
};

