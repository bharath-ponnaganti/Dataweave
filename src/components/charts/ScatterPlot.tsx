import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ScatterPlotProps {
  data: Array<Record<string, any>>;
  xKey: string;
  yKey: string;
  width?: number;
  height?: number;
  fill?: string;
}

const ScatterPlot = ({ 
  data, 
  xKey, 
  yKey, 
  width = 400, 
  height = 300,
  fill = "#8884d8"
}: ScatterPlotProps) => {
  return (
    <ResponsiveContainer width={width} height={height}>
      <ScatterChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid />
        <XAxis type="number" dataKey={xKey} name={xKey} />
        <YAxis type="number" dataKey={yKey} name={yKey} />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter data={data} fill={fill} />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default ScatterPlot;