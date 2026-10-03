import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Overview from './components/sections/Overview';
import MissionVision from './components/sections/MissionVision';
import Products from './components/sections/Products';
import Lectures from './components/sections/Lectures';
import Tips from './components/sections/Tips';
import Portfolio from './components/sections/Portfolio';
import NewsBlogs from './components/sections/NewsBlogs';
import Dispatch from './components/sections/Dispatch';
import Contact from './components/sections/Contact';
import FAQ from './components/sections/FAQ';

export default function App() {
  return (
    <div className="bg-stone-50">
      <Header />
      <main>
        <Hero />
        <Overview />
        <MissionVision />
        <Products />
        <Lectures />
        <Tips />
        <Portfolio />
        <NewsBlogs />
        <Dispatch />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
