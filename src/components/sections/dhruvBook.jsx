"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function DhruvBook({ content, type, position, variant, items = [], is_active = true }) {
  const [selectedService, setSelectedService] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState("");
  const [selectedTime, setSelectedTime] = React.useState("");
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Here you can add your form submission logic
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form
      setSelectedService("");
      setSelectedDate("");
      setSelectedTime("");
      setFormData({
        name: "",
        email: "",
        phone: "",
        notes: ""
      });
      
      setSubmitStatus({
        type: "success",
        message: "Your appointment has been booked successfully! We'll contact you shortly to confirm."
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "There was an error booking your appointment. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!is_active) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-[#1a1a1a]">
                {content?.title || "Book Your Appointment"}
              </h2>
              <p className="text-xl text-[#c8a97e]">
                {content?.subtitle || "Schedule Your Visit"}
              </p>
              <p className="text-gray-600">
                {content?.description || "Choose your preferred service and time slot"}
              </p>
            </div>

            {submitStatus && (
              <div className={`p-4 rounded-lg ${
                submitStatus.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
              }`}>
                {submitStatus.message}
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Service Selection */}
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-gray-700">
                  Select Service
                </label>
                <Select value={selectedService} onValueChange={setSelectedService}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {items.map((item) => (
                      <SelectItem key={item.id} value={item.id}>
                        {item.title} - ${item.price} ({item.duration})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Date Selection */}
              <div className="space-y-2">
                <label htmlFor="date" className="text-sm font-medium text-gray-700">
                  Select Date
                </label>
                <Input
                  type="date"
                  id="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  required
                />
              </div>

              {/* Time Selection */}
              <div className="space-y-2">
                <label htmlFor="time" className="text-sm font-medium text-gray-700">
                  Select Time
                </label>
                <Select value={selectedTime} onValueChange={setSelectedTime}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="09:00">9:00 AM</SelectItem>
                    <SelectItem value="10:00">10:00 AM</SelectItem>
                    <SelectItem value="11:00">11:00 AM</SelectItem>
                    <SelectItem value="12:00">12:00 PM</SelectItem>
                    <SelectItem value="13:00">1:00 PM</SelectItem>
                    <SelectItem value="14:00">2:00 PM</SelectItem>
                    <SelectItem value="15:00">3:00 PM</SelectItem>
                    <SelectItem value="16:00">4:00 PM</SelectItem>
                    <SelectItem value="17:00">5:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#1a1a1a]">Personal Information</h3>
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                  <Input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone</label>
                  <Input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="notes" className="text-sm font-medium text-gray-700">Special Requests</label>
                  <Textarea 
                    id="notes" 
                    name="notes" 
                    rows={3}
                    value={formData.notes}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-[#c8a97e] hover:bg-[#b38f5e]"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Booking..." : "Book Appointment"}
              </Button>
            </form>
          </div>

          {/* Services List */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-6">Our Services</h3>
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex items-start space-x-4">
                    {item.image_url && (
                      <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image_url}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <h4 className="text-lg font-semibold text-[#1a1a1a]">{item.title}</h4>
                      <p className="text-[#c8a97e]">{item.subtitle}</p>
                      <p className="text-gray-600 mt-2">{item.description}</p>
                      <div className="mt-2 flex items-center space-x-4">
                        <span className="text-[#1a1a1a] font-semibold">${item.price}</span>
                        <span className="text-gray-500">{item.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-[#1a1a1a] mb-4">Business Hours</h3>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="text-[#1a1a1a] font-medium">9:00 AM - 8:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="text-[#1a1a1a] font-medium">9:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="text-[#1a1a1a] font-medium">10:00 AM - 4:00 PM</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 