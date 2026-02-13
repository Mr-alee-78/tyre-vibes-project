import Hero from './components/hero'; // Ensure the path is correct
import Problem from './components/Problem';
import Solution from './components/solution';
import How from './components/HowItWorks'
import Double from './components/DoubleSection';
import AutoData from './components/AutoData' 
import Partner from './components/Partner'
import Contact from './components/Contact'
import WhoIsItFor from './components/WhoIsItFor'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Hero />
      <Problem />
      <Solution />
      <How/>
      <Double/>
      <AutoData/>
      <Partner/>
      <Contact/>
      <WhoIsItFor/>
      <FinalCTA/>
      <Footer/> 
    </div>
  );
}

export default App;