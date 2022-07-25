import React from "react";

import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const ChartComponent = ({ data }) => {
  const chartConfigs = {
    type: "pie3d",
    width: "100%",
    height: 400,
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Languages",
        decimals: 0,
        theme: "fusion",
        pieRadius: "55%",
        paletteColors: "#f0db4f, #AACC80, #FF7711",
      },
      data,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
