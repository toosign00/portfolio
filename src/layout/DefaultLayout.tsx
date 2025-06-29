import { Footer } from '@/components/Footer';
import { NavBar } from '@/components/NavBar';

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
