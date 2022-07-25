import React, { Component } from "react";

import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const chartConfigs = {
  type: "pie3d",
  width: 400,
  height: 400,
  dataFormat: "json",
  dataSource: {
    chart: {
      caption: "Countries With Most Oil Reserves [2017-18]",
      subCaption: "In MMbbl = One Million barrels",
      xAxisName: "Country",
      yAxisName: "Reserves (MMbbl)",
      numberSuffix: "K",
      theme: "fusion",
    },
    data: [
      {
        label: "HTML",
        value: "13",
      },
      {
        label: "CSS",
        value: "26",
      },
      {
        label: "Javascript",
        value: "80",
      },
    ],
  },
};

const ChartComponent1 = ({ data }) => {
  return <ReactFC {...chartConfigs} />;
};

export default ChartComponent1;
