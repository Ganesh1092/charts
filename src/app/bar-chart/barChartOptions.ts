import { Options } from "highcharts";

export const barChartOptions: Options = {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Column Chart',
    },
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    yAxis: {
      min: 0,
      title: undefined,
    },
    xAxis: {
      type: 'category',
    },
    tooltip: {
      headerFormat: `<div>Date: {point.key}</div>`,
      pointFormat: `<div>{series.name}: {point.y}</div>`,
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
        },
      },
    },
    series: [{
      name: 'Amount'
    }],
  } as any


