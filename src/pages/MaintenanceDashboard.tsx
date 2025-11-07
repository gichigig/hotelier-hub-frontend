import DashboardLayout from "@/components/DashboardLayout";
import StatCard from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Wrench, AlertTriangle, CheckCircle2, Clock } from "lucide-react";

const MaintenanceDashboard = () => {
  const issues = [
    { 
      id: 1, 
      room: "202", 
      issue: "AC unit malfunction", 
      priority: "High", 
      status: "In Progress",
      reported: "2 hours ago"
    },
    { 
      id: 2, 
      room: "305", 
      issue: "Leaking faucet", 
      priority: "Medium", 
      status: "Pending",
      reported: "4 hours ago"
    },
    { 
      id: 3, 
      room: "110", 
      issue: "Broken window latch", 
      priority: "Low", 
      status: "Completed",
      reported: "1 day ago"
    },
    { 
      id: 4, 
      room: "401", 
      issue: "TV not working", 
      priority: "Medium", 
      status: "Pending",
      reported: "30 minutes ago"
    },
    { 
      id: 5, 
      room: "208", 
      issue: "Door lock issue", 
      priority: "High", 
      status: "In Progress",
      reported: "1 hour ago"
    },
  ];

  const getPriorityVariant = (priority: string) => {
    switch (priority) {
      case "High":
        return "destructive";
      case "Medium":
        return "secondary";
      default:
        return "outline";
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Completed":
        return "default";
      case "In Progress":
        return "secondary";
      default:
        return "outline";
    }
  };

  return (
    <DashboardLayout title="Maintenance Dashboard">
      <div className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Open Issues"
            value="12"
            icon={AlertTriangle}
            variant="warning"
          />
          <StatCard
            title="In Progress"
            value="5"
            icon={Clock}
            variant="info"
          />
          <StatCard
            title="Completed Today"
            value="8"
            icon={CheckCircle2}
            variant="success"
          />
          <StatCard
            title="Avg Response Time"
            value="45min"
            icon={Wrench}
          />
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Active Maintenance Requests</CardTitle>
            <Button className="bg-accent hover:bg-accent/90">Report New Issue</Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Room</TableHead>
                  <TableHead>Issue</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Reported</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {issues.map((issue) => (
                  <TableRow key={issue.id}>
                    <TableCell className="font-medium">Room {issue.room}</TableCell>
                    <TableCell>{issue.issue}</TableCell>
                    <TableCell>
                      <Badge variant={getPriorityVariant(issue.priority)}>
                        {issue.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusVariant(issue.status)}>
                        {issue.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{issue.reported}</TableCell>
                    <TableCell>
                      {issue.status === "Pending" && (
                        <Button size="sm">Assign</Button>
                      )}
                      {issue.status === "In Progress" && (
                        <Button size="sm" className="bg-accent hover:bg-accent/90">
                          Complete
                        </Button>
                      )}
                      {issue.status === "Completed" && (
                        <Button size="sm" variant="outline" disabled>
                          Done
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Rooms Out of Service</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-semibold text-foreground">Room 202</p>
                    <p className="text-sm text-muted-foreground">AC unit replacement in progress</p>
                  </div>
                  <Badge variant="destructive">Out of Service</Badge>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-semibold text-foreground">Room 315</p>
                    <p className="text-sm text-muted-foreground">Bathroom renovation</p>
                  </div>
                  <Badge variant="destructive">Out of Service</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Completions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-semibold text-foreground">Room 110</p>
                    <p className="text-sm text-muted-foreground">Window latch repaired</p>
                  </div>
                  <span className="text-sm text-muted-foreground">1 day ago</span>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-semibold text-foreground">Room 225</p>
                    <p className="text-sm text-muted-foreground">Light fixtures replaced</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2 days ago</span>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-semibold text-foreground">Lobby</p>
                    <p className="text-sm text-muted-foreground">Carpet cleaning completed</p>
                  </div>
                  <span className="text-sm text-muted-foreground">3 days ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MaintenanceDashboard;
