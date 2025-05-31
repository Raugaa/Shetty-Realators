
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Home, Mail, Phone, MapPin, Clock, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Map from "@/components/Map";
import LoadingBar from "@/components/LoadingBar";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@sudhirrealtors.com", "sales@sudhirrealtors.com"],
      color: "bg-blue-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      color: "bg-green-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Real Estate Avenue", "City, State 12345", "United States"],
      color: "bg-purple-500"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM", "Sun: By appointment"],
      color: "bg-orange-500"
    }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <LoadingBar />
      <div className="animated-bg min-h-screen transition-all duration-700">
        <Navigation isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Get In <span className="gradient-text">Touch</span>
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Ready to find your dream property? Our expert team is here to guide you through every step of your real estate journey.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card 
                    key={info.title} 
                    className={`glass-effect border-white/20 hover-lift animate-fade-in animate-delay-${(index + 1) * 100}`}
                  >
                    <CardContent className="p-6 text-center">
                      <div className={`w-14 h-14 ${info.color} rounded-xl flex items-center justify-center mx-auto mb-4 hover-scale`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="font-semibold text-white mb-3 text-lg">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-white/70 text-sm mb-1">{detail}</p>
                      ))}
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="glass-effect border-white/20 hover-lift animate-fade-in animate-delay-200">
                <CardHeader className="pb-6">
                  <CardTitle className="text-3xl font-bold text-white">
                    Send us a Message
                  </CardTitle>
                  <CardDescription className="text-white/70 text-lg">
                    Fill out the form below and we'll respond within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white font-medium">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:ring-white/50 rounded-xl py-3"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white font-medium">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:ring-white/50 rounded-xl py-3"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-white font-medium">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:ring-white/50 rounded-xl py-3"
                          placeholder="Your phone number"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-white font-medium">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:ring-white/50 rounded-xl py-3"
                          placeholder="What's this about?"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white font-medium">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="bg-white/10 border-white/20 text-white placeholder-white/50 focus:ring-white/50 rounded-xl resize-none"
                        placeholder="Tell us about your property needs, budget, and any specific requirements..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full hover-lift bg-white text-blue-600 hover:bg-gray-100 py-4 text-lg font-semibold rounded-xl"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Map and Additional Info */}
              <div className="space-y-8 animate-fade-in animate-delay-300">
                <Card className="glass-effect border-white/20">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-white">
                      Find Our Office
                    </CardTitle>
                    <CardDescription className="text-white/70">
                      Visit us for a personal consultation
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <Map />
                  </CardContent>
                </Card>

                <Card className="glass-effect border-white/20">
                  <CardContent className="p-8 text-center">
                    <Calendar className="w-12 h-12 text-blue-400 mx-auto mb-4 animate-float" />
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to get started?</h3>
                    <p className="text-white/80 mb-6 leading-relaxed">
                      Schedule a free consultation with one of our real estate experts and let us help you find your perfect property.
                    </p>
                    <Button className="hover-lift bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold">
                      Schedule Free Consultation
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Back to Home */}
            <div className="text-center mt-16">
              <Button variant="outline" asChild className="hover-lift border-white/30 text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-semibold">
                <Link to="/" className="flex items-center gap-3">
                  <Home className="w-5 h-5" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Contact;
