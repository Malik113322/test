// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";

// // Import histogram module
// import HistogramModule from "highcharts/modules/histogram-bellcurve";


// // Initialize the module
// HistogramModule(Highcharts); // ✅ This works

// const HistogramChart = () => {
//   // Sample data
//   const data = [1, 2, 2, 3, 3, 3, 4, 4, 5];

//   const options = {
//     title: {
//       text: "Histogram Example",
//     },
//     xAxis: [
//       {
//         title: { text: "Data" },
//       },
//       {
//         title: { text: "Histogram" },
//         alignTicks: false,
//       },
//     ],
//     yAxis: [
//       {
//         title: { text: "Frequency" },
//       },
//     ],
//     series: [
//       {
//         name: "Data",
//         type: "scatter",
//         data: data,
//         visible: false, // hide scatter points if you want only histogram
//       },
//       {
//         name: "Histogram",
//         type: "histogram",
//         baseSeries: 0, // links to the scatter series index
//         zIndex: -1,
//       },
//     ],
//   };

//   return <HighchartsReact highcharts={Highcharts} options={options} />;
// };

// export default HistogramChart;



import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const LearningProgressChart = () => {
  const options = {
    chart: {
      type: "column",
      backgroundColor: "transparent",
      height: 250,
    },

    title: {
      text: null,
    },

    xAxis: {
      visible: false,
    },

    yAxis: {
      visible: false,
    },

    legend: {
      enabled: false,
    },

    tooltip: {
      enabled: false,
    },

    plotOptions: {
      column: {
        stacking: "normal",
        borderRadius: 12,
        pointPadding: 0.2,
        groupPadding: 0.1,
      },
    },

    series: [
      {
        data: [20, 30, 40, 50, 45],
        color: "#8B3DFF",
      },
      {
        data: [15, 20, 25, 30, 28],
        color: "#B88CFF",
      },
      {
        data: [10, 15, 20, 25, 22],
        color: "#D8BFFF",
      },
      {
        data: [5, 10, 15, 20, 18],
        color: "#EFE6FF",
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default LearningProgressChart;
