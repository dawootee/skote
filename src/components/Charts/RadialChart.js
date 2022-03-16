import React from "react"
import ApexCharts from 'react-apexcharts'

class RadialChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [67],
            options: {
                chart: {
                    height: 350,
                    type: 'radialBar',
                    offsetY: -10
                },
                plotOptions: {
                    radialBar: {
                        startAngle: -135,
                        endAngle: 135,
                        dataLabels: {
                            name: {
                                fontSize: "13px",
                                color: undefined,
                                offsetY: 60,
                            },
                            value: {
                                offsetY: 22,
                                fontSize: "16px",
                                color: undefined,
                                formatter: function (val) {
                                    return val + "%";
                                },
                            },
                        },
                    },
                },
                colors: ["#556ee6"],
                fill: {
                    type: "gradient",
                    gradient: {
                        shade: "dark",
                        shadeIntensity: 0.15,
                        inverseColors: false,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 50, 65, 91],
                    },
                },
                stroke: {
                    dashArray: 4,
                },
                labels: ['Series A'],
            },


        };
    }



    render() {
        return (


            <div id="chart">
                <ApexCharts options={this.state.options} series={this.state.series} type="radialBar" height={200} />
            </div>


        );
    }
}

export default RadialChart;