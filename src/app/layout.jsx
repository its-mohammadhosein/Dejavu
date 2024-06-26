import './globals.css';

import StoreProvider from '../redux/storeProviders';
import { getServerSession } from 'next-auth';
import AuthProvider, { SessionProvider } from '@/utils/SessionProvider';
import localFont from 'next/font/local';

// Font files can be colocated inside of `app`
const myFont = localFont({
src: './maazfont.ttf',
display: 'swap',
});
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <StoreProvider>
      <html lang="en" className="dark">
        <body
          className={`${myFont.className}pb-[12rem] text-black/90 `}
        >
          <AuthProvider session={session}>{children}</AuthProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
