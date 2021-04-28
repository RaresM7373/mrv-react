import Hero from './components/hero/Hero';
import Navbar from './components/navigation/Navbar';
import How from './components/how/How';
import OurWork from './components/our-work/OurWork';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <How></How>
      <OurWork></OurWork>
    </div>
  );
}

export default App;
