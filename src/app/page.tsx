import HeroSection from '@/components/HeroSection';
import QRDemo from '@/components/QRDemo';
import WaitlistForm from '@/components/WaitlistForm';

export default function Home() {
  return (
    <>
      <HeroSection />
      <QRDemo />
      <section className="px-6 py-20 space-y-20">
        <div className="fade-in">
          <WaitlistForm type="Merchant" />
        </div>
        <div className="fade-in">
          <WaitlistForm type="Customer" />
        </div>
      </section>
    </>
  );
}