import Hero from './components/Hero';
import Overview from './components/sections/Overview';
import MissionVision from './components/sections/MissionVision';
import Products from './components/sections/Products';
import Lectures from './components/sections/Lectures';
import Tips from './components/sections/Tips';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';
import Consultants from './components/sections/Consultants';
import NewsBlogs from './components/sections/NewsBlogs';

export default function App() {
  return (
    <div className="bg-black">
      <Hero />
      <main>
        <Overview />
        <MissionVision />
        <Products />
        <Lectures />
        <Tips />
        <Portfolio />
        <Contact />
        <Consultants />
        <NewsBlogs />
      </main>
      <footer className="bg-black px-6 py-10 text-center text-white/40 text-sm border-t border-white/10">
        © {new Date().getFullYear()} Asme. All rights reserved.
      </footer>
    </div>
  );
}
