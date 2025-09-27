/**
 * Application constants for better maintainability
 */

export const APP_CONFIG = {
  name: "GoodWire",
  tagline: "React components for data analytics",
  description: "Build beautiful, interactive dashboards and data visualizations with 35+ professionally designed components. The complete wireframing library for data applications.",
  version: "1.0.0",
  githubUrl: "https://github.com",
  twitterUrl: "https://twitter.com"
} as const;

export const NAVIGATION_LINKS = {
  home: [
    { href: "#components", label: "Components" },
    { href: "#features", label: "Features" },
    { href: "#docs", label: "Documentation" }
  ],
  other: [
    { href: "/", label: "Home", icon: "Home" },
    { href: "/#components", label: "All Components" }
  ]
} as const;

export const STATS_DATA = [
  { label: "Components", value: "35+", color: "from-accent to-primary" },
  { label: "Chart Types", value: "12", color: "from-primary to-accent" },
  { label: "Downloads", value: "50K+", color: "from-accent to-primary" },
  { label: "GitHub Stars", value: "2.5K", color: "from-primary to-accent" }
] as const;

export const FEATURES_DATA = [
  {
    icon: "Palette",
    title: "Beautiful Defaults",
    description: "Carefully crafted designs that work out of the box. Spend less time on styling, more time on data insights."
  },
  {
    icon: "Zap",
    title: "Lightning Fast",
    description: "Optimized for performance with lazy loading, virtualization, and efficient rendering for large datasets."
  },
  {
    icon: "Shield",
    title: "Production Ready",
    description: "Battle-tested components used by thousands of developers. Reliable, stable, and enterprise-grade."
  },
  {
    icon: "Code",
    title: "TypeScript First",
    description: "Built with TypeScript for better development experience, autocompletion, and fewer runtime errors."
  },
  {
    icon: "Puzzle",
    title: "Modular Design",
    description: "Mix and match components as needed. Tree-shakeable imports mean you only ship what you use."
  },
  {
    icon: "Accessibility",
    title: "Accessible by Design",
    description: "WCAG compliant components with keyboard navigation, screen reader support, and focus management."
  }
] as const;

export const FOOTER_LINKS = {
  quickLinks: [
    { href: "#", label: "Documentation", external: true },
    { href: "#components", label: "Components" },
    { href: "#components", label: "Charts" },
    { href: "#", label: "Examples" },
    { href: "#", label: "Changelog" }
  ],
  resources: [
    { href: "#components", label: "Getting Started" },
    { href: "#", label: "Design System" },
    { href: "#", label: "Figma Kit" },
    { href: "#", label: "Community" },
    { href: "#", label: "Support" }
  ],
  legal: [
    { href: "#", label: "Privacy" },
    { href: "#", label: "Terms" },
    { href: "#", label: "License" }
  ]
} as const;

export const CHART_SAMPLE_DATA = {
  line: [
    { name: 'Jan', value: 400, target: 350 },
    { name: 'Feb', value: 300, target: 280 },
    { name: 'Mar', value: 500, target: 450 },
    { name: 'Apr', value: 280, target: 300 },
    { name: 'May', value: 390, target: 380 },
    { name: 'Jun', value: 320, target: 340 }
  ],
  pie: [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 }
  ],
  scatter: [
    { x: 100, y: 200 },
    { x: 120, y: 100 },
    { x: 170, y: 300 },
    { x: 140, y: 250 },
    { x: 150, y: 400 },
    { x: 110, y: 280 }
  ],
  bubble: [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
    { x: 110, y: 280, z: 200 }
  ],
  treemap: [
    { name: 'A', size: 300 },
    { name: 'B', size: 200 },
    { name: 'C', size: 150 },
    { name: 'D', size: 120 },
    { name: 'E', size: 80 }
  ],
  funnel: [
    { name: 'Leads', value: 1000 },
    { name: 'Prospects', value: 750 },
    { name: 'Qualified', value: 500 },
    { name: 'Customers', value: 200 }
  ],
  heatmap: [
    [1, 2, 3, 4, 5],
    [2, 3, 4, 5, 1],
    [3, 4, 5, 1, 2],
    [4, 5, 1, 2, 3],
    [5, 1, 2, 3, 4]
  ],
  pyramid: [
    { name: 'Executive', value: 5 },
    { name: 'Senior Management', value: 15 },
    { name: 'Middle Management', value: 35 },
    { name: 'Team Leads', value: 60 },
    { name: 'Individual Contributors', value: 150 }
  ],
  waterfall: [
    { name: 'Start', value: 1000 },
    { name: 'Revenue', value: 500 },
    { name: 'Costs', value: -200 },
    { name: 'Marketing', value: -100 },
    { name: 'Operations', value: -150 },
    { name: 'End', value: 1050 }
  ],
  dependencyNodes: [
    { id: 'A', name: 'API Gateway' },
    { id: 'B', name: 'Auth Service' },
    { id: 'C', name: 'User Service' },
    { id: 'D', name: 'Payment Service' },
    { id: 'E', name: 'Notification Service' }
  ],
  dependencyLinks: [
    { source: 'A', target: 'B', value: 10 },
    { source: 'A', target: 'C', value: 15 },
    { source: 'A', target: 'D', value: 8 },
    { source: 'C', target: 'E', value: 5 },
    { source: 'D', target: 'E', value: 3 }
  ],
  sankeyNodes: [
    { id: 'source1', name: 'Coal', value: 100 },
    { id: 'source2', name: 'Gas', value: 80 },
    { id: 'source3', name: 'Nuclear', value: 60 },
    { id: 'sink1', name: 'Electricity', value: 120 },
    { id: 'sink2', name: 'Heat', value: 80 },
    { id: 'sink3', name: 'Transport', value: 40 }
  ],
  sankeyLinks: [
    { source: 'source1', target: 'sink1', value: 80 },
    { source: 'source1', target: 'sink2', value: 20 },
    { source: 'source2', target: 'sink1', value: 40 },
    { source: 'source2', target: 'sink3', value: 40 },
    { source: 'source3', target: 'sink1', value: 60 }
  ],
  geoLocations: [
    { name: 'NYC', lat: 40.7, lng: -74.0, value: 150 },
    { name: 'London', lat: 51.5, lng: -0.1, value: 120 },
    { name: 'Tokyo', lat: 35.7, lng: 139.7, value: 180 },
    { name: 'Sydney', lat: -33.9, lng: 151.2, value: 90 },
    { name: 'São Paulo', lat: -23.5, lng: -46.6, value: 110 }
  ]
} as const;
