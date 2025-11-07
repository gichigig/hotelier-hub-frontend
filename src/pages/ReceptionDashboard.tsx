import DashboardLayout from "@/components/DashboardLayout";
import StatCard from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { UserCheck, UserX, Key, Calendar } from "lucide-react";

const ReceptionDashboard = () => {
  const arrivals = [
    { id: 1, guest: "Emily Davis", room: "301", time: "14:00", status: "Expected" },
    { id: 2, guest: "Robert Wilson", room: "205", time: "15:30", status: "Checked In" },
    { id: 3, guest: "Lisa Anderson", room: "410", time: "16:00", status: "Expected" },
  ];

  const departures = [
    { id: 1, guest: "Michael Chen", room: "108", time: "11:00", status: "Pending" },
    { id: 2, guest: "Jessica Taylor", room: "312", time: "10:30", status: "Checked Out" },
    { id: 3, guest: "David Martinez", room: "215", time: "12:00", status: "Pending" },
  ];

  return (
    <DashboardLayout title="Reception Dashboard">
      <div className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Today's Arrivals"
            value="12"
            icon={UserCheck}
            variant="success"
          />
          <StatCard
            title="Today's Departures"
            value="8"
            icon={UserX}
            variant="info"
          />
          <StatCard
            title="Rooms Available"
            value="45"
            icon={Key}
          />
          <StatCard
            title="Walk-in Bookings"
            value="3"
            icon={Calendar}
            variant="warning"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Today's Arrivals</CardTitle>
              <Button className="bg-accent hover:bg-accent/90">Quick Check-in</Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Guest Name</TableHead>
                    <TableHead>Room</TableHead>
                    <TableHead>Expected Time</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {arrivals.map((arrival) => (
                    <TableRow key={arrival.id}>
                      <TableCell className="font-medium">{arrival.guest}</TableCell>
                      <TableCell>{arrival.room}</TableCell>
                      <TableCell>{arrival.time}</TableCell>
                      <TableCell>
                        <Badge
                          variant={arrival.status === "Checked In" ? "default" : "secondary"}
                        >
                          {arrival.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" disabled={arrival.status === "Checked In"}>
                          Check In
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Today's Departures</CardTitle>
              <Button className="bg-accent hover:bg-accent/90">Quick Check-out</Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Guest Name</TableHead>
                    <TableHead>Room</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {departures.map((departure) => (
                    <TableRow key={departure.id}>
                      <TableCell className="font-medium">{departure.guest}</TableCell>
                      <TableCell>{departure.room}</TableCell>
                      <TableCell>{departure.time}</TableCell>
                      <TableCell>
                        <Badge
                          variant={departure.status === "Checked Out" ? "default" : "secondary"}
                        >
                          {departure.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" disabled={departure.status === "Checked Out"}>
                          Check Out
                        </Button>
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

export default ReceptionDashboard;
