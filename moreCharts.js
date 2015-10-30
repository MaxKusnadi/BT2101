// STACKED AREA

function Stacked() {
    $('#container').highcharts({
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