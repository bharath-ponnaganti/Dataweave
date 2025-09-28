interface SankeyChartProps {
  nodes: Array<Record<string, any>>;
  links: Array<Record<string, any>>;
  width?: number;
  height?: number;
}

const SankeyChart = ({ 
  nodes, 
  links, 
  width = 400, 
  height = 300
}: SankeyChartProps) => {
  const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];
  
  // Simple layout: nodes in columns
  const nodeWidth = 80;
  const nodeHeight = 20;
  const columnSpacing = (width - nodeWidth * 3) / 2;
  
  const nodePositions = nodes.map((node, index) => {
    const column = Math.floor(index / 2);
    const row = index % 2;
    return {
      ...node,
      x: column * (nodeWidth + columnSpacing),
      y: 50 + row * 80,
      width: nodeWidth,
      height: nodeHeight
    };
  });
  
  return (
    <div className="relative" style={{ width, height }}>
      <svg width="100%" height="100%" viewBox="0 0 400 300">
        {/* Links */}
        {links.map((link, index) => {
          const sourceNode = nodePositions.find(n => n.id === link.source);
          const targetNode = nodePositions.find(n => n.id === link.target);
          
          if (!sourceNode || !targetNode) return null;
          
          const sourceX = sourceNode.x + sourceNode.width;
          const sourceY = sourceNode.y + sourceNode.height / 2;
          const targetX = targetNode.x;
          const targetY = targetNode.y + targetNode.height / 2;
          
          // Create curved path
          const controlPoint1X = sourceX + (targetX - sourceX) * 0.5;
          const controlPoint1Y = sourceY;
          const controlPoint2X = sourceX + (targetX - sourceX) * 0.5;
          const controlPoint2Y = targetY;
          
          return (
            <path
              key={`link-${index}`}
              d={`M ${sourceX} ${sourceY} C ${controlPoint1X} ${controlPoint1Y}, ${controlPoint2X} ${controlPoint2Y}, ${targetX} ${targetY}`}
              stroke={colors[index % colors.length]}
              strokeWidth={Math.max(2, link.value / 10)}
              fill="none"
              opacity={0.7}
              className="hover:opacity-100 transition-opacity duration-300"
            />
          );
        })}
        
        {/* Nodes */}
        {nodePositions.map((node, index) => (
          <g key={node.id}>
            <rect
              x={node.x}
              y={node.y}
              width={node.width}
              height={node.height}
              fill={colors[index % colors.length]}
              stroke="#fff"
              strokeWidth={1}
              rx={4}
              className="hover:opacity-80 transition-opacity duration-300 cursor-pointer"
            />
            
            {/* Node label */}
            <text
              x={node.x + node.width / 2}
              y={node.y + node.height / 2 + 4}
              textAnchor="middle"
              fill="#fff"
              fontSize="10"
              fontWeight="600"
              className="pointer-events-none"
            >
              {node.name}
            </text>
            
            {/* Node value */}
            <text
              x={node.x + node.width / 2}
              y={node.y - 5}
              textAnchor="middle"
              fill="#374151"
              fontSize="9"
              className="pointer-events-none"
            >
              {node.value || '100'}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default SankeyChart;

