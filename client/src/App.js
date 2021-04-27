import Hero from './components/hero/Hero';
import Navbar from './components/navigation/desktop/Navbar';
import How from './components/how/How';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <How></How>
    </div>
  );
}

export default App;
