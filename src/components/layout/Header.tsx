
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useIsMobile } from '@/hooks/use-mobile';

export function Header() {
  const [isLoggedIn] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-caresync-500 to-caresync-900 flex items-center justify-center">
            <span className="text-white font-bold">C</span>
          </div>
          <span className="text-xl font-bold text-caresync-900">CareSync</span>
        </div>
        
        {isMobile ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
                <span className="sr-only">Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Dashboard</DropdownMenuItem>
              <DropdownMenuItem>Appointments</DropdownMenuItem>
              <DropdownMenuItem>Calendar</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              {isLoggedIn ? (
                <DropdownMenuItem>Sign Out</DropdownMenuItem>
              ) : (
                <DropdownMenuItem>Sign In</DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className="flex items-center gap-4">
            <Button variant="ghost">Dashboard</Button>
            <Button variant="ghost">Appointments</Button>
            <Button variant="ghost">Calendar</Button>
            <Button variant="ghost">Settings</Button>
            {isLoggedIn ? (
              <Button variant="outline">Sign Out</Button>
            ) : (
              <Button>Sign In</Button>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
