import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Home, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LoadingBar from "@/components/LoadingBar";
import ConsultationForm from "@/components/ConsultationForm";
import { toast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      'service_6i68u03',
      'template_614eb5c',
      {
        from_name: formData.name,      // matches template
        from_email: formData.email,    // matches template
        phone: formData.phone,         // matches template
        subject: formData.subject,     // matches template
        message: formData.message,     // matches template
        to_email: 'Shettyrealtorspune@gmail.com'
      },
      '3gxZaPe-2eAEODFoQ' // <-- use your public key here
    ).then((result) => {
      console.log("EmailJS result:", result);
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
    }).catch((error) => {
      console.error("EmailJS error:", error); // more detailed error logging
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["Shettyrealtorspune@gmail.com", "sales@sudhirrealtors.com"],
      color: "bg-dark-gray"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["9422005110", "+91 87654 32109"],
      color: "bg-dark-gray"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Real Estate Avenue", "Pune, Maharashtra 400001", "India"],
      color: "bg-dark-gray"
    }
  ];

  return (
    <div className="min-h-screen">
      <LoadingBar />
      <div className="min-h-screen transition-all duration-700 bg-gray-50">
        <Navigation />
        
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
                Get In <span className="text-yellow-primary">Touch</span>
              </h1>
              <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
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
                    className={`professional-card hover-lift animate-fade-in animate-delay-${(index + 1) * 100} bg-white border-gray-200`}
                  >
                    <CardContent className="p-8 text-center">
                      <div className={`w-16 h-16 ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-6 hover-scale`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-4 text-xl">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600 text-sm mb-2">
                          {info.title === "Email Us" ? (
                            <a 
                              href={`mailto:${detail}`} 
                              className="text-gray-600 hover:text-yellow-primary transition-colors"
                            >
                              {detail}
                            </a>
                          ) : info.title === "Call Us" ? (
                            <a 
                              href={`tel:${detail.replace(/\s/g, '')}`} 
                              className="text-gray-600 hover:text-yellow-primary transition-colors"
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="professional-card hover-lift animate-fade-in animate-delay-200 bg-white border-gray-200">
                <CardHeader className="pb-6">
                  <CardTitle className="text-3xl font-bold text-gray-900">
                    Send us a Message
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-lg">
                    Fill out the form below and we'll respond within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-900 font-medium">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="professional-input bg-white border-gray-300 text-gray-900"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-900 font-medium">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="professional-input bg-white border-gray-300 text-gray-900"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-900 font-medium">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="professional-input bg-white border-gray-300 text-gray-900"
                          placeholder="Your phone number"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject" className="text-gray-900 font-medium">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="professional-input bg-white border-gray-300 text-gray-900"
                          placeholder="What's this about?"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-900 font-medium">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="professional-input bg-white border-gray-300 text-gray-900 resize-none"
                        placeholder="Tell us about your property needs, budget, and any specific requirements..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full hover-lift py-4 text-lg font-semibold rounded-xl bg-dark-gray hover:bg-dark-gray/90 text-white"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Consultation Form */}
              <div className="space-y-8 animate-fade-in animate-delay-300">
                <ConsultationForm />
              </div>
            </div>

            {/* Back to Home */}
            <div className="text-center mt-16">
              <Button variant="outline" asChild className="hover-lift px-8 py-4 rounded-xl font-semibold bg-dark-gray hover:bg-dark-gray/90 text-white border-dark-gray">
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
