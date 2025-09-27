import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getComponentById } from "../data/components";
import { DollarSign, Mail, Download, Plus, AlertTriangle, AlertCircle, Repeat, TrendingUp, BarChart3, Circle, GitBranch, Target, Filter, Grid3x3, Triangle, MapPin, FileText } from "lucide-react";
import { Bar, BarChart, Line, LineChart, Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, ComposedChart, CartesianGrid, PieChart, Pie, Cell } from "recharts";

// Import actual component implementations
import ScatterPlot from "@/components/charts/ScatterPlot";
import BubbleChart from "@/components/charts/BubbleChart";
import TreemapChart from "@/components/charts/TreemapChart";
import FunnelComponent from "@/components/charts/FunnelComponent";
import Heatmap from "@/components/charts/Heatmap";
import BulletChart from "@/components/charts/BulletChart";
import PyramidChart from "@/components/charts/PyramidChart";
import WaterfallChart from "@/components/charts/WaterfallChart";
import DependencyWheel from "@/components/charts/DependencyWheel";
import SankeyChart from "@/components/charts/SankeyChart";
import GeoChart from "@/components/charts/GeoChart";

interface LiveComponentPreviewProps {
  componentId: string;
  exampleId: string;
}

/**
 * LiveComponentPreview renders actual working examples of components
 * This component dynamically renders the appropriate example based on componentId and exampleId
 */
