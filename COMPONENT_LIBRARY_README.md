# DataWeave Components

A comprehensive React component library built with TypeScript, Tailwind CSS, and shadcn/ui. Create powerful data analytics applications with our collection of charts, tables, forms, and UI components.

## 🚀 Features

- **50+ Components** - Tables, charts, forms, navigation, and more
- **Live Preview** - Interactive component previews with code examples
- **TypeScript Ready** - Full TypeScript support with type definitions
- **Responsive Design** - Mobile-first components that work everywhere  
- **Accessible** - Built with accessibility best practices
- **Customizable** - Easy theming with CSS variables and Tailwind
- **Copy & Paste** - Ready-to-use code snippets for every component

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/dataweave-components.git
cd dataweave-components

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🛠 Usage

### Basic Component Usage

```tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
      </CardHeader>
      <CardContent>
        <Button onClick={() => alert('Hello!')}>
          Click me
        </Button>
      </CardContent>
    </Card>
  )
}
```

### Data Tables

```tsx
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const data = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
]

function DataTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
```

## 📚 Component Categories

- **Layout** - Cards, containers, grids, and spacing
- **Form** - Inputs, buttons, selects, and form controls
- **Data Display** - Tables, lists, badges, and typography
- **Charts** - Bar charts, line charts, pie charts, and more
- **Navigation** - Menus, breadcrumbs, tabs, and pagination

## 🎨 Customization

### Theming

Components use CSS variables for theming. Customize colors in your CSS:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
}
```

### Component Styling

All components accept `className` prop for custom styling:

```tsx
<Button className="bg-blue-500 hover:bg-blue-600">
  Custom Button
</Button>
```

## 🏗 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── CodePreview.tsx # Code preview with syntax highlighting  
│   └── ...
├── data/
│   └── components.ts   # Component metadata and examples
├── pages/
│   ├── Index.tsx       # Home page with component showcase
│   └── ComponentDetailPage.tsx # Individual component pages
└── lib/
    └── utils.ts        # Utility functions
```

## 🧩 Available Components

### Form Components
- Button (variants, sizes, icons)
- Input (text, email, password)
- Select (dropdowns, multi-select)
- Checkbox & Radio
- Form validation

### Data Components  
- Table (sorting, pagination, filtering)
- Charts (bar, line, pie, area)
- Lists & Grids
- Badges & Tags

### Layout Components
- Card & Container
- Tabs & Accordions 
- Modals & Dialogs
- Navigation & Breadcrumbs

### Feedback Components
- Alerts & Notifications
- Loading Spinners
- Progress Bars
- Tooltips

## 🔧 Development

### Adding New Components

1. Create component in `src/components/ui/`
2. Add component data to `src/data/components.ts`
3. Create examples in `src/components/LiveComponentPreview.tsx`
4. Test and document

### Component Data Structure

```typescript
{
  id: "button",
  title: "Button", 
  description: "Customizable button component...",
  category: "Form",
  basicCode: "import { Button } from '@/components/ui/button'...",
  props: [
    { name: "variant", type: "string", description: "Button style" }
  ],
  examples: [
    { id: "basic", title: "Basic Usage", code: "..." }
  ],
  installation: {
    dependencies: ["@radix-ui/react-slot"],
    steps: ["Install dependencies", "Copy component"]
  }
}
```

## 🚢 Deployment

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the excellent component foundation
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Lucide React](https://lucide.dev/) for beautiful icons