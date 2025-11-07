import DashboardLayout from "@/components/DashboardLayout";
import StatCard from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { UtensilsCrossed, Clock, CheckCircle2, CalendarDays } from "lucide-react";

const KitchenDashboard = () => {
  const roomServiceOrders = [
    { 
      id: 1, 
      room: "305", 
      items: "Breakfast Combo, Coffee", 
      time: "08:30 AM",
      status: "Preparing"
    },
    { 
      id: 2, 
      room: "108", 
      items: "Club Sandwich, Fries, Coke", 
      time: "12:15 PM",
      status: "Ready"
    },
    { 
      id: 3, 
      room: "412", 
      items: "Caesar Salad, Pasta", 
      time: "01:00 PM",
      status: "Pending"
    },
    { 
      id: 4, 
      room: "210", 
      items: "Burger, Onion Rings", 
      time: "12:45 PM",
      status: "Preparing"
    },
  ];

  const tableReservations = [
    { id: 1, name: "Robert Wilson", guests: 4, time: "07:00 PM", status: "Confirmed" },
    { id: 2, name: "Emily Davis", guests: 2, time: "07:30 PM", status: "Confirmed" },
    { id: 3, name: "James Anderson", guests: 6, time: "08:00 PM", status: "Pending" },
    { id: 4, name: "Sarah Martinez", guests: 3, time: "08:30 PM", status: "Confirmed" },
  ];

  const getOrderStatusVariant = (status: string) => {
    switch (status) {
      case "Ready":
        return "default";
      case "Preparing":
        return "secondary";
      default:
        return "outline";
    }
  };

  return (
    <DashboardLayout title="Kitchen & Restaurant Dashboard">
      <div className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Active Orders"
            value="8"
            icon={UtensilsCrossed}
            variant="warning"
          />
          <StatCard
            title="Completed Today"
            value="42"
            icon={CheckCircle2}
            variant="success"
          />
          <StatCard
            title="Avg Prep Time"
            value="18min"
            icon={Clock}
            variant="info"
          />
          <StatCard
            title="Reservations"
            value="15"
            icon={CalendarDays}
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Room Service Orders</CardTitle>
              <Button className="bg-accent hover:bg-accent/90">New Order</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {roomServiceOrders.map((order) => (
                  <Card key={order.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-bold text-foreground">Room {order.room}</h3>
                          <p className="text-sm text-muted-foreground">{order.items}</p>
                          <p className="text-sm font-medium text-primary mt-1">Order Time: {order.time}</p>
                        </div>
                        <Badge variant={getOrderStatusVariant(order.status)}>
                          {order.status}
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        {order.status === "Pending" && (
                          <Button size="sm" className="flex-1">Start Preparing</Button>
                        )}
                        {order.status === "Preparing" && (
                          <Button size="sm" className="flex-1 bg-accent hover:bg-accent/90">
                            Mark Ready
                          </Button>
                        )}
                        {order.status === "Ready" && (
                          <Button size="sm" className="flex-1" variant="outline">
                            Dispatch
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Table Reservations</CardTitle>
              <Button className="bg-accent hover:bg-accent/90">Add Reservation</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tableReservations.map((reservation) => (
                  <div
                    key={reservation.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:border-primary/50 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-foreground">{reservation.name}</h3>
                        <Badge variant={reservation.status === "Confirmed" ? "default" : "outline"}>
                          {reservation.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>👥 {reservation.guests} guests</span>
                        <span>🕐 {reservation.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Today's Menu Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Most Ordered</h3>
                <p className="text-2xl font-bold text-accent">Club Sandwich</p>
                <p className="text-sm text-muted-foreground">32 orders today</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Revenue</h3>
                <p className="text-2xl font-bold text-green-600">$2,450</p>
                <p className="text-sm text-muted-foreground">From 42 orders</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Customer Rating</h3>
                <p className="text-2xl font-bold text-amber-500">4.8 ⭐</p>
                <p className="text-sm text-muted-foreground">Based on 28 reviews</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">Kitchen Status</h3>
                <p className="text-2xl font-bold text-green-600">On Time</p>
                <p className="text-sm text-muted-foreground">98% orders on schedule</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default KitchenDashboard;
