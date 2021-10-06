import React from 'react'
import ReactApexChart from 'react-apexcharts'

class ApexChart extends React.Component {
    constructor(props) {
        super(props);
     
        this.state = {

            series: [{
              data: [96]
            }],
            
            options: {
              chart: {
                id: 'realtime',
                height: 200,
                type: 'line',
                animations: {
                  enabled: true,
                  easing: 'linear',
                  dynamicAnimation: {
                    speed: 1000
                  }
                },
                toolbar: {
                  show: true
                },
                zoom: {
                  enabled: false
                }
              },
              dataLabels: {
                enabled: true
              },
              stroke: {
                curve: 'smooth'
              },
              markers: {
                size: 0
              },
              xaxis: {
                type: 'datetime',
                labels: {
                    show: false,
                    datetimeFormatter: {
                        year: 'yyyy',
                        month: "MMM 'yy",
                        day: 'dd MMM',
                        hour: 'HH:mm',
                    },
                }
              },
              yaxis: {
                tickAmount: 3,
                max: 250,
                min: 0
              },
              legend: {
                show: false
              },
            },
          
          
          };

      

    }

   

    componentDidMount() {      

            //  getNewSeries(this.lastDate, {
            //     min: 10,
            //     max: 250
            // })

    
            // ApexCharts.exec('realtime', 'updateSeries', [{
            //     data: [
            //         1,2,3,4,5,6
            //     ]
            // }])

    }


    render() {
        return (
            <div id="chart">
               <ReactApexChart options={this.state.options} series={this.state.series} type="line" height="100%" /> 
            </div>
        );
    }
}

export default ApexChart;