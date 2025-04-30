
import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { Pricing } from '@/components/landing/Pricing';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AppointmentForm } from '@/components/appointment/AppointmentForm';
import { CalendarView } from '@/components/appointment/CalendarView';
import { TimeSlotSelector } from '@/components/appointment/TimeSlotSelector';
import { UpcomingAppointments } from '@/components/dashboard/UpcomingAppointments';

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Features />
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-caresync-900">See How It Works</h2>
            <p className="text-lg text-muted-foreground mt-3 max-w-2xl mx-auto">
              Experience our streamlined scheduling process powered by AI
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-caresync-500 text-white flex items-center justify-center font-bold">1</div>
                <h3 className="text-xl font-medium">Tell us your preferences</h3>
              </div>
              <p className="text-muted-foreground">Simply tell our AI what you need: "I need a checkup with Dr. Smith on Tuesday afternoon" and we'll find the perfect slot.</p>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-caresync-500 text-white flex items-center justify-center font-bold">2</div>
                <h3 className="text-xl font-medium">Review available options</h3>
              </div>
              <p className="text-muted-foreground">Our system analyzes provider schedules, your preferences, and appointment urgency to offer optimal time slots.</p>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-caresync-500 text-white flex items-center justify-center font-bold">3</div>
                <h3 className="text-xl font-medium">Confirm and get reminders</h3>
              </div>
              <p className="text-muted-foreground">Choose your preferred time, receive confirmation, and get AI-powered voice reminders as your appointment approaches.</p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-lg shadow-lg border p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-caresync-500 text-white flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    </div>
                    <div>
                      <h4 className="font-medium">AI Assistant</h4>
                    </div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg mb-4">
                    <p>Hi there! I'm your CareSync assistant. How can I help you today?</p>
                  </div>
                  <div className="p-3 bg-caresync-50 rounded-lg text-left mb-4">
                    <p>I need a cardiology appointment next week, preferably in the afternoon.</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg mb-4">
                    <p>I found 3 available slots with Dr. Smith, our cardiologist:</p>
                    <ul className="mt-2 space-y-1">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-caresync-500"></div>
                        <span>Tuesday, May 5 at 2:30 PM</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-caresync-500"></div>
                        <span>Wednesday, May 6 at 3:15 PM</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-caresync-500"></div>
                        <span>Friday, May 8 at 1:00 PM</span>
                      </li>
                    </ul>
                    <p className="mt-2">Would you like to book any of these slots?</p>
                  </div>
                  <div className="flex gap-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Type your message..."
                    />
                    <button className="h-10 px-4 py-2 bg-caresync-500 text-white rounded-md hover:bg-caresync-600 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" x2="11" y1="2" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Pricing />
    </>
  );
};

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | undefined>(undefined);
  
  return (
    <div className="py-8">
      <div className="container">
        <h1 className="text-3xl font-bold mb-8">Schedule an Appointment</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <CalendarView onDateSelect={setSelectedDate} selectedDate={selectedDate} />
            <TimeSlotSelector 
              selectedDate={selectedDate} 
              onTimeSelect={setSelectedTime} 
              selectedTime={selectedTime} 
            />
          </div>
          <div>
            <AppointmentForm selectedDate={selectedDate} selectedTime={selectedTime} />
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardPage = () => {
  return (
    <div className="py-8">
      <div className="container">
        <h1 className="text-3xl font-bold mb-8">Your Dashboard</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <UpcomingAppointments />
          </div>
          <div>
            <div className="bg-caresync-50 rounded-lg p-6 border border-caresync-100">
              <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full py-2 px-4 bg-caresync-500 text-white rounded-md flex items-center gap-2 hover:bg-caresync-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
                  Book New Appointment
                </button>
                <button className="w-full py-2 px-4 bg-white border border-caresync-200 rounded-md flex items-center gap-2 hover:bg-caresync-50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
                  Voice Appointment Request
                </button>
                <button className="w-full py-2 px-4 bg-white border border-caresync-200 rounded-md flex items-center gap-2 hover:bg-caresync-50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Tabs defaultValue="landing" className="w-full">
          <div className="container mt-4">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="landing">Home</TabsTrigger>
              <TabsTrigger value="booking">Book Appointment</TabsTrigger>
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="landing" className="w-full">
            <LandingPage />
          </TabsContent>
          <TabsContent value="booking">
            <BookingPage />
          </TabsContent>
          <TabsContent value="dashboard">
            <DashboardPage />
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
