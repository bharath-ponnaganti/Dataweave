import { Treemap, ResponsiveContainer, Tooltip } from 'recharts';

interface TreemapProps {
  data: Array<Record<string, any>>;
  width?: number;
  height?: number;
  dataKey?: string;
}

const TreemapChart = ({ 
  data, 
  width = 400, 
  height = 300,
  dataKey = "size"
}: TreemapProps) => {
  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];

  const CustomizedContent = (props: any) => {
    const { root, depth, x, y, width, height, index, payload, colors } = props;

    if (!payload || !payload.name) return null;

    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill: COLORS[index % COLORS.length],
            stroke: '#fff',
            strokeWidth: 1,
            strokeOpacity: 0.8,
          }}
          className="hover:opacity-80 transition-opacity duration-200"
        />
        {width > 40 && height > 20 ? (
          <text 
            x={x + width / 2} 
            y={y + height / 2 + 4} 
            textAnchor="middle" 
            fill="#fff" 
            fontSize="11"
            fontWeight="500"
          >
            {payload.name}
          </text>
        ) : null}
        {width > 60 && height > 30 ? (
          <text 
            x={x + width / 2} 
            y={y + height / 2 + 16} 
            textAnchor="middle" 
            fill="#fff" 
            fontSize="9"
            opacity={0.8}
          >
            {payload.size}
          </text>
        ) : null}
      </g>
    );
  };

  return (
    <ResponsiveContainer width={width} height={height}>
      <Treemap
        data={data}
        dataKey={dataKey}
        aspectRatio={4 / 3}
        stroke="#fff"
        fill="#3b82f6"
        content={<CustomizedContent />}
      >
        <Tooltip 
          formatter={(value: any, name: string) => [value, 'Size']}
          labelFormatter={(label: string) => `Item: ${label}`}
        />
      </Treemap>
    </ResponsiveContainer>
  );
};

export default TreemapChart;