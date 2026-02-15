import Hero from './components/hero'; 
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
      {/* Added IDs to match the Hero navigation links */}
      <section id="home"><Hero /></section>
      <Problem />
      <Solution />
      <section id="how-it-works"><How/></section>
      <section id="features">
        <Double/>
        <AutoData/>
      </section>
      <section id="partners"><Partner/></section>
      <Contact/>
      <section id="who-its-for"><WhoIsItFor/></section>
      <FinalCTA/>
      <Footer/> 
    </div>
  );
}

export default App;