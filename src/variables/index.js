const data1 = {
 data: canvas => {
   let ctx = canvas.getContext("2d");

   let gradientStroke1 = ctx.createLinearGradient(1, 230, 0, 50),gradientStroke2 = ctx.createLinearGradient(1, 210, 0, 50);

   gradientStroke1.addColorStop(1, "rgba(29,140,248,0.2)");
   gradientStroke1.addColorStop(1, "rgba(29,140,248,0.0)");
   gradientStroke1.addColorStop(0, "rgba(29,140,248,0)");

   gradientStroke2.addColorStop(1, "rgba(122,255,51,0.1)");
   gradientStroke2.addColorStop(1, "rgba(122,255, 51,0.0)");
   gradientStroke2.addColorStop(0, "rgba(122,255,51,0)");

   return {
     labels: ["1", "2", "3", "4", "5", "6"],
     datasets: [
       {
         label: "Videos",
         borderColor: "hsl(150,40%,20%)",
         pointBorderColor: "hsl(150,40%,40%)",
         pointBackgroundColor: "hsl(150,40%,20%)",
         pointBorderWidth: 2,
         pointHoverRadius: 4,
         pointHoverBorderWidth: 1,
         backgroundColor: gradientStroke2,
         data: [24, 25, 1, 10, 32, 2, 12],
         borderWidth: 2
       },
       {
         label: "Snaps",
         borderColor: "hsl(220,60%,20%)", // line -------- and []
         pointBorderColor: "hsl(220,60%,50%)", // (.)
         pointBackgroundColor: "hsl(220,60%,20%)", //point (.)
         pointBorderWidth: 2,
         pointHoverRadius: 4,
         pointHoverBorderWidth: 1,
         backgroundColor: gradientStroke1,
         data: [14, 15, 21, 0, 12, 24, 22],
         borderWidth: 2
       }
     ]
   };
 }
};

const options = {
  maintainAspectRatio: false,
  legend: {
    display: true
  },
  tooltips: {
    bodySpacing: 4,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
    xPadding: 10,
    yPadding: 10,
    caretPadding: 10
  },
  responsive: 1,
  scales: {
    yAxes: [
      {
        display: 1,
        ticks: {
          padding: 20,
          fontColor: "#9a9a9a"
        },
        gridLines: {
          color: "rgba(29,140,248,0.0)",
          zeroLineColor: "transparent",
          drawTicks: false,
          display: false,
          drawBorder: false
        }
      }
    ],
    xAxes: [
      {
        display: 1,
        ticks: {
          padding: 20,
          fontColor: "#9a9a9a"
        },
        gridLines: {
          drawBorder: false,
          color: "hsl(230,35%,50%)",
          zeroLineColor: "transparent"
        }
      }
    ]
  },
  layout: {
    padding: { left: 0, right: 0, top: 15, bottom: 15 }
  }
};

export { data1, options };
