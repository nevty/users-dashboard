import useComponentSize from '@rehooks/component-size';
import ReactECharts from 'echarts-for-react';
import { useEffect, useRef } from 'react';
import { User } from '@entities/user';
import { createTimeChartOption } from '../lib';

interface UserTransactionChart {
  data: [Date, number][];
  userData: User;
}

export const TimeChart = ({ data, userData }: UserTransactionChart) => {
  const chartRef = useRef<ReactECharts>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const containerSize = useComponentSize(containerRef);

  const option = createTimeChartOption({
    name: userData.email,
    title: 'Использование токенов',
    data,
  });

  useEffect(() => {
    const chart = chartRef.current && chartRef.current.getEchartsInstance();
    if (chart) {
      chart.resize();
    }
  }, [containerSize]);

  return (
    <div className="min-h-[350px] w-full" ref={containerRef}>
      <ReactECharts
        ref={chartRef}
        option={option}
        loadingOption={{
          text: 'loading',
          color: '#1C64F2',
          textColor: '#fff',
          maskColor: 'rgba(18, 24, 37, .7)',
        }}
        style={{
          width: '100%',
          height: '350px',
          minHeight: '300px',
          minWidth: '300px',
        }}
        theme="dark"
        opts={{ renderer: 'svg' }}
      />
    </div>
  );
};
