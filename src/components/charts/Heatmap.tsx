interface HeatmapProps {
  data: Array<Array<number>>;
  width?: number;
  height?: number;
  colorScale?: string[];
}

const Heatmap = ({ 
  data, 
  width = 400, 
  height = 300,
  colorScale = ['#f8fafc', '#e2e8f0', '#cbd5e1', '#94a3b8', '#64748b', '#475569', '#334155', '#1e293b']
}: HeatmapProps) => {
  const cellSize = Math.min(width / data[0]?.length || 10, height / data.length || 10, 20);
  const maxValue = Math.max(...data.flat());
  
  const getColor = (value: number) => {
    if (maxValue === 0) return colorScale[0];
    const intensity = value / maxValue;
    const index = Math.floor(intensity * (colorScale.length - 1));
    return colorScale[index] || colorScale[0];
  };

  const getOpacity = (value: number) => {
    if (maxValue === 0) return 0.1;
    return Math.max(0.3, value / maxValue);
  };

  return (
    <div className="relative">
      <svg width={width} height={height} className="rounded-lg">
        {data.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <rect
              key={`${rowIndex}-${colIndex}`}
              x={colIndex * cellSize}
              y={rowIndex * cellSize}
              width={cellSize - 1}
              height={cellSize - 1}
              fill={getColor(cell)}
              opacity={getOpacity(cell)}
              stroke="#fff"
              strokeWidth={0.5}
              className="hover:opacity-100 transition-opacity duration-200 cursor-pointer"
              title={`Row ${rowIndex + 1}, Col ${colIndex + 1}: ${cell}`}
            />
          ))
        )}
      </svg>
      <div className="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded">
        Max: {maxValue}
      </div>
    </div>
  );
};

export default Heatmap;