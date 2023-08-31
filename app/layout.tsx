import '@radix-ui/themes/styles.css';
import { Container, Section, Theme } from '@radix-ui/themes';
import Providers from './providers.jsx';
import './globals.css';
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'tim\'s site',
  description: 'Checkout some of my projects, stuff i like or leave a message \<3',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Theme
            accentColor="green"
            grayColor="gray"
            panelBackground="translucent"
            scaling="100%"
            radius="full"
          >
            <NavBar />
            <Section size="2">
              {children}
            </Section>
            <Footer />
          </Theme>
        </Providers>
      </body>
    </html>
  )
}
