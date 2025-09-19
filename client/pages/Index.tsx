import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import AuthModal from "@/components/AuthModal";
import {
  Plane,
  Home,
  Mountain,
  Calendar,
  Ticket,
  Wallet,
  Gift,
  Video,
  TrendingUp,
  MapPin,
  Sparkles,
  Bot,
  Clock,
  Shield,
  Users,
  Star,
} from "lucide-react";

export default function Index() {
  console.log("📍 Index component rendering");
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const services = [
    {
      icon: Home,
      title: "Vacation Rentals",
      description: "Beautiful properties worldwide with live virtual tours",
      color: "travel-blue",
    },
    {
      icon: Plane,
      title: "Flights & Transport",
      description: "Best deals on flights, trains, and local commute",
      color: "travel-orange",
    },
    {
      icon: Mountain,
      title: "Experiences",
      description: "Adventure sports, theme parks, food tours & camping",
      color: "travel-green",
    },
    {
      icon: Ticket,
      title: "Events",
      description: "Concerts, festivals, sports tickets & competitions",
      color: "travel-purple",
    },
    {
      icon: Gift,
      title: "Travel Essentials",
      description: "Accessories, gear, and everything you need",
      color: "travel-blue",
    },
  ];

  const features = [
    {
      icon: Video,
      title: "Live Streaming",
      description:
        "Request live demos and virtual property tours before booking",
    },
    {
      icon: TrendingUp,
      title: "AI Promo Builder",
      description:
        "Smart promotions based on your behavior and unsold inventory",
    },
    {
      icon: MapPin,
      title: "Traveler's Radar",
      description:
        "Discover nearby attractions within 50km of your destination",
    },
    {
      icon: Calendar,
      title: "Smart Calendar",
      description: "Prevents double bookings across all platforms",
    },
    {
      icon: Wallet,
      title: "Travel Wallet",
      description: "Digital wallet with rewards and instant booking",
    },
    {
      icon: Sparkles,
      title: "Rewards System",
      description: "Earn digital coins for bookings and referrals",
    },
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      {/* Header */}
      <header style={{ 
        borderBottom: '1px solid #e2e8f0', 
        backgroundColor: 'rgba(255, 255, 255, 0.95)', 
        backdropFilter: 'blur(8px)', 
        position: 'sticky', 
        top: 0, 
        zIndex: 50 
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '1rem', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ 
              width: '2rem', 
              height: '2rem', 
              background: 'linear-gradient(45deg, #2563eb, #7c3aed)', 
              borderRadius: '0.5rem', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <Plane style={{ height: '1.25rem', width: '1.25rem', color: 'white' }} />
            </div>
            <span style={{ 
              fontSize: '1.25rem', 
              fontWeight: 'bold', 
              background: 'linear-gradient(45deg, #2563eb, #7c3aed)', 
              WebkitBackgroundClip: 'text', 
              WebkitTextFillColor: 'transparent' 
            }}>
              Traveltheworld.ai
            </span>
          </div>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <Link
              to="/stays"
              style={{ color: '#64748b', textDecoration: 'none' }}
            >
              Stays
            </Link>
            <Link
              to="/flights"
              style={{ color: '#64748b', textDecoration: 'none' }}
            >
              Flights
            </Link>
            <Link
              to="/xperiences"
              style={{ color: '#64748b', textDecoration: 'none' }}
            >
              Xperiences
            </Link>
            <button 
              onClick={() => setIsAuthModalOpen(true)}
              style={{
                padding: '0.5rem 1rem',
                border: '1px solid #2563eb',
                backgroundColor: 'transparent',
                color: '#2563eb',
                borderRadius: '0.375rem',
                cursor: 'pointer'
              }}
            >
              Sign In
            </button>
            <Link to="/vendors">
              <button style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#2563eb',
                color: 'white',
                border: 'none',
                borderRadius: '0.375rem',
                cursor: 'pointer'
              }}>
                Become a Travel Vendor
              </button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '64rem', margin: '0 auto' }}>
          <div style={{ 
            backgroundColor: '#fbbf24', 
            color: '#92400e', 
            padding: '0.5rem 1rem', 
            borderRadius: '1rem', 
            display: 'inline-block', 
            marginBottom: '1.5rem' 
          }}>
            🚀 Powered by AI Technology
          </div>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem',
            background: 'linear-gradient(45deg, #2563eb, #7c3aed, #ea580c)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Plan Your Perfect Trip with{" "}
            <span style={{ 
              background: 'linear-gradient(45deg, #2563eb, #7c3aed, #ea580c)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent' 
            }}>
              AI-Powered
            </span>{" "}
            Booking
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#64748b', 
            marginBottom: '2rem', 
            lineHeight: '1.75' 
          }}>
            From vacation rentals to adventure experiences, book everything with
            live demos, smart deals, and complete AI-generated itineraries.
          </p>

          {/* AI vs Manual Booking Choice */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1rem', 
            justifyContent: 'center', 
            marginBottom: '3rem',
            maxWidth: '48rem',
            margin: '0 auto'
          }}>
            <div style={{ 
              flex: 1, 
              maxWidth: '24rem', 
              padding: '1.5rem', 
              border: '2px solid #3b82f6', 
              borderRadius: '0.5rem',
              backgroundColor: 'white',
              cursor: 'pointer' 
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ 
                  width: '2.5rem', 
                  height: '2.5rem', 
                  backgroundColor: '#dbeafe', 
                  borderRadius: '0.5rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  <Bot style={{ height: '1.25rem', width: '1.25rem', color: '#2563eb' }} />
                </div>
                <h3 style={{ fontWeight: '600' }}>Book with AI</h3>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '1rem' }}>
                Tell us your destination, dates, and travelers. We'll create
                complete itineraries with budget options.
              </p>
              <Link to="/ai-planner">
                <button style={{
                  width: '100%',
                  backgroundColor: '#2563eb',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  border: 'none',
                  borderRadius: '0.375rem',
                  cursor: 'pointer',
                  fontWeight: '500'
                }}>
                  Start AI Planning
                </button>
              </Link>
            </div>

            <div style={{ 
              flex: 1, 
              maxWidth: '24rem', 
              padding: '1.5rem', 
              border: '2px solid #ea580c', 
              borderRadius: '0.5rem',
              backgroundColor: 'white',
              cursor: 'pointer' 
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ 
                  width: '2.5rem', 
                  height: '2.5rem', 
                  backgroundColor: '#fed7aa', 
                  borderRadius: '0.5rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  <Users style={{ height: '1.25rem', width: '1.25rem', color: '#ea580c' }} />
                </div>
                <h3 style={{ fontWeight: '600' }}>Book Manually</h3>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '1rem' }}>
                Browse and book each service individually with full control over
                your travel choices.
              </p>
              <Link to="/explore-services">
                <button style={{
                  width: '100%',
                  backgroundColor: 'transparent',
                  color: '#ea580c',
                  padding: '0.75rem 1.5rem',
                  border: '1px solid #ea580c',
                  borderRadius: '0.375rem',
                  cursor: 'pointer',
                  fontWeight: '500'
                }}>
                  Explore Services
                </button>
              </Link>
            </div>
          </div>

          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '1.5rem', 
            fontSize: '0.875rem', 
            color: '#64748b' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Shield style={{ height: '1rem', width: '1rem' }} />
              <span>Secure Booking</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Clock style={{ height: '1rem', width: '1rem' }} />
              <span>24/7 Support</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Star style={{ height: '1rem', width: '1rem' }} />
              <span>5-Star Rated</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need for Travel
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Book all aspects of your journey in one place with AI-powered
              recommendations and live previews.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              const getColorClasses = (color: string) => {
                switch (color) {
                  case 'travel-blue':
                    return { bg: 'bg-travel-blue/10', text: 'text-travel-blue' };
                  case 'travel-orange':
                    return { bg: 'bg-travel-orange/10', text: 'text-travel-orange' };
                  case 'travel-green':
                    return { bg: 'bg-travel-green/10', text: 'text-travel-green' };
                  case 'travel-purple':
                    return { bg: 'bg-travel-purple/10', text: 'text-travel-purple' };
                  default:
                    return { bg: 'bg-travel-blue/10', text: 'text-travel-blue' };
                }
              };
              const colors = getColorClasses(service.color);
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow border-0 bg-white/80 backdrop-blur"
                >
                  <CardContent className="p-0">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${colors.bg}`}
                    >
                      <Icon className={`h-6 w-6 ${colors.text}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced Features for Modern Travelers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge technology to enhance your booking experience and
              travel planning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-travel-blue/10 to-travel-purple/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-travel-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Travel Wallet & Rewards */}
      <section className="bg-gradient-to-r from-travel-blue/5 via-travel-purple/5 to-travel-orange/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Travel Wallet & Rewards
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Earn digital coins with every booking, referral, and achievement.
              Use your travel wallet for instant bookings and exclusive deals.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-0 bg-white/80 backdrop-blur">
                <div className="w-16 h-16 bg-travel-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Wallet className="h-8 w-8 text-travel-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Digital Travel Wallet
                </h3>
                <p className="text-muted-foreground mb-4">
                  Preload funds and book instantly. Track spending and get
                  exclusive wallet-only deals.
                </p>
                <Button variant="outline">Setup Wallet</Button>
              </Card>

              <Card className="p-8 border-0 bg-white/80 backdrop-blur">
                <div className="w-16 h-16 bg-travel-orange/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Gift className="h-8 w-8 text-travel-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Rewards Program</h3>
                <p className="text-muted-foreground mb-4">
                  Earn coins for bookings, reviews, referrals. Redeem for travel
                  credits and upgrades.
                </p>
                <Button variant="outline">Join Rewards</Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of travelers using AI to plan better trips, save
            money, and discover amazing experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/ai-planner">
              <Button
                size="lg"
                className="bg-travel-blue hover:bg-travel-blue/90"
              >
                Start Planning with AI
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              Browse Manually
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-travel-blue to-travel-purple rounded-lg flex items-center justify-center">
                <Plane className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-travel-blue to-travel-purple bg-clip-text text-transparent">
                Traveltheworld.ai
              </span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <Link
                to="/terms"
                className="hover:text-foreground transition-colors"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="hover:text-foreground transition-colors"
              >
                Terms
              </Link>
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="hover:text-foreground transition-colors"
              >
                Support
              </button>
              <Link
                to="/document-download"
                className="hover:text-foreground transition-colors"
              >
                SRS Document
              </Link>
              <Link
                to="/terms"
                className="hover:text-foreground transition-colors"
              >
                About
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 Traveltheworld.ai. All rights reserved. Powered by AI
            technology.
          </div>
        </div>
      </footer>

      {/* Authentication Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        defaultTab="signin"
      />
    </div>
  );
}