const LiveComponentPreview = ({ componentId, exampleId }: LiveComponentPreviewProps) => {
  const component = getComponentById(componentId);

  if (!component) {
    return (
      <div className="p-4 border rounded-lg bg-gray-50">
        <p className="text-muted-foreground">Component not found: {componentId}</p>
      </div>
    );
  }

  // Sample data for demos
  const tableData = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Inactive" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", status: "Pending" },
  ];

  const chartData = [
    { name: 'Jan', value: 400, target: 350 },
    { name: 'Feb', value: 300, target: 280 },
    { name: 'Mar', value: 500, target: 450 },
    { name: 'Apr', value: 280, target: 300 },
    { name: 'May', value: 390, target: 380 },
    { name: 'Jun', value: 320, target: 340 },
  ];

  const pieData = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 }
  ];

  const scatterData = [
    { x: 100, y: 200 },
    { x: 120, y: 100 },
    { x: 170, y: 300 },
    { x: 140, y: 250 },
    { x: 150, y: 400 },
    { x: 110, y: 280 }
  ];

  const bubbleData = [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
    { x: 110, y: 280, z: 200 }
  ];

  const treemapData = [
    { name: 'A', size: 300 },
    { name: 'B', size: 200 },
    { name: 'C', size: 150 },
    { name: 'D', size: 120 },
    { name: 'E', size: 80 }
  ];

  const funnelData = [
    { name: 'Leads', value: 1000 },
    { name: 'Prospects', value: 750 },
    { name: 'Qualified', value: 500 },
    { name: 'Customers', value: 200 }
  ];

  const heatmapData = [
    [1, 2, 3, 4, 5],
    [2, 3, 4, 5, 1],
    [3, 4, 5, 1, 2],
    [4, 5, 1, 2, 3],
    [5, 1, 2, 3, 4]
  ];

  const pyramidData = [
    { name: 'Executive', value: 5 },
    { name: 'Senior Management', value: 15 },
    { name: 'Middle Management', value: 35 },
    { name: 'Team Leads', value: 60 },
    { name: 'Individual Contributors', value: 150 }
  ];

  const waterfallData = [
    { name: 'Start', value: 1000 },
    { name: 'Revenue', value: 500 },
    { name: 'Costs', value: -200 },
    { name: 'Marketing', value: -100 },
    { name: 'Operations', value: -150 },
    { name: 'End', value: 1050 }
  ];

  const dependencyNodes = [
    { id: 'A', name: 'API Gateway' },
    { id: 'B', name: 'Auth Service' },
    { id: 'C', name: 'User Service' },
    { id: 'D', name: 'Payment Service' },
    { id: 'E', name: 'Notification Service' }
  ];

  const dependencyLinks = [
    { source: 'A', target: 'B', value: 10 },
    { source: 'A', target: 'C', value: 15 },
    { source: 'A', target: 'D', value: 8 },
    { source: 'C', target: 'E', value: 5 },
    { source: 'D', target: 'E', value: 3 }
  ];

  const sankeyNodes = [
    { id: 'source1', name: 'Coal', value: 100 },
    { id: 'source2', name: 'Gas', value: 80 },
    { id: 'source3', name: 'Nuclear', value: 60 },
    { id: 'sink1', name: 'Electricity', value: 120 },
    { id: 'sink2', name: 'Heat', value: 80 },
    { id: 'sink3', name: 'Transport', value: 40 }
  ];

  const sankeyLinks = [
    { source: 'source1', target: 'sink1', value: 80 },
    { source: 'source1', target: 'sink2', value: 20 },
    { source: 'source2', target: 'sink1', value: 40 },
    { source: 'source2', target: 'sink3', value: 40 },
    { source: 'source3', target: 'sink1', value: 60 }
  ];

  const geoLocations = [
    { name: 'NYC', lat: 40.7, lng: -74.0, value: 150 },
    { name: 'London', lat: 51.5, lng: -0.1, value: 120 },
    { name: 'Tokyo', lat: 35.7, lng: 139.7, value: 180 },
    { name: 'Sydney', lat: -33.9, lng: 151.2, value: 90 },
    { name: 'São Paulo', lat: -23.5, lng: -46.6, value: 110 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  // Render components based on componentId
  switch (componentId) {
    case "table":
      return (
        <div className="space-y-4">
          <div className="p-4 border rounded-lg bg-white">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tableData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>
                      <Badge variant={row.status === 'Active' ? 'default' : 'secondary'}>
                        {row.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      );

    case "repeater":
      return (
        <div className="space-y-4">
          <div className="p-4 border rounded-lg bg-white">
            <div className="grid gap-3">
              {tableData.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.email}</p>
                      </div>
                      <Badge variant={item.status === 'Active' ? 'default' : 'secondary'}>
                        {item.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      );

    case "bar-chart":
      return (
        <div className="space-y-4">
          <div className="p-4 border rounded-lg bg-white">
            <h4 className="text-sm font-medium mb-2">Bar Chart</h4>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      );

    case "line-chart":
      return (
        <div className="space-y-4">
          <div className="p-4 border rounded-lg bg-white">
            <h4 className="text-sm font-medium mb-2">Line Chart</h4>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      );

    case "area-chart":
      return (
        <div className="space-y-4">
          <div className="p-4 border rounded-lg bg-white">
            <h4 className="text-sm font-medium mb-2">Area Chart</h4>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      );

    case "combo-chart":
      return (
        <div className="space-y-4">
          <div className="p-4 border rounded-lg bg-white">
            <h4 className="text-sm font-medium mb-2">Combo Chart</h4>
            <ResponsiveContainer width="100%" height={250}>
              <ComposedChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
                <Line type="monotone" dataKey="target" stroke="#82ca9d" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      );

    case "headline":
      return (
        <div className="space-y-4">
          <div className="p-6 border rounded-lg bg-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold">$125,430</h3>
                <p className="text-sm text-muted-foreground">Total Revenue</p>
              </div>
              <div className="text-right">
                <div className="flex items-center text-green-600">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">+12.5%</span>
                </div>
                <p className="text-xs text-muted-foreground">vs last month</p>
              </div>
            </div>
          </div>
        </div>
      );

    case "pie-chart":
      return (
        <div className="space-y-4">
          <div className="p-4 border rounded-lg bg-white">
            <h4 className="text-sm font-medium mb-2">Pie Chart</h4>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      );

    case "donut-chart":
      return (
        <div className="space-y-4">
          <div className="p-4 border rounded-lg bg-white">
            <h4 className="text-sm font-medium mb-2">Donut Chart</h4>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      );

    case "scatter-plot":
      return (
        <div className="space-y-4">
          <div className="p-4 border rounded-lg bg-white">
            <h4 className="text-sm font-medium mb-2">Scatter Plot</h4>
            <ScatterPlot data={scatterData} xKey="x" yKey="y" width={400} height={250} />
          </div>
        </div>
      );

    case "bubble-chart":
      return (
        <div className="space-y-4">
          <div className="p-4 border rounded-lg bg-white">
            <h4 className="text-sm font-medium mb-2">Bubble Chart</h4>
            <BubbleChart data={bubbleData} xKey="x" yKey="y" zKey="z" width={400} height={250} />
          </div>
        </div>
      );

    case "treemap":
      return (
        <div className="space-y-4">
          <div className="p-4 border rounded-lg bg-white">
            <h4 className="text-sm font-medium mb-2">Treemap</h4>
            <TreemapChart data={treemapData} width={400} height={250} />
          </div>
        </div>
      );

    case "funnel":
      return (
        <div className="space-y-4">
          <div className="p-4 border rounded-lg bg-white">
            <h4 className="text-sm font-medium mb-2">Funnel Chart</h4>
            <FunnelComponent data={funnelData} width={400} height={250} />
          </div>
        </div>
      );

    case "heatmap":
      return (
        <div className="space-y-4">
          <div className="p-4 border rounded-lg bg-white">
            <h4 className="text-sm font-medium mb-2">Heatmap</h4>
            <Heatmap data={heatmapData} width={400} height={250} />
          </div>
        </div>
      );

    case "bullet-chart":
      return (
        <div className="space-y-4">
          <div className="p-4 border rounded-lg bg-white">
            <h4 className="text-sm font-medium mb-2">Bullet Charts</h4>
            <div className="space-y-2">
              <BulletChart value={75} target={90} maximum={100} title="Revenue" />
              <BulletChart value={85} target={80} maximum={100} title="Profit" />
              <BulletChart value={60} target={70} maximum={100} title="Growth" />
            </div>
          </div>
        </div>
      );

    case "pyramid-chart":
      return (
        <div className="space-y-4">
          <div className="p-4 border rounded-lg bg-white">
            <h4 className="text-sm font-medium mb-2">Pyramid Chart</h4>
            <PyramidChart data={pyramidData} width={400} height={250} />
          </div>
        </div>
      );

    case "waterfall-chart":
      return (
        <div className="space-y-4">
          <div className="p-4 border rounded-lg bg-white">
            <h4 className="text-sm font-medium mb-2">Waterfall Chart</h4>
            <WaterfallChart data={waterfallData} width={400} height={250} />
          </div>
        </div>
      );

    case "dependency-wheel":
      return (
        <div className="space-y-4">
          <div className="p-4 border rounded-lg bg-white">
            <h4 className="text-sm font-medium mb-2">Dependency Wheel</h4>
            <DependencyWheel nodes={dependencyNodes} links={dependencyLinks} width={400} height={250} />
          </div>
        </div>
      );

    case "sankey-chart":
      return (
        <div className="space-y-4">
          <div className="p-4 border rounded-lg bg-white">
            <h4 className="text-sm font-medium mb-2">Sankey Chart</h4>
            <SankeyChart nodes={sankeyNodes} links={sankeyLinks} width={400} height={250} />
          </div>
        </div>
      );

    case "geo-chart":
      return (
        <div className="space-y-4">
          <div className="p-4 border rounded-lg bg-white">
            <h4 className="text-sm font-medium mb-2">Geo Chart</h4>
            <GeoChart locations={geoLocations} width={400} height={250} />
          </div>
        </div>
      );

    default:
      return (
        <div className="p-4 border rounded-lg bg-gray-50">
          <p className="text-muted-foreground">
            Live preview for {component.title} coming soon...
          </p>
        </div>
      );
  }
};

export default LiveComponentPreview;