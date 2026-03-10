import { Outlet } from 'react-router';
import { UserProvider } from '../context/UserContext';
import { PartyProvider } from '../context/PartyContext';
import { GovernmentProvider } from '../context/GovernmentContext';
import { SessionProvider } from '../context/SessionContext';

export function RootLayout() {
  return (
    <UserProvider>
      <PartyProvider>
        <GovernmentProvider>
          <SessionProvider>
            <Outlet />
          </SessionProvider>
        </GovernmentProvider>
      </PartyProvider>
    </UserProvider>
  );
}