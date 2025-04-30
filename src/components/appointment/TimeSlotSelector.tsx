
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Mock time slots data
const generateTimeSlots = (date: Date) => {
  const timeSlots = [];
  const startHour = 9; // 9 AM
  const endHour = 17; // 5 PM
  
  // Get day of week (0 = Sunday, 6 = Saturday)
  const dayOfWeek = date.getDay();
  
  // Generate time slots for the selected date
  for (let hour = startHour; hour < endHour; hour++) {
    // Morning slots
    timeSlots.push({
      time: `${hour}:00`,
      available: Math.random() > 0.3 && dayOfWeek !== 0 && dayOfWeek !== 6
    });
    timeSlots.push({
      time: `${hour}:30`,
      available: Math.random() > 0.3 && dayOfWeek !== 0 && dayOfWeek !== 6
    });
  }
  
  return timeSlots;
};

export interface TimeSlotSelectorProps {
  selectedDate: Date | undefined;
  onTimeSelect: (time: string) => void;
  selectedTime: string | undefined;
}

export function TimeSlotSelector({ selectedDate, onTimeSelect, selectedTime }: TimeSlotSelectorProps) {
  if (!selectedDate) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Available Times</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground py-8">
            Please select a date to view available times
          </p>
        </CardContent>
      </Card>
    );
  }
  
  const timeSlots = generateTimeSlots(selectedDate);
  const formattedDate = selectedDate.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long', 
    day: 'numeric',
  });
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Available Times for {formattedDate}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5">
          {timeSlots.map((slot) => (
            <div
              key={slot.time}
              className={`time-slot ${slot.available ? 'available' : 'unavailable'} ${selectedTime === slot.time ? 'selected' : ''}`}
              onClick={() => slot.available && onTimeSelect(slot.time)}
            >
              {slot.time}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
