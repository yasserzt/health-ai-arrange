
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Mock appointment data
const appointments = [
  {
    id: 1,
    doctor: 'Dr. Smith',
    specialty: 'Cardiology',
    date: 'May 2, 2025',
    time: '10:30 AM',
    status: 'confirmed',
    telehealth: true,
  },
  {
    id: 2,
    doctor: 'Dr. Johnson',
    specialty: 'Dermatology',
    date: 'May 15, 2025',
    time: '3:15 PM',
    status: 'confirmed',
    telehealth: false,
  },
  {
    id: 3,
    doctor: 'Dr. Williams',
    specialty: 'General Medicine',
    date: 'May 28, 2025',
    time: '9:00 AM',
    status: 'pending',
    telehealth: true,
  },
];

export function UpcomingAppointments() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Upcoming Appointments</span>
          <Button variant="outline" size="sm">View All</Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium">{appointment.doctor}</h4>
                  {appointment.telehealth && (
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      Telehealth
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                <p className="text-sm font-medium text-caresync-900">{appointment.date} • {appointment.time}</p>
              </div>
              <div className="flex flex-col gap-2 items-end">
                <Badge 
                  className={
                    appointment.status === 'confirmed' 
                      ? 'bg-green-100 text-green-800 hover:bg-green-100' 
                      : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100'
                  }
                >
                  {appointment.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                </Badge>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Reschedule</Button>
                  <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700 hover:bg-red-50">
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
