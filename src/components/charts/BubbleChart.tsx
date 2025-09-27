import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface BubbleChartProps {
  data: Array<Record<string, any>>;
  xKey: string;
  yKey: string;
  zKey: string;
  width?: number;
  height?: number;
  fill?: string;
}

const BubbleChart = ({ 
  data, 
  xKey, 
  yKey, 
  zKey,
  width = 400, 
  height = 300,
  fill = "#82ca9d"
}: BubbleChartProps) => {
  return (
    <ResponsiveContainer width={width} height={height}>
      <ScatterChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid />
        <XAxis type="number" dataKey={xKey} name={xKey} />
        <YAxis type="number" dataKey={yKey} name={yKey} />
        <ZAxis type="number" dataKey={zKey} range={[60, 400]} name={zKey} />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter data={data} fill={fill} />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default BubbleChart;