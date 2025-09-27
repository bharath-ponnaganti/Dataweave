interface BulletChartProps {
  value: number;
  target: number;
  maximum: number;
  title: string;
  width?: number;
  height?: number;
}

const BulletChart = ({ 
  value, 
  target, 
  maximum,
  title,
  width = 400, 
  height = 60
}: BulletChartProps) => {
  const barHeight = 20;
  const targetWidth = 3;
  
  const valuePercent = Math.min((value / maximum) * 100, 100);
  const targetPercent = Math.min((target / maximum) * 100, 100);

  const getStatusColor = () => {
    if (valuePercent >= targetPercent) return '#10b981'; // green
    if (valuePercent >= targetPercent * 0.8) return '#f59e0b'; // yellow
    return '#ef4444'; // red
  };

  return (
    <div className="flex items-center space-x-4 p-4 rounded-lg bg-card/50 hover:bg-card/80 transition-colors duration-200" style={{ width }}>
      <div className="w-24 text-sm font-semibold text-foreground">{title}</div>
      <div className="flex-1 relative">
        <svg width="100%" height={height}>
          {/* Background */}
          <rect x={0} y={15} width="100%" height={barHeight} fill="#f1f5f9" rx={10} />
          
          {/* Performance zones */}
          <rect x={0} y={15} width="60%" height={barHeight} fill="#e2e8f0" rx={10} />
          <rect x={0} y={15} width="80%" height={barHeight} fill="#cbd5e1" rx={10} />
          
          {/* Actual value */}
          <rect 
            x={0} 
            y={15} 
            width={`${valuePercent}%`} 
            height={barHeight} 
            fill={getStatusColor()}
            rx={10}
            className="transition-all duration-500 ease-out"
          />
          
          {/* Target line */}
          <line 
            x1={`${targetPercent}%`} 
            y1={8} 
            x2={`${targetPercent}%`} 
            y2={42} 
            stroke="#ef4444" 
            strokeWidth={targetWidth}
            strokeDasharray="4 2"
            className="animate-pulse"
          />
          
          {/* Target marker */}
          <polygon 
            points={`${targetPercent}%,8 ${targetPercent - 2}%,3 ${targetPercent + 2}%,3`}
            fill="#ef4444"
          />
        </svg>
        
        {/* Value labels */}
        <div className="absolute top-0 right-0 text-xs text-muted-foreground">
          Target: {target}
        </div>
      </div>
      <div className="text-sm font-semibold text-foreground min-w-[60px] text-right">
        {value}/{maximum}
      </div>
    </div>
  );
};

export default BulletChart;