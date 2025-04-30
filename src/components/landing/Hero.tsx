
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

export function Hero() {
  const [email, setEmail] = useState('');
  
  const handleGetStarted = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() === '') {
      toast.error('Please enter your email');
      return;
    }
    toast.success('Thanks for signing up!');
    setEmail('');
  };
  
  return (
    <div className="gradient-bg text-white py-16 px-4 sm:px-6 md:py-24 lg:py-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              AI-Driven Healthcare Appointments Made Simple
            </h1>
            <p className="text-lg sm:text-xl opacity-90 max-w-lg">
              CareSync intelligently schedules your medical appointments, understands your needs, and sends smart reminders.
            </p>
            
            <Tabs defaultValue="patients" className="w-full max-w-sm">
              <TabsList className="grid w-full grid-cols-3 bg-white/10">
                <TabsTrigger value="patients">Patients</TabsTrigger>
                <TabsTrigger value="clinics">Clinics</TabsTrigger>
                <TabsTrigger value="telehealth">Telehealth</TabsTrigger>
              </TabsList>
              <TabsContent value="patients" className="mt-4">
                <form onSubmit={handleGetStarted} className="flex gap-2">
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/70"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button type="submit" className="bg-white text-caresync-900 hover:bg-white/90">
                    Get Started
                  </Button>
                </form>
              </TabsContent>
              <TabsContent value="clinics" className="mt-4">
                <form onSubmit={handleGetStarted} className="flex gap-2">
                  <Input 
                    type="email" 
                    placeholder="Enter clinic email" 
                    className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/70"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button type="submit" className="bg-white text-caresync-900 hover:bg-white/90">
                    Request Demo
                  </Button>
                </form>
              </TabsContent>
              <TabsContent value="telehealth" className="mt-4">
                <form onSubmit={handleGetStarted} className="flex gap-2">
                  <Input 
                    type="email" 
                    placeholder="Enter provider email" 
                    className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/70"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button type="submit" className="bg-white text-caresync-900 hover:bg-white/90">
                    Join Waitlist
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
            
            <div className="flex gap-2 text-sm">
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                AI-powered scheduling
              </span>
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                Smart reminders
              </span>
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                Telehealth ready
              </span>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-lg w-full max-w-md">
              <div className="bg-white rounded-lg shadow-sm p-5">
                <h3 className="text-caresync-900 font-bold text-lg mb-4">Quick Appointment</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 rounded-md bg-caresync-50">
                    <div className="w-4 h-4 bg-caresync-500 rounded-full mr-3"></div>
                    <div>
                      <div className="text-caresync-900 font-medium">Dr. Smith - Cardiology</div>
                      <div className="text-sm text-caresync-700">Tomorrow, 10:30 AM</div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 rounded-md bg-gray-50">
                    <div className="w-4 h-4 bg-gray-300 rounded-full mr-3"></div>
                    <div>
                      <div className="text-gray-700 font-medium">Dr. Johnson - Dermatology</div>
                      <div className="text-sm text-gray-600">May 15, 3:15 PM</div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 rounded-md bg-gray-50">
                    <div className="w-4 h-4 bg-gray-300 rounded-full mr-3"></div>
                    <div>
                      <div className="text-gray-700 font-medium">Dr. Williams - General</div>
                      <div className="text-sm text-gray-600">May 28, 9:00 AM</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <Button className="w-full">Book New Appointment</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
