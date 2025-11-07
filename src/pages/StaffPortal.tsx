import { Hotel, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const StaffPortal = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary/90 to-primary/80 flex items-center justify-center p-4">
      <div className="max-w-5xl w-full">
        <div className="text-center space-y-8">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-2xl bg-accent/20 backdrop-blur-sm">
              <Hotel className="h-20 w-20 text-accent" />
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight">
              Staff Portal
            </h1>
            <p className="text-2xl text-white/90 font-light">
              Complete Hotel Management System
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-3xl mx-auto border border-white/20">
            <p className="text-white/90 text-lg mb-6">
              Access all management dashboards from one central hub. Choose your role to get started.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Button 
                onClick={() => navigate('/admin')}
                className="bg-white hover:bg-white/90 text-primary font-semibold py-6 group"
              >
                Admin
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                onClick={() => navigate('/reception')}
                className="bg-white hover:bg-white/90 text-primary font-semibold py-6 group"
              >
                Reception
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                onClick={() => navigate('/housekeeping')}
                className="bg-white hover:bg-white/90 text-primary font-semibold py-6 group"
              >
                Housekeeping
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                onClick={() => navigate('/maintenance')}
                className="bg-white hover:bg-white/90 text-primary font-semibold py-6 group"
              >
                Maintenance
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                onClick={() => navigate('/kitchen')}
                className="bg-white hover:bg-white/90 text-primary font-semibold py-6 group"
              >
                Kitchen
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="mt-6">
              <Button 
                variant="ghost"
                onClick={() => navigate('/')}
                className="text-white hover:text-white hover:bg-white/10"
              >
                ← Back to Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffPortal;
