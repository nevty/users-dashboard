import { EChartsOption } from 'echarts';

export const createTimeChartOption = ({
  name,
  title,
  data,
}: {
  name: string;
  title: string;
  data: [Date, number][];
}): EChartsOption => ({
  backgroundColor: '#121825',
  grid: {
    left: 0,
  },
  title: {
    text: title,
    padding: 0,
  },
  xAxis: {
    type: 'time',
    boundaryGap: [0, 0],
    axisLabel: {
      formatter: function (value: number) {
        return new Date(value).toLocaleDateString('ru-RU', {
          year: 'numeric',
          month: '2-digit',
        });
      },
    },
  },
  yAxis: {
    type: 'value',
    position: 'right',
    boundaryGap: [0, 0],
  },
  dataZoom: [
    {
      type: 'inside',
      start: 0,
      end: 20,
      labelFormatter(value) {
        return new Date(value).toLocaleDateString('ru-RU', {
          year: 'numeric',
          month: '2-digit',
        });
      },
    },
    {
      start: 0,
      end: 20,
      labelFormatter(value) {
        return new Date(value).toLocaleDateString('ru-RU', {
          year: 'numeric',
          month: '2-digit',
        });
      },
    },
  ],
  series: [
    {
      name,
      type: 'line',
      smooth: false,
      symbol: 'none',
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: '#1C64F2',
            },
            {
              offset: 1,
              color: '#1C64F233',
            },
          ],
        },
      },
      data,
    },
  ],
});
