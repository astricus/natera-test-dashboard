import React from 'react';
import Chart from 'react-apexcharts';

const chartOptions = {
  options: {
    chart: {
      toolbar: {
        show: false,
      },
      parentHeightOffset: 0,
      fontFamily: 'Poppins, sans-serif',
    },
    stroke: {
      width: 2,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      tickAmount: 4,
      min: 0,
      max: 200,
      labels: {
        align: 'left',
        style: {
          fontSize: '12px',
        },
      },
    },
    labels: [
      '1 Dec 2019',
      '05 Dec 2019',
      '07 Dec 2019',
      '10 Dec 2019',
      '13 Dec 2019',
      '16 Dec 2019',
      '19 Dec 2019',
      '22 Dec 2019',
      '25 Dec 2019',
      '28 Dec 2019',
    ],
    grid: {
      column: {
        opacity: 0.1,
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
  },
  series: [
    {
      name: 'Earnings',
      data: [40, 90, 100, 95, 160, 90, 60, 120, 150, 140],
    },
  ],
};

const Area = () => (
  <div className="area">
    <Chart
      options={chartOptions.options}
      series={chartOptions.series}
      type="area"
      width="100%"
      height="212"
    />
  </div>
);

export default Area;
