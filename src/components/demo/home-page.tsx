import { Code2, Palette, Layout, FileText, Zap, Grid3x3, Columns, Monitor, Settings, Database, Users } from "lucide-react";
import {
  Description,
  DescriptionItem,
  DescriptionSection,
} from "@/registry/ui/react/components/description/description";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/ui/react/components/ui/card";
import { Badge } from "@/registry/ui/react/components/ui/badge";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto p-6 space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4 py-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FileText className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold">Piperubio Component Registry</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Custom shadcn/ui component registry created and maintained by piperubio.
            Reusable React components with advanced features like unlimited columns, layout options, and smart spanning.
          </p>
          <div className="flex items-center justify-center gap-2 pt-4">
            <Badge variant="secondary">piperubio</Badge>
            <Badge variant="secondary">shadcn/ui</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">Responsive</Badge>
            <Badge variant="secondary">Unlimited Columns</Badge>
            <Badge variant="secondary">Layout Options</Badge>
          </div>
        </div>

        {/* Feature Overview */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Layout className="w-5 h-5 text-blue-500" />
                <CardTitle>Flexible Layouts</CardTitle>
              </div>
              <CardDescription>
                Support for horizontal and vertical layouts with unlimited columns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Horizontal layout (default grid)</li>
                <li>• Vertical layout (stacked items)</li>
                <li>• Up to 12 columns (no more 3-column limit)</li>
                <li>• Smart responsive behavior</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Grid3x3 className="w-5 h-5 text-green-500" />
                <CardTitle>Advanced Spanning</CardTitle>
              </div>
              <CardDescription>
                Flexible column spanning with "filled" and responsive options
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Numeric spans (1, 2, 3, 4...12)</li>
                <li>• "filled" span (remaining columns)</li>
                <li>• Responsive span objects</li>
                <li>• Auto-clamping to available columns</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-purple-500" />
                <CardTitle>Two Variants</CardTitle>
              </div>
              <CardDescription>
                Clean basic layout and structured bordered format
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Basic: minimal, clean design</li>
                <li>• Bordered: structured table format</li>
                <li>• Support for nested sections</li>
                <li>• Rich ReactNode children support</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Layout Examples Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Layout className="w-6 h-6 text-blue-500" />
            <h2 className="text-3xl font-bold">Layout Options</h2>
          </div>

          {/* Horizontal Layout Examples */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Columns className="w-4 h-4" />
                Horizontal Layout (Default)
              </CardTitle>
              <CardDescription>
                Items arranged in a responsive grid - perfect for traditional key-value displays
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Description layout="horizontal" columns={{ base: 1, md: 2, lg: 3 }}>
                <DescriptionItem label="Name">Juan Pérez</DescriptionItem>
                <DescriptionItem label="Email">juan@ejemplo.com</DescriptionItem>
                <DescriptionItem label="Phone">+1 234 567 8900</DescriptionItem>
                <DescriptionItem label="Address" span="filled">
                  <span className="bg-blue-50 px-2 py-1 rounded">
                    123 Calle Principal, Ciudad, País (spans remaining columns)
                  </span>
                </DescriptionItem>
                <DescriptionItem label="Department">Engineering</DescriptionItem>
                <DescriptionItem label="Role" span={2}>
                  <Badge>Senior Developer</Badge>
                  <Badge>Senior Developer</Badge>
                  <Badge>Senior Developer</Badge>
                  <Badge>Senior Developer</Badge>
                </DescriptionItem>
              </Description>

              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Code2 className="w-4 h-4" />
                  <span className="font-medium">Code</span>
                </div>
                <pre className="text-sm overflow-x-auto">
{`<Description layout="horizontal" columns={{ base: 1, md: 2, lg: 3 }}>
  <DescriptionItem label="Name">Juan Pérez</DescriptionItem>
  <DescriptionItem label="Email">juan@ejemplo.com</DescriptionItem>
  <DescriptionItem label="Phone">+1 234 567 8900</DescriptionItem>
  <DescriptionItem label="Address" span="filled">
    123 Calle Principal, Ciudad, País (spans remaining columns)
  </DescriptionItem>
  <DescriptionItem label="Department">Engineering</DescriptionItem>
  <DescriptionItem label="Role"><Badge>Senior Developer</Badge></DescriptionItem>
</Description>`}
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* Vertical Layout Examples */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Monitor className="w-4 h-4" />
                Vertical Layout
              </CardTitle>
              <CardDescription>
                Items stacked vertically - ideal for detailed information and mobile-first design
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Description layout="vertical" columns={{ base: 1, md: 2, lg: 3 }}>
                <DescriptionItem label="Name">Juan Pérez</DescriptionItem>
                <DescriptionItem label="Email">juan@ejemplo.com</DescriptionItem>
                <DescriptionItem label="Phone">+1 234 567 8900</DescriptionItem>
                <DescriptionItem label="Bio" span="filled">
                  <span className="bg-green-50 px-2 py-1 rounded">
                    Desarrollador full-stack con experiencia en React, Node.js y bases de datos. 
                    Especializado en arquitecturas modernas y desarrollo escalable.
                  </span>
                </DescriptionItem>
              </Description>

              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Code2 className="w-4 h-4" />
                  <span className="font-medium">Code</span>
                </div>
                <pre className="text-sm overflow-x-auto">
{`<Description layout="vertical" columns={{ base: 1, md: 2, lg: 3 }}>
  <DescriptionItem label="Name">Juan Pérez</DescriptionItem>
  <DescriptionItem label="Email">juan@ejemplo.com</DescriptionItem>
  <DescriptionItem label="Phone">+1 234 567 8900</DescriptionItem>
  <DescriptionItem label="Bio">
    Desarrollador full-stack con experiencia en React, Node.js y bases de datos.
  </DescriptionItem>
</Description>`}
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* Horizontal Bordered Layout */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-4 h-4" />
                Horizontal Layout - Bordered
              </CardTitle>
              <CardDescription>
                Traditional grid layout with borders - perfect for structured data presentation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Description layout="horizontal" variant="bordered" columns={{ base: 1, md: 2, lg: 3 }}>
                <DescriptionItem label="Server">Production Web Server</DescriptionItem>
                <DescriptionItem label="Environment">
                  <Badge variant="outline">Production</Badge>
                </DescriptionItem>
                <DescriptionItem label="Status">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Healthy</span>
                  </div>
                </DescriptionItem>
                <DescriptionItem label="CPU Usage">65%</DescriptionItem>
                <DescriptionItem label="Memory">8.2 GB / 16 GB</DescriptionItem>
                <DescriptionItem label="Uptime">45 days</DescriptionItem>
                <DescriptionItem label="Configuration" span="filled">
                  <div className="w-full">
                    <span className="bg-gray-50 px-3 py-2 rounded border block w-full">
                      nginx 1.24, Node.js 20.x, PM2 cluster mode (spans remaining columns)
                    </span>
                  </div>
                </DescriptionItem>
              </Description>

              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Code2 className="w-4 h-4" />
                  <span className="font-medium">Code</span>
                </div>
                <pre className="text-sm overflow-x-auto">
{`<Description layout="horizontal" variant="bordered" columns={{ base: 1, md: 2, lg: 3 }}>
  <DescriptionItem label="Server">Production Web Server</DescriptionItem>
  <DescriptionItem label="Environment"><Badge variant="outline">Production</Badge></DescriptionItem>
  <DescriptionItem label="Status">
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
      <span>Healthy</span>
    </div>
  </DescriptionItem>
  <DescriptionItem label="CPU Usage">65%</DescriptionItem>
  <DescriptionItem label="Memory">8.2 GB / 16 GB</DescriptionItem>
  <DescriptionItem label="Uptime">45 days</DescriptionItem>
  <DescriptionItem label="Configuration" span="filled">
    <div className="w-full">
      <span className="bg-gray-50 px-3 py-2 rounded border block w-full">
        nginx 1.24, Node.js 20.x, PM2 cluster mode (spans remaining columns)
      </span>
    </div>
  </DescriptionItem>
</Description>`}
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* Vertical Bordered Layout */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-4 h-4" />
                Vertical Layout - Bordered
              </CardTitle>
              <CardDescription>
                Structured vertical layout with borders - perfect for configuration details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Description layout="vertical" variant="bordered" columns={{ base: 1, md: 2, lg: 3 }}>
                <DescriptionItem label="Service">Cloud Database</DescriptionItem>
                <DescriptionItem label="Plan">
                  <Badge variant="outline">Professional</Badge>
                </DescriptionItem>
                <DescriptionItem label="Status">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Active</span>
                  </div>
                </DescriptionItem>
                <DescriptionItem label="Region" span="filled">US East (Virginia)</DescriptionItem>
              </Description>

              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Code2 className="w-4 h-4" />
                  <span className="font-medium">Code</span>
                </div>
                <pre className="text-sm overflow-x-auto">
{`<Description layout="vertical" variant="bordered" columns={{ base: 1, md: 2, lg: 3 }}>
  <DescriptionItem label="Service">Cloud Database</DescriptionItem>
  <DescriptionItem label="Plan"><Badge variant="outline">Professional</Badge></DescriptionItem>
  <DescriptionItem label="Status">
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
      <span>Active</span>
    </div>
  </DescriptionItem>
  <DescriptionItem label="Region">US East (Virginia)</DescriptionItem>
</Description>`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Advanced Spanning Examples */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Grid3x3 className="w-6 h-6 text-green-500" />
            <h2 className="text-3xl font-bold">Advanced Spanning & Unlimited Columns</h2>
          </div>

          {/* "Filled" Span Examples */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                "Filled" Span Usage
              </CardTitle>
              <CardDescription>
                Using span="filled" to occupy all remaining columns in the current row
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Description layout="horizontal" columns={{ base: 1, md: 3, lg: 4 }}>
                <DescriptionItem label="Name">María González</DescriptionItem>
                <DescriptionItem label="Email">maria@company.com</DescriptionItem>
                <DescriptionItem label="Department">Marketing</DescriptionItem>
                <DescriptionItem label="Full Bio" span="filled">
                  <span className="bg-amber-50 my-8 px-3 py-2 rounded border">
                    Marketing professional with 8+ years of experience in digital campaigns, 
                    brand management, and team leadership. Specialized in B2B marketing strategies 
                    and customer acquisition. (This spans all remaining columns automatically)
                  </span>
                </DescriptionItem>
                <DescriptionItem label="Skills">React, TypeScript</DescriptionItem>
                <DescriptionItem label="Location">Barcelona</DescriptionItem>
              </Description>

              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Code2 className="w-4 h-4" />
                  <span className="font-medium">Code</span>
                </div>
                <pre className="text-sm overflow-x-auto">
{`<Description layout="horizontal" columns={{ base: 1, md: 3, lg: 4 }}>
  <DescriptionItem label="Name">María González</DescriptionItem>
  <DescriptionItem label="Email">maria@company.com</DescriptionItem>
  <DescriptionItem label="Department">Marketing</DescriptionItem>
  <DescriptionItem label="Full Bio" span="filled">
    Marketing professional with 8+ years of experience... (spans remaining columns)
  </DescriptionItem>
  <DescriptionItem label="Skills">React, TypeScript</DescriptionItem>
  <DescriptionItem label="Location">Barcelona</DescriptionItem>
</Description>`}
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* Extended Column Support */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Grid3x3 className="w-4 h-4" />
                Extended Column Support (Up to 12 Columns)
              </CardTitle>
              <CardDescription>
                Demonstrating 6-column layout with various spans - no more 3-column limit!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Description layout="horizontal" columns={{ base: 2, md: 4, lg: 6 }}>
                <DescriptionItem label="ID">USR001</DescriptionItem>
                <DescriptionItem label="Name">Alex Johnson</DescriptionItem>
                <DescriptionItem label="Email">alex@tech.com</DescriptionItem>
                <DescriptionItem label="Phone">+1-555-0123</DescriptionItem>
                <DescriptionItem label="Department">Engineering</DescriptionItem>
                <DescriptionItem label="Team">Frontend</DescriptionItem>
                
                <DescriptionItem label="Address" span={4}>
                  <span className="bg-indigo-50 px-2 py-1 rounded">
                    456 Tech Street, Innovation District, Silicon Valley, CA 94043 (spans 4 columns)
                  </span>
                </DescriptionItem>
                <DescriptionItem label="Status" span={2}>
                  <Badge className="bg-green-100 text-green-800">Active Employee (spans 2 columns)</Badge>
                </DescriptionItem>

                <DescriptionItem label="Skills" span="filled">
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Astro</Badge>
                    <Badge variant="secondary">Tailwind</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                    <span className="text-muted-foreground ml-2">(spans all remaining columns)</span>
                  </div>
                </DescriptionItem>
              </Description>

              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Code2 className="w-4 h-4" />
                  <span className="font-medium">Code</span>
                </div>
                <pre className="text-sm overflow-x-auto">
{`<Description layout="horizontal" columns={{ base: 2, md: 4, lg: 6 }}>
  <DescriptionItem label="ID">USR001</DescriptionItem>
  <DescriptionItem label="Name">Alex Johnson</DescriptionItem>
  <DescriptionItem label="Email">alex@tech.com</DescriptionItem>
  <DescriptionItem label="Phone">+1-555-0123</DescriptionItem>
  <DescriptionItem label="Department">Engineering</DescriptionItem>
  <DescriptionItem label="Team">Frontend</DescriptionItem>
  
  <DescriptionItem label="Address" span={4}>
    456 Tech Street, Innovation District, Silicon Valley, CA 94043 (spans 4 columns)
  </DescriptionItem>
  <DescriptionItem label="Status" span={2}>
    <Badge>Active Employee (spans 2 columns)</Badge>
  </DescriptionItem>

  <DescriptionItem label="Skills" span="filled">
    <div className="flex flex-wrap gap-1">
      <Badge>React</Badge>
      <Badge>TypeScript</Badge>
      {/* ... more badges */}
    </div>
  </DescriptionItem>
</Description>`}
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* Responsive Spanning */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-4 h-4" />
                Responsive Spanning with Breakpoint Objects
              </CardTitle>
              <CardDescription>
                Using responsive span objects to control spanning across different screen sizes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Description layout="horizontal" columns={{ base: 1, md: 3, lg: 5 }}>
                <DescriptionItem label="Project">E-commerce Platform</DescriptionItem>
                <DescriptionItem label="Status">
                  <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>
                </DescriptionItem>
                <DescriptionItem label="Priority">High</DescriptionItem>
                <DescriptionItem 
                  label="Description" 
                  span={{ base: "filled", md: 2, lg: 3 }}
                >
                  <span className="bg-yellow-50 px-2 py-1 rounded border">
                    Modern e-commerce solution with advanced features (responsive span: base=filled, md=2, lg=3)
                  </span>
                </DescriptionItem>
                <DescriptionItem label="Lead">Sarah Wilson</DescriptionItem>
                <DescriptionItem 
                  label="Technologies" 
                  span={{ base: "filled", md: "filled", lg: 2 }}
                >
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="outline">Astro</Badge>
                    <Badge variant="outline">Prisma</Badge>
                    <Badge variant="outline">Stripe</Badge>
                    <span className="text-muted-foreground ml-2">(responsive: base/md=filled, lg=2)</span>
                  </div>
                </DescriptionItem>
                <DescriptionItem label="Budget">$50K</DescriptionItem>
                <DescriptionItem label="Timeline">Q1 2025</DescriptionItem>
                <DescriptionItem label="Team Size">5 developers</DescriptionItem>
              </Description>

              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Code2 className="w-4 h-4" />
                  <span className="font-medium">Code</span>
                </div>
                <pre className="text-sm overflow-x-auto">
{`<Description layout="horizontal" columns={{ base: 1, md: 3, lg: 5 }}>
  <DescriptionItem label="Project">E-commerce Platform</DescriptionItem>
  <DescriptionItem label="Status"><Badge>In Progress</Badge></DescriptionItem>
  <DescriptionItem label="Priority">High</DescriptionItem>
  
  {/* Responsive spanning: base=filled, md=2, lg=3 */}
  <DescriptionItem 
    label="Description" 
    span={{ base: "filled", md: 2, lg: 3 }}
  >
    Modern e-commerce solution with advanced features
  </DescriptionItem>
  
  <DescriptionItem label="Lead">Sarah Wilson</DescriptionItem>
  
  {/* Responsive spanning: base/md=filled, lg=2 */}
  <DescriptionItem 
    label="Technologies" 
    span={{ base: "filled", md: "filled", lg: 2 }}
  >
    <div className="flex flex-wrap gap-1">
      <Badge>Astro</Badge>
      <Badge>Prisma</Badge>
      <Badge>Stripe</Badge>
    </div>
  </DescriptionItem>
  
  <DescriptionItem label="Budget">$50K</DescriptionItem>
  <DescriptionItem label="Timeline">Q1 2025</DescriptionItem>
  <DescriptionItem label="Team Size">5 developers</DescriptionItem>
</Description>`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Bordered Variant Examples */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Palette className="w-6 h-6 text-purple-500" />
            <h2 className="text-3xl font-bold">Bordered Variant Examples</h2>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-4 h-4" />
                Complex Service Configuration
              </CardTitle>
              <CardDescription>
                Detailed service configuration with sections and advanced spanning in bordered format
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Description
                variant="bordered"
                columns={{ base: 1, md: 2, lg: 4 }}
              >
                <DescriptionItem label="Service Name">Advanced Analytics Service</DescriptionItem>
                <DescriptionItem label="Plan">
                  <Badge variant="outline">Enterprise</Badge>
                </DescriptionItem>
                <DescriptionItem label="Region">US West (Oregon)</DescriptionItem>
                <DescriptionItem label="Status">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Running</span>
                  </div>
                </DescriptionItem>

                <DescriptionItem label="Created At" span={2}>
                  2024-01-15 10:30:00 UTC (spans 2 columns)
                </DescriptionItem>
                <DescriptionItem label="Last Updated" span={2}>
                  2024-09-20 14:22:15 UTC (spans 2 columns)
                </DescriptionItem>

                <DescriptionItem label="Technical Specifications" span="filled">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-gray-50 rounded">
                    <div>
                      <div className="font-medium text-sm">Database</div>
                      <div className="text-muted-foreground text-sm">PostgreSQL 15</div>
                    </div>
                    <div>
                      <div className="font-medium text-sm">Memory</div>
                      <div className="text-muted-foreground text-sm">32 GB RAM</div>
                    </div>
                    <div>
                      <div className="font-medium text-sm">Storage</div>
                      <div className="text-muted-foreground text-sm">1 TB SSD</div>
                    </div>
                    <div>
                      <div className="font-medium text-sm">CPU</div>
                      <div className="text-muted-foreground text-sm">8 vCPUs</div>
                    </div>
                  </div>
                </DescriptionItem>

                <DescriptionSection label="Network Configuration">
                  <div className="space-y-2 text-sm">
                    <div><span className="font-medium">VPC:</span> vpc-12345678</div>
                    <div><span className="font-medium">Subnet:</span> subnet-abcd1234</div>
                    <div><span className="font-medium">Security Group:</span> sg-xyz789</div>
                    <div><span className="font-medium">Load Balancer:</span> alb-production-main</div>
                  </div>
                </DescriptionSection>

                <DescriptionSection label="Backup & Monitoring">
                  <div className="space-y-2 text-sm">
                    <div><span className="font-medium">Backup Schedule:</span> Daily at 2:00 AM UTC</div>
                    <div><span className="font-medium">Retention:</span> 30 days</div>
                    <div><span className="font-medium">Monitoring:</span> CloudWatch + Grafana</div>
                    <div><span className="font-medium">Alerts:</span> Slack + Email notifications</div>
                  </div>
                </DescriptionSection>
              </Description>

              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Code2 className="w-4 h-4" />
                  <span className="font-medium">Code</span>
                </div>
                <pre className="text-sm overflow-x-auto">
{`<Description variant="bordered" columns={{ base: 1, md: 2, lg: 4 }}>
  <DescriptionItem label="Service Name">Advanced Analytics Service</DescriptionItem>
  <DescriptionItem label="Plan"><Badge variant="outline">Enterprise</Badge></DescriptionItem>
  <DescriptionItem label="Region">US West (Oregon)</DescriptionItem>
  <DescriptionItem label="Status">
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
      <span>Running</span>
    </div>
  </DescriptionItem>

  <DescriptionItem label="Created At" span={2}>
    2024-01-15 10:30:00 UTC (spans 2 columns)
  </DescriptionItem>
  <DescriptionItem label="Last Updated" span={2}>
    2024-09-20 14:22:15 UTC (spans 2 columns)
  </DescriptionItem>

  <DescriptionItem label="Technical Specifications" span="filled">
    <div className="grid grid-cols-4 gap-4">
      <div><div className="font-medium">Database</div><div>PostgreSQL 15</div></div>
      <div><div className="font-medium">Memory</div><div>32 GB RAM</div></div>
      {/* ... more specs */}
    </div>
  </DescriptionItem>

  <DescriptionSection label="Network Configuration">
    <div className="space-y-2">
      <div><span className="font-medium">VPC:</span> vpc-12345678</div>
      {/* ... more config */}
    </div>
  </DescriptionSection>
</Description>`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* API Reference */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Complete API Reference</h2>

          <Card>
            <CardHeader>
              <CardTitle>Component Props</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Description Props</h4>
                  <div className="grid gap-2 text-sm">
                    <div className="grid grid-cols-4 gap-4 py-2 border-b font-medium">
                      <span>Prop</span>
                      <span>Type</span>
                      <span>Default</span>
                      <span>Description</span>
                    </div>
                    <div className="grid grid-cols-4 gap-4 py-2">
                      <code>variant</code>
                      <span className="text-muted-foreground">"basic" | "bordered"</span>
                      <span className="text-muted-foreground">"basic"</span>
                      <span>Visual style variant</span>
                    </div>
                    <div className="grid grid-cols-4 gap-4 py-2">
                      <code>layout</code>
                      <span className="text-muted-foreground">"horizontal" | "vertical"</span>
                      <span className="text-muted-foreground">"horizontal"</span>
                      <span>Layout direction for items</span>
                    </div>
                    <div className="grid grid-cols-4 gap-4 py-2">
                      <code>columns</code>
                      <span className="text-muted-foreground">ResponsiveColumnsConfig</span>
                      <span className="text-muted-foreground">{`{ base: 1, md: 2, lg: 3 }`}</span>
                      <span>Responsive columns (unlimited, up to 12)</span>
                    </div>
                    <div className="grid grid-cols-4 gap-4 py-2">
                      <code>className</code>
                      <span className="text-muted-foreground">string?</span>
                      <span className="text-muted-foreground">-</span>
                      <span>Additional CSS classes</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">DescriptionItem Props</h4>
                  <div className="grid gap-2 text-sm">
                    <div className="grid grid-cols-4 gap-4 py-2 border-b font-medium">
                      <span>Prop</span>
                      <span>Type</span>
                      <span>Default</span>
                      <span>Description</span>
                    </div>
                    <div className="grid grid-cols-4 gap-4 py-2">
                      <code>label</code>
                      <span className="text-muted-foreground">string</span>
                      <span className="text-muted-foreground">-</span>
                      <span>Field label</span>
                    </div>
                    <div className="grid grid-cols-4 gap-4 py-2">
                      <code>children</code>
                      <span className="text-muted-foreground">ReactNode</span>
                      <span className="text-muted-foreground">-</span>
                      <span>Field content (any React element)</span>
                    </div>
                    <div className="grid grid-cols-4 gap-4 py-2">
                      <code>span</code>
                      <span className="text-muted-foreground">number | "filled" | ResponsiveSpan</span>
                      <span className="text-muted-foreground">1</span>
                      <span>Column span (1-12, "filled", or responsive object)</span>
                    </div>
                    <div className="grid grid-cols-4 gap-4 py-2">
                      <code>className</code>
                      <span className="text-muted-foreground">string?</span>
                      <span className="text-muted-foreground">-</span>
                      <span>Additional CSS classes</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">DescriptionSection Props</h4>
                  <div className="grid gap-2 text-sm">
                    <div className="grid grid-cols-4 gap-4 py-2 border-b font-medium">
                      <span>Prop</span>
                      <span>Type</span>
                      <span>Default</span>
                      <span>Description</span>
                    </div>
                    <div className="grid grid-cols-4 gap-4 py-2">
                      <code>label</code>
                      <span className="text-muted-foreground">string</span>
                      <span className="text-muted-foreground">-</span>
                      <span>Section label</span>
                    </div>
                    <div className="grid grid-cols-4 gap-4 py-2">
                      <code>children</code>
                      <span className="text-muted-foreground">ReactNode</span>
                      <span className="text-muted-foreground">-</span>
                      <span>Section content</span>
                    </div>
                    <div className="grid grid-cols-4 gap-4 py-2">
                      <code>className</code>
                      <span className="text-muted-foreground">string?</span>
                      <span className="text-muted-foreground">-</span>
                      <span>Additional CSS classes</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">New Features</h4>
                  <div className="space-y-3">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h5 className="font-medium text-blue-900 mb-2">Layout Options</h5>
                      <p className="text-sm text-blue-800">
                        <code>layout="horizontal"</code> (default): Items arranged in responsive grid<br/>
                        <code>layout="vertical"</code>: Items stacked vertically, full width
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h5 className="font-medium text-green-900 mb-2">Unlimited Columns</h5>
                      <p className="text-sm text-green-800">
                        No more 3-column limit! Use up to 12 columns with full Tailwind CSS support.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h5 className="font-medium text-purple-900 mb-2">"Filled" Spanning</h5>
                      <p className="text-sm text-purple-800">
                        <code>span="filled"</code>: Automatically spans all remaining columns in the current row.
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h5 className="font-medium text-orange-900 mb-2">Responsive Spans</h5>
                      <p className="text-sm text-orange-800">
                        Use responsive objects: <code>span={`{{ base: "filled", md: 2, lg: 3 }}`}</code>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Best Practices */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Best Practices</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">✓ Do</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Use <code>layout="vertical"</code> for mobile-first or detailed information</p>
                <p>• Use <code>layout="horizontal"</code> for traditional key-value displays</p>
                <p>• Use <code>span="filled"</code> for content that should span remaining space</p>
                <p>• Leverage responsive spanning for complex layouts</p>
                <p>• Use up to 12 columns for complex data grids</p>
                <p>• Mix basic and bordered variants appropriately</p>
                <p>• Use ReactNode children for rich content (badges, icons, etc.)</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">✗ Don't</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Mix variants within the same logical section</p>
                <p>• Use too many columns on small screens</p>
                <p>• Overcomplicate simple data with too many columns</p>
                <p>• Forget that spans are automatically clamped to available columns</p>
                <p>• Use vertical layout when horizontal would be more readable</p>
                <p>• Ignore responsive considerations when using multiple columns</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
