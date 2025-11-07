import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Waves, UtensilsCrossed, Bed, LogIn, LogOut, User } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();

  const rooms = [
    {
      id: 1,
      name: "Deluxe Suite",
      price: "$250",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
      description: "Luxurious suite with ocean view"
    },
    {
      id: 2,
      name: "Executive Room",
      price: "$180",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
      description: "Modern comfort with city views"
    },
    {
      id: 3,
      name: "Standard Room",
      price: "$120",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
      description: "Cozy and affordable elegance"
    }
  ];

  const handleBookRoom = () => {
    if (isAuthenticated) {
      navigate('/customer');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-primary">LuxeStay Hotel</h1>
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <Button variant="outline" onClick={() => navigate('/customer')}>
                  <User className="mr-2 h-4 w-4" />
                  {user?.name}
                </Button>
                <Button variant="ghost" onClick={logout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" onClick={() => navigate('/login')}>
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                </Button>
                <Button onClick={() => navigate('/signup')}>Sign Up</Button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-primary/70"></div>
        </div>
        <div className="relative z-10 text-white space-y-6 px-4">
          <h2 className="text-6xl md:text-7xl font-bold tracking-tight">
            Experience Luxury
          </h2>
          <p className="text-2xl text-white/90 max-w-2xl mx-auto">
            Your perfect getaway awaits with world-class amenities and exceptional service
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white" onClick={handleBookRoom}>
            Book Your Stay
          </Button>
        </div>
      </section>

      {/* Swimming Pool Section */}
      <section id="pool" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Waves className="h-10 w-10 text-accent" />
                <h3 className="text-4xl font-bold text-foreground">Swimming Pool</h3>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                Dive into relaxation at our infinity pool overlooking the city skyline. 
                Open daily from 6 AM to 10 PM with poolside bar service and luxury cabanas.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li>✓ Heated infinity pool</li>
                <li>✓ Private cabanas available</li>
                <li>✓ Poolside bar & restaurant</li>
                <li>✓ Towel & lounger service</li>
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80" 
                alt="Swimming Pool"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dining Section */}
      <section id="dining" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80" 
                alt="Restaurant"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <UtensilsCrossed className="h-10 w-10 text-accent" />
                <h3 className="text-4xl font-bold text-foreground">Fine Dining</h3>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                Savor exquisite cuisine crafted by world-renowned chefs. Our restaurant 
                offers both international and local specialties with an extensive wine selection.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li>✓ International & local cuisine</li>
                <li>✓ 24/7 room service</li>
                <li>✓ Rooftop bar with city views</li>
                <li>✓ Private dining rooms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Bed className="h-10 w-10 text-accent" />
              <h3 className="text-4xl font-bold text-foreground">Our Rooms</h3>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our selection of beautifully appointed rooms and suites
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <Card key={room.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={room.image} 
                  alt={room.name}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h4 className="text-2xl font-bold text-foreground mb-2">{room.name}</h4>
                  <p className="text-muted-foreground mb-4">{room.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-accent">{room.price}</span>
                    <Button onClick={handleBookRoom}>Book Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-2xl font-bold mb-4">LuxeStay Hotel</h4>
          <p className="text-white/80 mb-4">123 Luxury Avenue, Paradise City</p>
          <p className="text-white/80">Phone: +1 (555) 123-4567 | Email: info@luxestay.com</p>
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-white/60">&copy; 2025 LuxeStay Hotel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
