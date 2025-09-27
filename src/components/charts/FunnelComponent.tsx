import { FunnelChart, Funnel, LabelList, ResponsiveContainer, Tooltip } from 'recharts';

interface FunnelProps {
  data: Array<Record<string, any>>;
  width?: number;
  height?: number;
  dataKey?: string;
}

const FunnelComponent = ({ 
  data, 
  width = 400, 
  height = 300,
  dataKey = "value"
}: FunnelProps) => {
  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];

  const CustomizedLabel = (props: any) => {
    const { x, y, width, height, value, payload } = props;
    
    if (!value || width < 50) return null;
    
    return (
      <text 
        x={x + width / 2} 
        y={y + height / 2} 
        textAnchor="middle" 
        fill="#fff" 
        fontSize="12"
        fontWeight="600"
      >
        {value}
      </text>
    );
  };

  return (
    <ResponsiveContainer width={width} height={height}>
      <FunnelChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Tooltip 
          formatter={(value: any, name: string) => [value, 'Count']}
          labelFormatter={(label: string) => `Stage: ${label}`}
        />
        <Funnel
          dataKey={dataKey}
          data={data}
          isAnimationActive={true}
          animationDuration={800}
        >
          <LabelList 
            content={<CustomizedLabel />}
            position="center" 
            fill="#fff" 
            stroke="none" 
          />
        </Funnel>
      </FunnelChart>
    </ResponsiveContainer>
  );
};

export default FunnelComponent;