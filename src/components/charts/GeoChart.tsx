interface GeoChartProps {
  locations: Array<Record<string, any>>;
  width?: number;
  height?: number;
}

const GeoChart = ({ 
  locations, 
  width = 400, 
  height = 300
}: GeoChartProps) => {
  const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];
  
  // Simple world map representation with key locations
  const mapPoints = [
    { name: 'North America', x: 100, y: 80, size: 30 },
    { name: 'Europe', x: 200, y: 60, size: 25 },
    { name: 'Asia', x: 300, y: 70, size: 35 },
    { name: 'Africa', x: 220, y: 150, size: 28 },
    { name: 'South America', x: 150, y: 200, size: 22 },
    { name: 'Australia', x: 320, y: 220, size: 20 }
  ];
  
  return (
    <div className="relative" style={{ width, height }}>
      <svg width="100%" height="100%" viewBox="0 0 400 300">
        {/* Background continents */}
        {mapPoints.map((continent, index) => (
          <circle
            key={continent.name}
            cx={continent.x}
            cy={continent.y}
            r={continent.size}
            fill="#e5e7eb"
            stroke="#d1d5db"
            strokeWidth={1}
            opacity={0.3}
          />
        ))}
        
        {/* Location markers */}
        {locations.map((location, index) => {
          // Convert lat/lng to approximate x,y coordinates
          const x = ((location.lng + 180) / 360) * width;
          const y = ((90 - location.lat) / 180) * height;
          const markerSize = Math.max(8, Math.min(20, (location.value || 100) / 20));
          
          return (
            <g key={location.name}>
              {/* Marker circle */}
              <circle
                cx={x}
                cy={y}
                r={markerSize}
                fill={colors[index % colors.length]}
                stroke="#fff"
                strokeWidth={2}
                opacity={0.8}
                className="hover:opacity-100 hover:r-8 transition-all duration-300 cursor-pointer"
              />
              
              {/* Marker pulse effect */}
              <circle
                cx={x}
                cy={y}
                r={markerSize * 1.5}
                fill="none"
                stroke={colors[index % colors.length]}
                strokeWidth={1}
                opacity={0.3}
                className="animate-ping"
              />
              
              {/* Location label */}
              <text
                x={x}
                y={y - markerSize - 5}
                textAnchor="middle"
                fill="#374151"
                fontSize="9"
                fontWeight="600"
                className="pointer-events-none"
              >
                {location.name}
              </text>
              
              {/* Value label */}
              <text
                x={x}
                y={y + 4}
                textAnchor="middle"
                fill="#fff"
                fontSize="8"
                fontWeight="600"
                className="pointer-events-none"
              >
                {location.value || '100'}
              </text>
            </g>
          );
        })}
        
        {/* Grid lines */}
        <defs>
          <pattern id="grid" width="40" height="30" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 30" fill="none" stroke="#f3f4f6" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" opacity={0.5} />
      </svg>
    </div>
  );
};

export default GeoChart;

