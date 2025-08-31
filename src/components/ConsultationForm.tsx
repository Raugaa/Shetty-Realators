import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar, Phone, Mail, Home } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    property_preference: ""
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
        message: `Consultation Request - Property Preference: ${formData.property_preference}`, // matches template
        to_email: 'Shettyrealtorspune@gmail.com'
      },
      '3gxZaPe-2eAEODFoQ'
    ).then((result) => {
      console.log("EmailJS result:", result);
      toast({
        title: "Consultation Scheduled!",
        description: "Thank you! We'll contact you within 24 hours to schedule your free consultation.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        property_preference: ""
      });
    }).catch((error) => {
      console.error("EmailJS error:", error);
      toast({
        title: "Error",
        description: "Failed to schedule consultation. Please try again later.",
        variant: "destructive"
      });
    });
  };

  return (
    <Card className="professional-card bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
          <Calendar className="w-6 h-6 text-slate-600 dark:text-slate-400" />
          Schedule Free Consultation
        </CardTitle>
        <CardDescription className="text-gray-600 dark:text-gray-300">
          Get expert advice from our real estate professionals
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-900 dark:text-white font-medium flex items-center gap-2">
              <Home className="w-4 h-4" />
              Full Name
            </Label>
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
            <Label htmlFor="email" className="text-gray-900 dark:text-white font-medium flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email Address
            </Label>
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

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-gray-900 dark:text-white font-medium flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Phone Number
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="professional-input bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
              placeholder="Your phone number"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="property_preference" className="text-gray-900 dark:text-white font-medium">
              Property Preference
            </Label>
            <Textarea
              id="property_preference"
              name="property_preference"
              value={formData.property_preference}
              onChange={handleInputChange}
              required
              rows={4}
              className="professional-input bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white resize-none"
              placeholder="Tell us about your property requirements, budget, preferred location, type of property, etc..."
            />
          </div>

          <Button 
            type="submit" 
            className="w-full hover-lift professional-btn py-3 text-lg font-semibold rounded-xl bg-dark-gray hover:bg-dark-gray/90 text-white"
          >
            Schedule Free Consultation
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ConsultationForm;
