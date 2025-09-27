interface DependencyWheelProps {
  nodes: Array<Record<string, any>>;
  links: Array<Record<string, any>>;
  width?: number;
  height?: number;
}

const DependencyWheel = ({ 
  nodes, 
  links, 
  width = 400, 
  height = 300
}: DependencyWheelProps) => {
  const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(width, height) / 3;
  
  // Calculate node positions in a circle
  const nodePositions = nodes.map((node, index) => {
    const angle = (2 * Math.PI * index) / nodes.length - Math.PI / 2;
    return {
      ...node,
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
      angle
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
          
          return (
            <line
              key={`link-${index}`}
              x1={sourceNode.x}
              y1={sourceNode.y}
              x2={targetNode.x}
              y2={targetNode.y}
              stroke="#e5e7eb"
              strokeWidth={2}
              opacity={0.6}
              className="hover:stroke-accent hover:opacity-100 transition-all duration-300"
            />
          );
        })}
        
        {/* Nodes */}
        {nodePositions.map((node, index) => (
          <g key={node.id}>
            <circle
              cx={node.x}
              cy={node.y}
              r="20"
              fill={colors[index % colors.length]}
              stroke="#fff"
              strokeWidth={2}
              className="hover:r-25 transition-all duration-300 cursor-pointer"
            />
            
            {/* Node label */}
            <text
              x={node.x}
              y={node.y + 4}
              textAnchor="middle"
              fill="#fff"
              fontSize="10"
              fontWeight="600"
              className="pointer-events-none"
            >
              {node.name}
            </text>
            
            {/* Connection lines to center */}
            <line
              x1={centerX}
              y1={centerY}
              x2={node.x}
              y2={node.y}
              stroke="#f3f4f6"
              strokeWidth={1}
              opacity={0.3}
              strokeDasharray="2,2"
            />
          </g>
        ))}
        
        {/* Center hub */}
        <circle
          cx={centerX}
          cy={centerY}
          r="15"
          fill="#374151"
          stroke="#fff"
          strokeWidth={2}
        />
        <text
          x={centerX}
          y={centerY + 4}
          textAnchor="middle"
          fill="#fff"
          fontSize="12"
          fontWeight="600"
          className="pointer-events-none"
        >
          Hub
        </text>
      </svg>
    </div>
  );
};

export default DependencyWheel;
