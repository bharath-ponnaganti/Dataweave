interface PyramidChartProps {
  data: Array<Record<string, any>>;
  width?: number;
  height?: number;
}

const PyramidChart = ({ 
  data, 
  width = 400, 
  height = 300
}: PyramidChartProps) => {
  const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];
  const maxValue = Math.max(...data.map(d => d.value));
  
  return (
    <div className="relative" style={{ width, height }}>
      <svg width="100%" height="100%" viewBox="0 0 400 300">
        {data.map((item, index) => {
          const normalizedValue = item.value / maxValue;
          const levelHeight = height / data.length;
          const levelWidth = normalizedValue * width * 0.8;
          const centerX = width / 2;
          const y = index * levelHeight;
          
          // Calculate pyramid shape points
          const leftX = centerX - levelWidth / 2;
          const rightX = centerX + levelWidth / 2;
          const nextLevelWidth = index < data.length - 1 
            ? (data[index + 1].value / maxValue) * width * 0.8 
            : 0;
          const nextLeftX = centerX - nextLevelWidth / 2;
          const nextRightX = centerX + nextLevelWidth / 2;
          
          return (
            <g key={item.name}>
              {/* Pyramid level */}
              <polygon
                points={`
                  ${leftX},${y + levelHeight} 
                  ${rightX},${y + levelHeight} 
                  ${nextRightX},${y} 
                  ${nextLeftX},${y}
                `}
                fill={colors[index % colors.length]}
                opacity={0.8}
                stroke="#fff"
                strokeWidth={2}
                className="hover:opacity-100 transition-opacity duration-200"
              />
              
              {/* Label */}
              <text
                x={centerX}
                y={y + levelHeight / 2 + 4}
                textAnchor="middle"
                fill="#fff"
                fontSize="12"
                fontWeight="600"
                className="pointer-events-none"
              >
                {item.name}
              </text>
              
              {/* Value */}
              <text
                x={centerX}
                y={y + levelHeight / 2 + 16}
                textAnchor="middle"
                fill="#fff"
                fontSize="10"
                opacity={0.9}
                className="pointer-events-none"
              >
                {item.value}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default PyramidChart;
