import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Products />
      <Footer />
    </div>
  );
}
