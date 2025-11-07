import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import DashboardLayout from "@/components/DashboardLayout";
import StatCard from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, CreditCard, Star, Gift } from "lucide-react";

const CustomerDashboard = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);
  const bookings = [
    { 
      id: 1, 
      room: "Deluxe Suite - Room 305", 
      checkIn: "Jan 15, 2025", 
      checkOut: "Jan 18, 2025",
      status: "Upcoming",
      amount: "$750"
    },
    { 
      id: 2, 
      room: "Standard Room - Room 108", 
      checkIn: "Dec 20, 2024", 
      checkOut: "Dec 23, 2024",
      status: "Completed",
      amount: "$450"
    },
  ];

  return (
    <DashboardLayout title="My Account">
      <div className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Active Bookings"
            value="1"
            icon={Calendar}
            variant="success"
          />
          <StatCard
            title="Total Spent"
            value="$3,450"
            icon={CreditCard}
            variant="info"
          />
          <StatCard
            title="Loyalty Points"
            value="1,250"
            icon={Star}
            variant="warning"
          />
          <StatCard
            title="Rewards Available"
            value="3"
            icon={Gift}
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>My Bookings</CardTitle>
              <Button className="bg-accent hover:bg-accent/90">New Booking</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {bookings.map((booking) => (
                  <Card key={booking.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-bold text-foreground mb-1">{booking.room}</h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>📅 {booking.checkIn}</span>
                            <span>→</span>
                            <span>📅 {booking.checkOut}</span>
                          </div>
                        </div>
                        <Badge variant={booking.status === "Upcoming" ? "default" : "secondary"}>
                          {booking.status}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-2xl font-bold text-accent">{booking.amount}</p>
                        <div className="flex gap-2">
                          {booking.status === "Upcoming" && (
                            <>
                              <Button size="sm" variant="outline">Modify</Button>
                              <Button size="sm" variant="outline">Cancel</Button>
                            </>
                          )}
                          <Button size="sm">View Details</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Loyalty Rewards</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg border border-accent/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">Gold Member</span>
                    <Star className="h-5 w-5 text-accent fill-accent" />
                  </div>
                  <p className="text-3xl font-bold text-accent mb-1">1,250 pts</p>
                  <p className="text-xs text-muted-foreground">750 points to Platinum</p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-foreground">Available Rewards:</h4>
                  <div className="space-y-2">
                    <div className="p-3 border rounded-lg hover:border-accent/50 transition-colors cursor-pointer">
                      <p className="font-medium text-sm text-foreground">Free Room Upgrade</p>
                      <p className="text-xs text-muted-foreground">500 points</p>
                    </div>
                    <div className="p-3 border rounded-lg hover:border-accent/50 transition-colors cursor-pointer">
                      <p className="font-medium text-sm text-foreground">Complimentary Breakfast</p>
                      <p className="text-xs text-muted-foreground">300 points</p>
                    </div>
                    <div className="p-3 border rounded-lg hover:border-accent/50 transition-colors cursor-pointer">
                      <p className="font-medium text-sm text-foreground">Late Checkout</p>
                      <p className="text-xs text-muted-foreground">200 points</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-accent hover:bg-accent/90">
                  Book a Room
                </Button>
                <Button variant="outline" className="w-full">
                  View Room Options
                </Button>
                <Button variant="outline" className="w-full">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CustomerDashboard;
