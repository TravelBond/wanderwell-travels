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
    <div className="min-h-screen bg-gradient-to-br from-background via-surface-elevated to-muted/30">
      {/* Header */}
      <header className="glass sticky top-0 z-50 border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 gradient-hero rounded-xl flex items-center justify-center shadow-md">
              <Plane className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">
              TravelConnect.ai
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/stays"
              className="text-foreground/70 hover:text-foreground transition-all duration-200 font-medium hover:scale-105"
            >
              Stays
            </Link>
            <Link
              to="/flights"
              className="text-foreground/70 hover:text-foreground transition-all duration-200 font-medium hover:scale-105"
            >
              Flights
            </Link>
            <Link
              to="/xperiences"
              className="text-foreground/70 hover:text-foreground transition-all duration-200 font-medium hover:scale-105"
            >
              Xperiences
            </Link>
            <Link
              to="/events"
              className="text-foreground/70 hover:text-foreground transition-all duration-200 font-medium hover:scale-105"
            >
              Events
            </Link>
            <Link
              to="/essentials"
              className="text-foreground/70 hover:text-foreground transition-all duration-200 font-medium hover:scale-105"
            >
              Essentials
            </Link>
            <Button variant="outline" className="hover-lift" onClick={() => setIsAuthModalOpen(true)}>
              Sign In
            </Button>
            <Link to="/vendors">
              <Button variant="premium" className="shadow-lg">
                Become a Travel Vendor
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="text-center max-w-5xl mx-auto animate-fade-in">
          <Badge variant="secondary" className="mb-8 px-4 py-2 text-sm font-medium shadow-soft">
            🚀 Powered by Advanced AI Technology
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
            Plan Your Perfect Trip with{" "}
            <span className="gradient-text">
              AI-Powered
            </span>{" "}
            Booking
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto">
            From luxury vacation rentals to unforgettable adventures, book everything with
            live previews, intelligent recommendations, and complete AI-generated itineraries.
          </p>

          {/* AI vs Manual Booking Choice */}
          <div className="flex flex-col lg:flex-row gap-6 justify-center mb-16 max-w-4xl mx-auto">
            <Card className="card-premium card-interactive flex-1 p-8 border-2 border-travel-ocean/20 hover:border-travel-ocean/40">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-travel-ocean to-travel-teal rounded-xl flex items-center justify-center shadow-md">
                  <Bot className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold">AI-Powered Planning</h3>
              </div>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                Share your dream destination, travel dates, and group size. Our AI creates
                personalized itineraries with curated accommodations, activities, and budget optimization.
              </p>
              <Link to="/ai-planner">
                <Button size="lg" variant="premium" className="w-full shadow-lg">
                  Start AI Planning
                </Button>
              </Link>
            </Card>

            <Card className="card-premium card-interactive flex-1 p-8 border-2 border-travel-coral/20 hover:border-travel-coral/40">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-travel-coral to-travel-sunset rounded-xl flex items-center justify-center shadow-md">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold">Custom Exploration</h3>
              </div>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                Browse our premium collection of stays, flights, and experiences with
                complete control over every aspect of your journey.
              </p>
              <Link to="/explore-services">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-2 border-travel-coral text-travel-coral hover:bg-travel-coral hover:text-white hover:shadow-md"
                >
                  Explore Manually
                </Button>
              </Link>
            </Card>
          </div>

          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center">
                <Shield className="h-4 w-4 text-success" />
              </div>
              <span className="font-medium">Bank-Level Security</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-travel-coral/10 rounded-lg flex items-center justify-center">
                <Clock className="h-4 w-4 text-travel-coral" />
              </div>
              <span className="font-medium">24/7 Premium Support</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-warning/10 rounded-lg flex items-center justify-center">
                <Star className="h-4 w-4 text-warning" />
              </div>
              <span className="font-medium">5-Star Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-surface-elevated to-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Everything You Need for Travel
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Book all aspects of your journey in one place with AI-powered
              recommendations, live previews, and premium service quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const getColorClasses = (color: string) => {
                switch (color) {
                  case 'travel-blue':
                    return { bg: 'bg-travel-ocean/10', text: 'text-travel-ocean', gradient: 'from-travel-ocean/5 to-travel-ocean/10' };
                  default:
                    return { bg: 'bg-travel-ocean/10', text: 'text-travel-ocean', gradient: 'from-travel-ocean/5 to-travel-ocean/10' };
                }
              };
              const colors = getColorClasses(service.color);
              return (
                <Card
                  key={index}
                  className={`card-premium card-interactive p-8 bg-gradient-to-br ${colors.gradient} hover:shadow-premium group`}
                >
                  <CardContent className="p-0">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${colors.bg} group-hover:scale-110 transition-transform duration-300 shadow-soft`}
                    >
                      <Icon className={`h-8 w-8 ${colors.text}`} />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 group-hover:text-foreground transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
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
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Advanced Features for Modern Travelers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Cutting-edge technology to enhance your booking experience and
              travel planning with professional-grade tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center group hover-lift">
                  <div className="w-20 h-20 gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-premium transition-all duration-300">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Travel Wallet & Rewards */}
      <section className="py-20 bg-gradient-to-r from-travel-ocean/5 via-travel-lavender/5 to-travel-coral/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Premium Travel Wallet & Rewards
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Earn exclusive digital rewards with every booking, referral, and milestone achievement.
              Use your premium travel wallet for instant bookings and access to exclusive deals worldwide.
            </p>

            <div className="grid md:grid-cols-2 gap-10">
              <Card className="card-premium card-interactive p-10 group">
                <div className="w-20 h-20 bg-gradient-to-br from-travel-ocean to-travel-teal rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-premium transition-all duration-300">
                  <Wallet className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">
                  Digital Travel Wallet
                </h3>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  Preload funds for instant bookings, track spending with detailed analytics, 
                  and unlock wallet-exclusive deals and upgrades.
                </p>
                <Button variant="premium" size="lg" className="shadow-lg">
                  Setup Premium Wallet
                </Button>
              </Card>

              <Card className="card-premium card-interactive p-10 group">
                <div className="w-20 h-20 bg-gradient-to-br from-travel-coral to-travel-sunset rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-premium transition-all duration-300">
                  <Gift className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Elite Rewards Program</h3>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  Earn premium coins for bookings, authentic reviews, and successful referrals. 
                  Redeem for travel credits, room upgrades, and exclusive experiences.
                </p>
                <Button variant="coral" size="lg" className="shadow-lg">
                  Join Elite Program
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Join thousands of satisfied travelers using AI to plan better trips, save
              money, and discover amazing experiences around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/ai-planner">
                <Button
                  size="xl"
                  variant="premium"
                  className="shadow-lg hover:shadow-premium"
                >
                  Start Planning with AI
                </Button>
              </Link>
              <Button 
                size="xl" 
                variant="outline" 
                className="border-2 hover:shadow-md"
              >
                Browse Manually
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-muted/50 to-surface-elevated border-t border-border/50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-12 h-12 gradient-hero rounded-2xl flex items-center justify-center shadow-md">
                <Plane className="h-7 w-7 text-white" />
              </div>
              <span className="text-2xl font-bold gradient-text">
                TravelConnect.ai
              </span>
            </div>
            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <Link
                to="/terms"
                className="hover:text-foreground transition-colors font-medium hover:scale-105 duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-foreground transition-colors font-medium hover:scale-105 duration-200"
              >
                Terms of Service
              </Link>
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="hover:text-foreground transition-colors font-medium hover:scale-105 duration-200"
              >
                Premium Support
              </button>
              <Link
                to="/document-download"
                className="hover:text-foreground transition-colors font-medium hover:scale-105 duration-200"
              >
                Documentation
              </Link>
              <Link
                to="/terms"
                className="hover:text-foreground transition-colors font-medium hover:scale-105 duration-200"
              >
                About Us
              </Link>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
            <p className="font-medium">
              © 2024 TravelConnect.ai. All rights reserved. Powered by Advanced AI Technology.
            </p>
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
