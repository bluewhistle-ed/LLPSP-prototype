import { Outlet } from 'react-router';
import { UserProvider } from '../context/UserContext';
import { PartyProvider } from '../context/PartyContext';
import { GovernmentProvider } from '../context/GovernmentContext';
import { SessionProvider } from '../context/SessionContext';
import { SittingSessionProvider } from '../context/SittingSessionContext';

export function RootLayout() {
  return (
    <UserProvider>
      <PartyProvider>
        <GovernmentProvider>
          <SessionProvider>
            <SittingSessionProvider>
              <Outlet />
            </SittingSessionProvider>
          </SessionProvider>
        </GovernmentProvider>
      </PartyProvider>
    </UserProvider>
  );
}