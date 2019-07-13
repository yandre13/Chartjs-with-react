const optionsLine = {
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
    padding: { left: 5, right: 35, top: 15, bottom: 15 }
  }
};

export {optionsLine};
