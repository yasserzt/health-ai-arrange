
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

export interface AppointmentFormProps {
  selectedDate: Date | undefined;
  selectedTime: string | undefined;
}

export function AppointmentForm({ selectedDate, selectedTime }: AppointmentFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [appointmentType, setAppointmentType] = useState('');
  const [notes, setNotes] = useState('');
  
  const isFormValid = () => {
    return (
      name.trim() !== '' &&
      email.trim() !== '' &&
      phone.trim() !== '' &&
      appointmentType !== '' &&
      selectedDate &&
      selectedTime
    );
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFormValid()) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    if (!selectedDate || !selectedTime) {
      toast.error("Please select a date and time");
      return;
    }
    
    // Format date for display
    const formattedDate = selectedDate.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
    
    // Mock appointment booking
    toast.success("Appointment scheduled successfully", {
      description: `${formattedDate} at ${selectedTime}`
    });
    
    // Reset form
    setName('');
    setEmail('');
    setPhone('');
    setAppointmentType('');
    setNotes('');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Schedule Appointment</CardTitle>
        <CardDescription>
          Fill in your details to book your appointment
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input 
              id="name" 
              placeholder="Enter your full name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Enter your email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                id="phone" 
                placeholder="Enter your phone number" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                required 
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="appointmentType">Appointment Type</Label>
            <Select 
              value={appointmentType}
              onValueChange={setAppointmentType}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select appointment type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="checkup">General Checkup</SelectItem>
                <SelectItem value="followup">Follow-up Visit</SelectItem>
                <SelectItem value="consultation">Consultation</SelectItem>
                <SelectItem value="urgent">Urgent Care</SelectItem>
                <SelectItem value="telehealth">Telehealth Visit</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes</Label>
            <Textarea 
              id="notes" 
              placeholder="Add any additional information or special requirements" 
              value={notes} 
              onChange={(e) => setNotes(e.target.value)} 
              className="min-h-[100px]"
            />
          </div>
          
          {selectedDate && selectedTime ? (
            <div className="p-3 bg-caresync-50 rounded-md">
              <p className="text-sm font-medium">Selected Appointment:</p>
              <p className="text-caresync-900">
                {selectedDate.toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric',
                })} at {selectedTime}
              </p>
            </div>
          ) : (
            <div className="p-3 bg-muted/50 rounded-md">
              <p className="text-sm font-medium text-muted-foreground">
                Please select a date and time for your appointment
              </p>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button 
            type="submit" 
            className="w-full" 
            disabled={!isFormValid()}
          >
            Schedule Appointment
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
