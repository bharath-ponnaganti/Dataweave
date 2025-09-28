interface WaterfallChartProps {
  data: Array<Record<string, any>>;
  width?: number;
  height?: number;
}

const WaterfallChart = ({ 
  data, 
  width = 400, 
  height = 300
}: WaterfallChartProps) => {
  const colors = {
    positive: '#10b981',
    negative: '#ef4444',
    neutral: '#6b7280'
  };
  
  // Calculate cumulative values
  let cumulative = 0;
  const processedData = data.map((item, index) => {
    const isFirst = index === 0;
    const isLast = index === data.length - 1;
    const startValue = cumulative;
    cumulative += item.value;
    
    return {
      ...item,
      startValue,
      endValue: cumulative,
      isFirst,
      isLast,
      color: item.value >= 0 ? colors.positive : colors.negative
    };
  });
  
  const maxValue = Math.max(...processedData.map(d => d.endValue));
  const minValue = Math.min(...processedData.map(d => d.startValue));
  const valueRange = maxValue - minValue;
  
  return (
    <div className="relative" style={{ width, height }}>
      <svg width="100%" height="100%" viewBox="0 0 400 300">
        {processedData.map((item, index) => {
          const barWidth = width / data.length * 0.8;
          const barSpacing = width / data.length * 0.2;
          const x = index * (barWidth + barSpacing) + barSpacing / 2;
          
          const startY = height - ((item.startValue - minValue) / valueRange) * (height - 40) - 20;
          const endY = height - ((item.endValue - minValue) / valueRange) * (height - 40) - 20;
          const barHeight = Math.abs(endY - startY);
          const y = Math.min(startY, endY);
          
          return (
            <g key={item.name}>
              {/* Bar */}
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                fill={item.color}
                opacity={0.8}
                stroke="#fff"
                strokeWidth={1}
                className="hover:opacity-100 transition-opacity duration-200"
              />
              
              {/* Connector line (except for first and last items) */}
              {!item.isFirst && !item.isLast && (
                <line
                  x1={x - barSpacing / 2}
                  y1={startY + barHeight / 2}
                  x2={x}
                  y2={startY + barHeight / 2}
                  stroke={colors.neutral}
                  strokeWidth={2}
                />
              )}
              
              {/* Label */}
              <text
                x={x + barWidth / 2}
                y={height - 5}
                textAnchor="middle"
                fill="#374151"
                fontSize="10"
                className="pointer-events-none"
              >
                {item.name}
              </text>
              
              {/* Value */}
              <text
                x={x + barWidth / 2}
                y={y - 5}
                textAnchor="middle"
                fill="#374151"
                fontSize="11"
                fontWeight="600"
                className="pointer-events-none"
              >
                {item.value > 0 ? '+' : ''}{item.value}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default WaterfallChart;

