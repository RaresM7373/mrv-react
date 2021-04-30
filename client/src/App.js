import Hero from './components/hero/Hero';
import Navbar from './components/navigation/Navbar';
import How from './components/how/How';
import OurWork from './components/our-work/OurWork';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <How></How>
      <OurWork></OurWork>
      <Contact></Contact>
    </div>
  );
}

export default App;
