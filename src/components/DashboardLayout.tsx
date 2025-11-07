import { ReactNode } from "react";
import { 
  LayoutDashboard, 
  Users, 
  Bed, 
  Wrench, 
  UtensilsCrossed,
  UserCircle,
  Hotel
} from "lucide-react";
import { NavLink } from "@/components/NavLink";

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
}

const dashboards = [
  { name: "Admin", path: "/admin", icon: LayoutDashboard },
  { name: "Reception", path: "/reception", icon: Hotel },
  { name: "Housekeeping", path: "/housekeeping", icon: Bed },
  { name: "Maintenance", path: "/maintenance", icon: Wrench },
  { name: "Kitchen", path: "/kitchen", icon: UtensilsCrossed },
  { name: "Customer", path: "/customer", icon: UserCircle },
];

export default function DashboardLayout({ children, title }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-secondary/30">
      <nav className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Hotel className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                LuxeStay Hotel
              </span>
            </div>
            <div className="flex gap-1">
              {dashboards.map((dashboard) => (
                <NavLink
                  key={dashboard.path}
                  to={dashboard.path}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all text-muted-foreground hover:text-foreground hover:bg-secondary"
                  activeClassName="bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                >
                  <dashboard.icon className="h-4 w-4" />
                  <span className="hidden md:inline">{dashboard.name}</span>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-foreground">{title}</h1>
        {children}
      </main>
    </div>
  );
}
