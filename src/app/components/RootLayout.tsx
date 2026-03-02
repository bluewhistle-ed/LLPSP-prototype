import { Outlet } from 'react-router';
import { UserProvider } from '../context/UserContext';

export function RootLayout() {
  return (
    <UserProvider>
      <Outlet />
    </UserProvider>
  );
}
