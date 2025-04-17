// Note: This makes the layout a Client Component so you won't be able to export metadata
import ThemeToggle from '@/components/ThemeToggle';
import '@/styles/globals.css';

export const metadata = {
  title: 'Payment Platform',
  description: 'A platform for seamless payments',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen">
          <nav className="flex justify-end p-6">
            <ThemeToggle />
          </nav>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}