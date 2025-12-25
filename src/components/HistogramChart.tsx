import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const LearningProgressChart = () => {
  const options = {
    chart: {
      type: "column",
      backgroundColor: "transparent",
      height: 280,
      spacing: [0, 0, 0, 0],
    },

    title: { text: null },

    xAxis: {
      visible: false,
    },

    yAxis: {
      visible: false,
      maxPadding: 0,
    },

    legend: { enabled: false },
    tooltip: { enabled: false },

    plotOptions: {
      column: {
        stacking: "normal",
        pointWidth: 40,          // 👈 bar width like Figma
        groupPadding: 0.15,      // 👈 space between bars
        borderWidth: 0,
      },
      series: {
        borderRadiusTopLeft: 14,  // 👈 rounded top only
        borderRadiusTopRight: 14,
      },
    },

    series: [
      {
        data: [4, 6, 6, 7, 6],
        color: "#F3ECFF", // top light layer
      },
      {
        data: [2, 4, 8, 10, 8],
        color: "#E4CFFF",
      },
      {
        data: [8, 10  , 12, 14, 12],
        color: "#CDA3FF",
      },
      {
        data: [10, 12, 13, 20, 18 ],
        color: "#8B2CF5", // bottom dark layer
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default LearningProgressChart;
