import React from "react"
import ReactApexChart from 'react-apexcharts'

class StackedColumnChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'Series A',
                data: [44, 55, 41, 67, 22, 43, 36, 52, 24, 18, 36, 48]
            }, {
                name: 'Series B',
                data: [13, 23, 20, 8, 13, 27, 18, 22, 10, 16, 24, 22]
            }, {
                name: 'Series C',
                data: [11, 17, 15, 15, 21, 14, 11, 18, 17, 12, 20, 18]
            }],
            options: {
                chart: {
                    height: 360,
                    type: 'bar',
                    stacked: !0,
                    toolbar: {
                        show: !1
                    },
                    zoom: {
                        enabled: !0
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: 'bottom',
                            offsetX: -10,
                            offsetY: 0
                        }
                    }
                }],
                dataLabels: {
                    enabled: false
                },
                plotOptions: {
                    bar: {
                        horizontal: !1,
                        columnWidth: '15%',
                        endingShape: 'rounded'
                    },
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                },
                legend: {
                    position: 'bottom',
                },
                fill: {
                    opacity: 1
                }
            },


        };
    }



    render() {
        return (


            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
            </div>
        );
    }
}

export default StackedColumnChart;