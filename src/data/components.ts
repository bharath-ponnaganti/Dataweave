export interface ComponentExample {
  id: string;
  title: string;
  description: string;
  code: string;
}

export interface ComponentProp {
  name: string;
  type: string;
  description: string;
  required?: boolean;
  default?: string;
}

export interface ComponentInfo {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  basicCode: string;
  props: ComponentProp[];
  examples: ComponentExample[];
  installation: {
    dependencies: string[];
    steps: string[];
  };
}

export const componentData: ComponentInfo[] = [
  {
    id: "table",
    title: "Table",
    description: "Sortable data tables with pagination support.",
    category: "Data Display",
    icon: "Table",
    basicCode: `import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const DataTable = ({ data, columns }) => (
  <Table>
    <TableHeader>
      <TableRow>
        {columns.map((col) => <TableHead key={col.key}>{col.label}</TableHead>)}
      </TableRow>
    </TableHeader>
    <TableBody>
      {data.map((row, i) => (
        <TableRow key={i}>
          {columns.map((col) => <TableCell key={col.key}>{row[col.key]}</TableCell>)}
        </TableRow>
      ))}
    </TableBody>
  </Table>
);`,
    props: [
      { name: "data", type: "Array<object>", description: "Table data", required: true },
      { name: "columns", type: "Array<object>", description: "Column config", required: true }
    ],
    examples: [
      {
        id: "basic-table",
        title: "Basic Table",
        description: "Simple data table",
        code: `const data = [{ name: "John", age: 30 }];
const columns = [{ key: "name", label: "Name" }];
<DataTable data={data} columns={columns} />`
      }
    ],
    installation: { dependencies: [], steps: ["Copy component"] }
  },
  {
    id: "repeater",
    title: "Repeater",
    description: "Dynamic list component for data iteration.",
    category: "Layout",
    icon: "Repeat",
    basicCode: `const Repeater = ({ data, renderItem }) => (
  <div>
    {data.map((item, index) => (
      <div key={index}>{renderItem(item, index)}</div>
    ))}
  </div>
);`,
    props: [
      { name: "data", type: "Array<any>", description: "Data array", required: true },
      { name: "renderItem", type: "function", description: "Render function", required: true }
    ],
    examples: [
      {
        id: "basic-repeater",
        title: "Basic Repeater",
        description: "Data list with custom rendering",
        code: `<Repeater data={[1,2,3]} renderItem={(item) => <div>{item}</div>} />`
      }
    ],
    installation: { dependencies: [], steps: ["Copy component"] }
  },
  {
    id: "bar-chart",
    title: "Bar Chart",
    description: "Bar charts for data comparison.",
    category: "Charts",
    icon: "BarChart3",
    basicCode: `import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const BarChartComponent = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  </ResponsiveContainer>
);`,
    props: [
      { name: "data", type: "Array<object>", description: "Chart data", required: true }
    ],
    examples: [
      {
        id: "basic-bar",
        title: "Basic Bar Chart",
        description: "Simple bar chart",
        code: `const data = [{ name: 'A', value: 100 }];
<BarChartComponent data={data} />`
      }
    ],
    installation: { dependencies: ["recharts"], steps: ["npm install recharts"] }
  },
  {
    id: "line-chart",
    title: "Line Chart",
    description: "Line charts for trend visualization.",
    category: "Charts",
    icon: "TrendingUp",
    basicCode: `import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const LineChartComponent = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Line dataKey="value" stroke="#8884d8" />
    </LineChart>
  </ResponsiveContainer>
);`,
    props: [
      { name: "data", type: "Array<object>", description: "Chart data", required: true }
    ],
    examples: [
      {
        id: "basic-line",
        title: "Basic Line Chart", 
        description: "Simple line chart",
        code: `const data = [{ name: 'A', value: 100 }];
<LineChartComponent data={data} />`
      }
    ],
    installation: { dependencies: ["recharts"], steps: ["npm install recharts"] }
  },
  {
    id: "area-chart",
    title: "Area Chart",
    description: "Area charts for cumulative data.",
    category: "Charts",
    icon: "Activity",
    basicCode: `import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const AreaChartComponent = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <AreaChart data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Area dataKey="value" fill="#8884d8" />
    </AreaChart>
  </ResponsiveContainer>
);`,
    props: [
      { name: "data", type: "Array<object>", description: "Chart data", required: true }
    ],
    examples: [
      {
        id: "basic-area",
        title: "Basic Area Chart",
        description: "Simple area chart",
        code: `const data = [{ name: 'A', value: 100 }];
<AreaChartComponent data={data} />`
      }
    ],
    installation: { dependencies: ["recharts"], steps: ["npm install recharts"] }
  },
  {
    id: "combo-chart",
    title: "Combo Chart",
    description: "Combined chart types in one view.",
    category: "Charts",
    icon: "BarChart3",
    basicCode: `import { ComposedChart, Bar, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const ComboChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <ComposedChart data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="value" fill="#8884d8" />
      <Line dataKey="target" stroke="#82ca9d" />
    </ComposedChart>
  </ResponsiveContainer>
);`,
    props: [
      { name: "data", type: "Array<object>", description: "Chart data", required: true }
    ],
    examples: [
      {
        id: "basic-combo",
        title: "Basic Combo Chart",
        description: "Bar and line combined",
        code: `const data = [{ name: 'A', value: 100, target: 90 }];
<ComboChart data={data} />`
      }
    ],
    installation: { dependencies: ["recharts"], steps: ["npm install recharts"] }
  },
  {
    id: "headline",
    title: "Headline",
    description: "Key metrics display with trends.",
    category: "Metrics",
    icon: "FileText",
    basicCode: `import { TrendingUp } from "lucide-react";

const Headline = ({ title, value, change }) => (
  <div className="p-6 border rounded-lg">
    <div className="flex justify-between items-center">
      <div>
        <h3 className="text-2xl font-bold">{value}</h3>
        <p className="text-muted-foreground">{title}</p>
      </div>
      <div className="flex items-center text-green-600">
        <TrendingUp className="h-4 w-4 mr-1" />
        <span>{change}%</span>
      </div>
    </div>
  </div>
);`,
    props: [
      { name: "title", type: "string", description: "Metric title", required: true },
      { name: "value", type: "string", description: "Main value", required: true },
      { name: "change", type: "number", description: "Change percentage" }
    ],
    examples: [
      {
        id: "basic-headline",
        title: "Basic Headline",
        description: "KPI with trend",
        code: `<Headline title="Revenue" value="$125K" change={12.5} />`
      }
    ],
    installation: { dependencies: ["lucide-react"], steps: ["npm install lucide-react"] }
  },
  {
    id: "scatter-plot",
    title: "Scatter Plot",
    description: "Correlation analysis visualization.",
    category: "Charts",
    icon: "GitBranch",
    basicCode: `import { ScatterChart, Scatter, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const ScatterPlot = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <ScatterChart data={data}>
      <XAxis dataKey="x" />
      <YAxis dataKey="y" />
      <Scatter data={data} fill="#8884d8" />
    </ScatterChart>
  </ResponsiveContainer>
);`,
    props: [
      { name: "data", type: "Array<object>", description: "Scatter data", required: true }
    ],
    examples: [
      {
        id: "basic-scatter",
        title: "Basic Scatter Plot",
        description: "X-Y correlation",
        code: `const data = [{ x: 100, y: 200 }];
<ScatterPlot data={data} />`
      }
    ],
    installation: { dependencies: ["recharts"], steps: ["npm install recharts"] }
  },
  {
    id: "bubble-chart",
    title: "Bubble Chart",
    description: "Multi-dimensional data visualization.",
    category: "Charts",
    icon: "Circle",
    basicCode: `import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, ResponsiveContainer } from 'recharts';

const BubbleChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <ScatterChart data={data}>
      <XAxis dataKey="x" />
      <YAxis dataKey="y" />
      <ZAxis dataKey="z" range={[60, 400]} />
      <Scatter data={data} fill="#82ca9d" />
    </ScatterChart>
  </ResponsiveContainer>
);`,
    props: [
      { name: "data", type: "Array<object>", description: "Bubble data", required: true }
    ],
    examples: [
      {
        id: "basic-bubble",
        title: "Basic Bubble Chart",
        description: "3D data points",
        code: `const data = [{ x: 100, y: 200, z: 300 }];
<BubbleChart data={data} />`
      }
    ],
    installation: { dependencies: ["recharts"], steps: ["npm install recharts"] }
  },
  {
    id: "pie-chart",
    title: "Pie Chart",
    description: "Proportional data visualization.",
    category: "Charts",
    icon: "PieChart",
    basicCode: `import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const PieChartComponent = ({ data }) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie data={data} dataKey="value" outerRadius={80} fill="#8884d8">
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};`,
    props: [
      { name: "data", type: "Array<object>", description: "Pie data", required: true }
    ],
    examples: [
      {
        id: "basic-pie",
        title: "Basic Pie Chart",
        description: "Circular segments",
        code: `const data = [{ name: 'A', value: 400 }];
<PieChartComponent data={data} />`
      }
    ],
    installation: { dependencies: ["recharts"], steps: ["npm install recharts"] }
  },
  {
    id: "donut-chart",
    title: "Donut Chart", 
    description: "Pie chart with center space.",
    category: "Charts",
    icon: "Circle",
    basicCode: `import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const DonutChart = ({ data }) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie data={data} dataKey="value" innerRadius={40} outerRadius={80} fill="#8884d8">
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};`,
    props: [
      { name: "data", type: "Array<object>", description: "Donut data", required: true }
    ],
    examples: [
      {
        id: "basic-donut",
        title: "Basic Donut Chart",
        description: "Ring-shaped chart",
        code: `const data = [{ name: 'A', value: 400 }];
<DonutChart data={data} />`
      }
    ],
    installation: { dependencies: ["recharts"], steps: ["npm install recharts"] }
  },
  {
    id: "treemap",
    title: "Treemap",
    description: "Hierarchical rectangle visualization.",
    category: "Charts", 
    icon: "Grid3x3",
    basicCode: `const TreemapChart = ({ data }) => (
  <div className="w-full h-64 bg-gray-100 rounded p-4">
    <div className="text-center pt-20">
      <div className="text-lg font-semibold">Treemap Visualization</div>
      <div className="text-sm text-gray-600">Hierarchical data display</div>
    </div>
  </div>
);`,
    props: [
      { name: "data", type: "Array<object>", description: "Tree data", required: true }
    ],
    examples: [
      {
        id: "basic-treemap",
        title: "Basic Treemap",
        description: "Nested rectangles",
        code: `const data = [{ name: 'A', size: 300 }];
<TreemapChart data={data} />`
      }
    ],
    installation: { dependencies: [], steps: ["Copy component"] }
  },
  {
    id: "pyramid-chart",
    title: "Pyramid Chart",
    description: "Hierarchical pyramid visualization.",
    category: "Charts",
    icon: "Triangle", 
    basicCode: `const PyramidChart = ({ data }) => (
  <div className="w-full h-64 bg-gradient-to-t from-yellow-100 to-yellow-50 rounded p-4">
    <div className="text-center pt-20">
      <div className="text-lg font-semibold">Pyramid Chart</div>
      <div className="text-sm text-gray-600">Hierarchical layers</div>
    </div>
  </div>
);`,
    props: [
      { name: "data", type: "Array<object>", description: "Pyramid data", required: true }
    ],
    examples: [
      {
        id: "basic-pyramid",
        title: "Basic Pyramid",
        description: "Layer visualization", 
        code: `const data = [{ name: 'Top', value: 100 }];
<PyramidChart data={data} />`
      }
    ],
    installation: { dependencies: [], steps: ["Copy component"] }
  },
  {
    id: "funnel",
    title: "Funnel",
    description: "Conversion process visualization.",
    category: "Charts",
    icon: "Filter",
    basicCode: `const FunnelComponent = ({ data }) => (
  <div className="w-full h-64 bg-gradient-to-b from-green-100 to-green-50 rounded p-4">
    <div className="text-center pt-20">
      <div className="text-lg font-semibold">Funnel Chart</div>
      <div className="text-sm text-gray-600">Conversion flow</div>
    </div>
  </div>
);`,
    props: [
      { name: "data", type: "Array<object>", description: "Funnel data", required: true }
    ],
    examples: [
      {
        id: "basic-funnel",
        title: "Basic Funnel",
        description: "Sales funnel",
        code: `const data = [{ name: 'Leads', value: 1000 }];
<FunnelComponent data={data} />`
      }
    ],
    installation: { dependencies: [], steps: ["Copy component"] }
  },
  {
    id: "heatmap",
    title: "Heatmap", 
    description: "Matrix data with color intensity.",
    category: "Charts",
    icon: "Grid3x3",
    basicCode: `const Heatmap = ({ data }) => (
  <div className="w-full h-64 bg-gradient-to-br from-red-100 to-blue-100 rounded p-4">
    <div className="text-center pt-20">
      <div className="text-lg font-semibold">Heatmap</div>
      <div className="text-sm text-gray-600">Color-coded matrix</div>
    </div>
  </div>
);`,
    props: [
      { name: "data", type: "Array<Array<number>>", description: "2D data array", required: true }
    ],
    examples: [
      {
        id: "basic-heatmap",
        title: "Basic Heatmap",
        description: "Color matrix",
        code: `const data = [[1,2,3],[4,5,6]];
<Heatmap data={data} />`
      }
    ],
    installation: { dependencies: [], steps: ["Copy component"] }
  },
  {
    id: "bullet-chart",
    title: "Bullet Chart",
    description: "Performance vs target indicators.",
    category: "Charts",
    icon: "Target",
    basicCode: `const BulletChart = ({ value, target, max, title }) => (
  <div className="p-4 border rounded">
    <div className="flex items-center space-x-4">
      <span className="w-20 text-sm font-medium">{title}</span>
      <div className="flex-1 h-4 bg-gray-200 rounded relative">
        <div className="h-full bg-blue-500 rounded" style={{width: \`\${(value/max)*100}%\`}} />
        <div className="absolute top-0 w-0.5 h-6 bg-red-500" style={{left: \`\${(target/max)*100}%\`}} />
      </div>
      <span className="text-sm">{value}/{max}</span>
    </div>
  </div>
);`,
    props: [
      { name: "value", type: "number", description: "Current value", required: true },
      { name: "target", type: "number", description: "Target value", required: true },
      { name: "max", type: "number", description: "Maximum value", required: true },
      { name: "title", type: "string", description: "Chart title", required: true }
    ],
    examples: [
      {
        id: "basic-bullet",
        title: "Basic Bullet Chart",
        description: "KPI tracking",
        code: `<BulletChart value={75} target={90} max={100} title="Revenue" />`
      }
    ],
    installation: { dependencies: [], steps: ["Copy component"] }
  },
  {
    id: "waterfall-chart",
    title: "Waterfall Chart",
    description: "Sequential cumulative changes.",
    category: "Charts",
    icon: "BarChart3",
    basicCode: `const WaterfallChart = ({ data }) => (
  <div className="w-full h-64 bg-gradient-to-r from-blue-100 to-cyan-100 rounded p-4">
    <div className="text-center pt-20">
      <div className="text-lg font-semibold">Waterfall Chart</div>
      <div className="text-sm text-gray-600">Cumulative changes</div>
    </div>
  </div>
);`,
    props: [
      { name: "data", type: "Array<object>", description: "Step data", required: true }
    ],
    examples: [
      {
        id: "basic-waterfall",
        title: "Basic Waterfall",
        description: "P&L breakdown",
        code: `const data = [{ name: 'Start', value: 100 }];
<WaterfallChart data={data} />`
      }
    ],
    installation: { dependencies: [], steps: ["Copy component"] }
  },
  {
    id: "dependency-wheel",
    title: "Dependency Wheel", 
    description: "Circular relationship visualization.",
    category: "Charts",
    icon: "GitBranch",
    basicCode: `const DependencyWheel = ({ nodes, links }) => (
  <div className="w-full h-64 bg-gradient-to-br from-purple-100 to-indigo-100 rounded p-4">
    <div className="text-center pt-20">
      <div className="text-lg font-semibold">Dependency Wheel</div>
      <div className="text-sm text-gray-600">Circular connections</div>
    </div>
  </div>
);`,
    props: [
      { name: "nodes", type: "Array<object>", description: "Network nodes", required: true },
      { name: "links", type: "Array<object>", description: "Node connections", required: true }
    ],
    examples: [
      {
        id: "basic-dependency",
        title: "Basic Dependency Wheel", 
        description: "Service dependencies",
        code: `const nodes = [{ id: 'A', name: 'Service A' }];
const links = [{ source: 'A', target: 'B' }];
<DependencyWheel nodes={nodes} links={links} />`
      }
    ],
    installation: { dependencies: [], steps: ["Copy component"] }
  },
  {
    id: "sankey-chart",
    title: "Sankey Chart",
    description: "Flow diagram with quantities.",
    category: "Charts", 
    icon: "GitBranch",
    basicCode: `const SankeyChart = ({ nodes, links }) => (
  <div className="w-full h-64 bg-gradient-to-r from-emerald-100 to-teal-100 rounded p-4">
    <div className="text-center pt-20">
      <div className="text-lg font-semibold">Sankey Chart</div>
      <div className="text-sm text-gray-600">Flow visualization</div>
    </div>
  </div>
);`,
    props: [
      { name: "nodes", type: "Array<object>", description: "Flow nodes", required: true },
      { name: "links", type: "Array<object>", description: "Flow connections", required: true }
    ],
    examples: [
      {
        id: "basic-sankey",
        title: "Basic Sankey Chart",
        description: "Energy flows",
        code: `const nodes = [{ id: 'source', name: 'Source' }];
const links = [{ source: 'source', target: 'sink', value: 100 }];
<SankeyChart nodes={nodes} links={links} />`
      }
    ],
    installation: { dependencies: [], steps: ["Copy component"] }
  },
  {
    id: "geo-chart",
    title: "Geo Chart (Pushpins)",
    description: "Geographic data with location markers.",
    category: "Charts",
    icon: "MapPin",
    basicCode: `const GeoChart = ({ locations }) => (
  <div className="w-full h-64 bg-gradient-to-br from-green-100 to-blue-100 rounded p-4">
    <div className="text-center pt-20">
      <div className="text-lg font-semibold">Geo Chart</div>
      <div className="text-sm text-gray-600">Geographic visualization</div>
    </div>
  </div>
);`,
    props: [
      { name: "locations", type: "Array<object>", description: "Geographic points", required: true }
    ],
    examples: [
      {
        id: "basic-geo",
        title: "Basic Geo Chart",
        description: "World map data",
        code: `const locations = [{ name: 'NYC', lat: 40.7, lng: -74, value: 100 }];
<GeoChart locations={locations} />`
      }
    ],
    installation: { dependencies: [], steps: ["Copy component"] }
  }
];

// Helper functions
export const getComponentById = (id: string) => 
  componentData.find(component => component.id === id);

export const getComponentsByCategory = (category: string) => 
  category === "All" ? componentData : componentData.filter(c => c.category === category);

export const getComponentCategories = () => 
  ["All", ...Array.from(new Set(componentData.map(c => c.category))).sort()];

export const getCategories = getComponentCategories;

export const searchComponents = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return componentData.filter(c => 
    c.title.toLowerCase().includes(lowerQuery) ||
    c.description.toLowerCase().includes(lowerQuery) ||
    c.category.toLowerCase().includes(lowerQuery)
  );
};