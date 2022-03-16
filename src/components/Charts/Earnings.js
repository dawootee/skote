import React from "react"
import ApexCharts from 'react-apexcharts'

class Earnings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [67],
            options: {
                series: [
                    {
                        name: "series1",
                        data: [31, 40, 36, 51, 49, 72, 69, 56, 68, 82, 68, 76],
                    },
                ],
                chart: {
                    height: 320,
                    type: "line",
                    toolbar: !1,
                    dropShadow: {
                        enabled: !0,
                        color: "#000",
                        top: 18,
                        left: 7,
                        blur: 8,
                        opacity: 0.2,
                    },
                },
                dataLabels: {
                    enabled: !1,
                },
                colors: ["#556ee6"],

                stroke: {
                    curve: "smooth",
                    width: 3,
                },
            },


        };
    }



    render() {
        return (


            <div id="chart">
                <ApexCharts options={this.state.options} series={this.state.series} type="line" height={350} />
            </div>


        );
    }
}

export default Earnings;