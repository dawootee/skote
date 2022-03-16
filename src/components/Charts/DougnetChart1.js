import React from "react"
import ApexCharts from 'react-apexcharts'

class DougnetChart1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: props.data,
            options: {
                chart: {
                    width: 150,
                    type: 'donut',
                },
                dataLabels: {
                    enabled: false
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 80
                        },
                        legend: {
                            show: false
                        }
                    }
                }],
                legend: {
                    show: false
                }
            },


        };
    }





    render() {
        return (


            <div>
                <div class="chart-wrap">
                    <div id="chart">
                        <ApexCharts options={this.state.options} series={this.state.series} type="donut" width={100} />
                    </div>
                </div>


            </div>
        );
    }
}

export default DougnetChart1;