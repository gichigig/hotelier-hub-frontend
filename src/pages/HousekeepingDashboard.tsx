import DashboardLayout from "@/components/DashboardLayout";
import StatCard from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, AlertCircle, Bed } from "lucide-react";

const HousekeepingDashboard = () => {
  const rooms = [
    { number: "101", status: "cleaned", priority: "normal", notes: "-" },
    { number: "102", status: "in-progress", priority: "high", notes: "Extra towels needed" },
    { number: "103", status: "pending", priority: "urgent", notes: "Guest requested early cleaning" },
    { number: "201", status: "cleaned", priority: "normal", notes: "-" },
    { number: "202", status: "maintenance", priority: "high", notes: "AC unit needs repair" },
    { number: "203", status: "pending", priority: "normal", notes: "-" },
    { number: "301", status: "in-progress", priority: "normal", notes: "-" },
    { number: "302", status: "pending", priority: "high", notes: "VIP guest" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "cleaned":
        return "default";
      case "in-progress":
        return "secondary";
      case "pending":
        return "outline";
      case "maintenance":
        return "destructive";
      default:
        return "outline";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "text-red-600";
      case "high":
        return "text-amber-600";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <DashboardLayout title="Housekeeping Dashboard">
      <div className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Rooms Cleaned"
            value="24"
            icon={CheckCircle}
            variant="success"
          />
          <StatCard
            title="In Progress"
            value="8"
            icon={Clock}
            variant="warning"
          />
          <StatCard
            title="Pending Tasks"
            value="15"
            icon={AlertCircle}
            variant="info"
          />
          <StatCard
            title="Total Rooms"
            value="150"
            icon={Bed}
          />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Room Status Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {rooms.map((room) => (
                <Card key={room.number} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">Room {room.number}</h3>
                        <p className={`text-sm font-medium ${getPriorityColor(room.priority)}`}>
                          {room.priority.charAt(0).toUpperCase() + room.priority.slice(1)} Priority
                        </p>
                      </div>
                      <Badge variant={getStatusColor(room.status)}>
                        {room.status.split("-").map(word => 
                          word.charAt(0).toUpperCase() + word.slice(1)
                        ).join(" ")}
                      </Badge>
                    </div>
                    
                    {room.notes !== "-" && (
                      <p className="text-sm text-muted-foreground mb-3">{room.notes}</p>
                    )}
                    
                    <div className="flex gap-2">
                      {room.status === "pending" && (
                        <Button size="sm" className="flex-1">Start Task</Button>
                      )}
                      {room.status === "in-progress" && (
                        <Button size="sm" className="flex-1 bg-accent hover:bg-accent/90">
                          Mark Complete
                        </Button>
                      )}
                      {room.status === "cleaned" && (
                        <Button size="sm" variant="outline" className="flex-1" disabled>
                          Completed
                        </Button>
                      )}
                      {room.status === "maintenance" && (
                        <Button size="sm" variant="destructive" className="flex-1" disabled>
                          Maintenance
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default HousekeepingDashboard;
