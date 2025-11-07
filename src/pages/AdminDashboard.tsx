import DashboardLayout from "@/components/DashboardLayout";
import StatCard from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Bed, Users, DollarSign, TrendingUp, Plus, Edit, Trash2 } from "lucide-react";

const AdminDashboard = () => {
  const rooms = [
    { id: 1, number: "101", type: "Deluxe", price: "$250", status: "Available" },
    { id: 2, number: "102", type: "Suite", price: "$450", status: "Occupied" },
    { id: 3, number: "103", type: "Standard", price: "$150", status: "Available" },
    { id: 4, number: "201", type: "Deluxe", price: "$250", status: "Maintenance" },
    { id: 5, number: "202", type: "Suite", price: "$450", status: "Available" },
  ];

  const bookings = [
    { id: 1, guest: "John Smith", room: "102", checkIn: "2025-01-15", checkOut: "2025-01-18", amount: "$1,350" },
    { id: 2, guest: "Sarah Johnson", room: "305", checkIn: "2025-01-16", checkOut: "2025-01-20", amount: "$1,000" },
    { id: 3, guest: "Mike Brown", room: "201", checkIn: "2025-01-17", checkOut: "2025-01-19", amount: "$500" },
  ];

  return (
    <DashboardLayout title="Admin Dashboard">
      <div className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Rooms"
            value="150"
            icon={Bed}
            trend={{ value: "5% from last month", positive: true }}
          />
          <StatCard
            title="Active Bookings"
            value="87"
            icon={Users}
            trend={{ value: "12% from last month", positive: true }}
            variant="success"
          />
          <StatCard
            title="Revenue (MTD)"
            value="$45,250"
            icon={DollarSign}
            trend={{ value: "8% from last month", positive: true }}
            variant="info"
          />
          <StatCard
            title="Occupancy Rate"
            value="78%"
            icon={TrendingUp}
            trend={{ value: "3% from last month", positive: false }}
            variant="warning"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Room Management</CardTitle>
              <Button className="bg-accent hover:bg-accent/90">
                <Plus className="h-4 w-4 mr-2" />
                Add Room
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Room</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rooms.map((room) => (
                    <TableRow key={room.id}>
                      <TableCell className="font-medium">{room.number}</TableCell>
                      <TableCell>{room.type}</TableCell>
                      <TableCell>{room.price}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            room.status === "Available"
                              ? "default"
                              : room.status === "Occupied"
                              ? "secondary"
                              : "destructive"
                          }
                        >
                          {room.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="ghost">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Guest</TableHead>
                    <TableHead>Room</TableHead>
                    <TableHead>Check-in</TableHead>
                    <TableHead>Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bookings.map((booking) => (
                    <TableRow key={booking.id}>
                      <TableCell className="font-medium">{booking.guest}</TableCell>
                      <TableCell>{booking.room}</TableCell>
                      <TableCell>{booking.checkIn}</TableCell>
                      <TableCell className="text-green-600 font-semibold">
                        {booking.amount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
