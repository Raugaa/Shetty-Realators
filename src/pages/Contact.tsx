
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Home, Mail, Phone, MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
      details: ["Shettyrealtorspune@gmail.com", "sales@sudhirrealtors.com"],
      color: "bg-slate-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["9422005110", "+91 87654 32109"],
      color: "bg-slate-700"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Real Estate Avenue", "Pune, Maharashtra 400001", "India"],
      color: "bg-slate-800"
    }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <LoadingBar />
      <div className="min-h-screen transition-all duration-700 bg-gray-50 dark:bg-gray-900">
        <Navigation isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">
                Get In <span className="professional-text">Touch</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Ready to find your dream property? Our expert team is here to guide you through every step of your real estate journey.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card 
                    key={info.title} 
                    className={`professional-card hover-lift animate-fade-in animate-delay-${(index + 1) * 100} bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700`}
                  >
                    <CardContent className="p-8 text-center">
                      <div className={`w-16 h-16 ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-6 hover-scale`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-xl">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 dark:text-gray-300 text-sm mb-2">{detail}</p>
                      ))}
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="professional-card hover-lift animate-fade-in animate-delay-200 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardHeader className="pb-6">
                  <CardTitle className="text-3xl font-bold text-gray-900 dark:text-white">
                    Send us a Message
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300 text-lg">
                    Fill out the form below and we'll respond within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-900 dark:text-white font-medium">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="professional-input bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-900 dark:text-white font-medium">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="professional-input bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-900 dark:text-white font-medium">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="professional-input bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                          placeholder="Your phone number"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-gray-900 dark:text-white font-medium">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="professional-input bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                          placeholder="What's this about?"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-900 dark:text-white font-medium">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="professional-input bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white resize-none"
                        placeholder="Tell us about your property needs, budget, and any specific requirements..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full hover-lift professional-btn py-4 text-lg font-semibold rounded-xl bg-slate-700 hover:bg-slate-800 text-white"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Map and Additional Info */}
              <div className="space-y-8 animate-fade-in animate-delay-300">
                <Card className="professional-card bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                      Find Our Office
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      Visit us for a personal consultation
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">Interactive Map</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                          Find us at 123 Real Estate Avenue, Pune
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-xs mt-2">
                          Free map integration available
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="professional-card bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardContent className="p-8 text-center">
                    <Calendar className="w-12 h-12 text-slate-600 dark:text-slate-400 mx-auto mb-4 animate-float" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready to get started?</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      Schedule a free consultation with one of our real estate experts and let us help you find your perfect property.
                    </p>
                    <Button className="hover-lift professional-btn px-8 py-3 rounded-xl font-semibold bg-slate-700 hover:bg-slate-800 text-white">
                      Schedule Free Consultation
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Back to Home */}
            <div className="text-center mt-16">
              <Button variant="outline" asChild className="hover-lift professional-btn-outline px-8 py-4 rounded-xl font-semibold border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
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
