import React from 'react';
import { Line } from 'react-chartjs-2';
const chartColor = '#FFFFFF';

const data = (canvas) => {
    var ctx = canvas.getContext("2d");

    var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
    gradientStroke.addColorStop(0, '#80b6f4');
    gradientStroke.addColorStop(1, chartColor);

    var gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
    gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
    gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");
    return {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
            label: "Active Users",
            borderColor: "#f96332",
            pointBorderColor: "#FFF",
            pointBackgroundColor: "#f91122",
            pointBorderWidth: 2,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 1,
            pointRadius: 4,
            fill: true,
            backgroundColor: gradientFill,
            borderWidth: 2,
            data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]
        },
        {
         label: "Inactive Users",
         borderColor: "#f96332",
         pointBorderColor: "#FFF",
         pointBackgroundColor: "#f91122",
         pointBorderWidth: 2,
         pointHoverRadius: 4,
         pointHoverBorderWidth: 1,
         pointRadius: 4,
         fill: true,
         backgroundColor: gradientFill,
         borderWidth: 2,
         data: [300, 280, 530, 150, 330, 253, 580, 134, 368, 510, 500, 230]
     }]
    }
};
const options = {
    maintainAspectRatio: false,
    legend: {
        display: true
    },
    tooltips: {
        bodySpacing: 4,
        mode:"nearest",
        intersect: 0,
        position:"nearest",
        xPadding:10,
        yPadding:10,
        caretPadding:10
    },
    responsive: 1,
    scales: {
        yAxes: [{
            display:0,
            ticks: {
                display: false
            },
            gridLines: {
                zeroLineColor: "transparent",
                drawTicks: false,
                display: false,
                drawBorder: false
            }
        }],
        xAxes: [{
            display:0,
            ticks: {
                display: false
            },
            gridLines: {
                zeroLineColor: "transparent",
                drawTicks: false,
                display: false,
                drawBorder: false
            }
        }]
    },
    layout:{
        padding:{left:0,right:0,top:15,bottom:15}
    }
};

export default class Example extends React.Component{
    render(){
        return(
         <div style={{backgroundColor: '#f2f2f2', width:800}}>
          <Line data={data} options={options} />
         </div>
        );
    }
}