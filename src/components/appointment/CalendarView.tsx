
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Mock data for calendar
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const CURRENT_DATE = new Date();
const CURRENT_MONTH = CURRENT_DATE.getMonth();
const CURRENT_YEAR = CURRENT_DATE.getFullYear();

interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  isAvailable: boolean;
}

const getCalendarDays = (month: number, year: number): CalendarDay[] => {
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();
  const prevMonthLastDate = new Date(year, month, 0).getDate();
  
  const days: CalendarDay[] = [];
  
  // Previous month days
  for (let i = firstDay - 1; i >= 0; i--) {
    days.push({
      date: new Date(year, month - 1, prevMonthLastDate - i),
      isCurrentMonth: false,
      isToday: false,
      isAvailable: false
    });
  }
  
  // Current month days
  const today = new Date();
  for (let i = 1; i <= lastDate; i++) {
    const date = new Date(year, month, i);
    const isToday = 
      date.getDate() === today.getDate() && 
      date.getMonth() === today.getMonth() && 
      date.getFullYear() === today.getFullYear();
    
    // Mock availability - make some days available
    const isAvailable = 
      date >= today && 
      (date.getDay() !== 0 && date.getDay() !== 6); // Not weekend
    
    days.push({
      date,
      isCurrentMonth: true,
      isToday,
      isAvailable
    });
  }
  
  // Next month days
  const remainingDays = 42 - days.length; // 6 rows * 7 days
  for (let i = 1; i <= remainingDays; i++) {
    days.push({
      date: new Date(year, month + 1, i),
      isCurrentMonth: false,
      isToday: false,
      isAvailable: false
    });
  }
  
  return days;
};

export interface CalendarViewProps {
  onDateSelect: (date: Date) => void;
  selectedDate?: Date;
}

export function CalendarView({ onDateSelect, selectedDate }: CalendarViewProps) {
  const [month, setMonth] = useState(CURRENT_MONTH);
  const [year, setYear] = useState(CURRENT_YEAR);
  
  const calendarDays = getCalendarDays(month, year);
  
  const handlePreviousMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };
  
  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };
  
  const isSelectedDate = (date: Date) => {
    if (!selectedDate) return false;
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };

  return (
    <Card>
      <CardHeader className="space-y-1.5 pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">
            {new Date(year, month).toLocaleString('default', { month: 'long' })} {year}
          </CardTitle>
          <div className="flex gap-2">
            <button 
              onClick={handlePreviousMonth}
              className="p-2 rounded-full hover:bg-muted"
              aria-label="Previous month"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button 
              onClick={handleNextMonth}
              className="p-2 rounded-full hover:bg-muted"
              aria-label="Next month"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
        <div className="flex justify-between px-2">
          <Badge variant="outline" className="bg-caresync-50 text-caresync-900">Available</Badge>
          <Badge variant="outline" className="bg-caresync-500 text-white">Selected</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-1 mb-2">
          {DAYS.map(day => (
            <div key={day} className="text-center text-sm font-medium text-muted-foreground">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((day, index) => (
            <div
              key={index}
              className={`calendar-day ${day.isCurrentMonth ? '' : 'text-muted-foreground opacity-50'} 
                ${day.isToday ? 'today' : ''} 
                ${isSelectedDate(day.date) ? 'selected' : ''} 
                ${day.isAvailable && day.isCurrentMonth ? 'available' : 'unavailable'}`}
              onClick={() => day.isAvailable && day.isCurrentMonth && onDateSelect(day.date)}
            >
              {day.date.getDate()}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
