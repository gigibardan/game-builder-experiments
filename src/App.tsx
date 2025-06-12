
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import Contact from './pages/Contact';

// Course pages care există
import LegoSpikeEssentials from './pages/courses/LegoSpikeEssentials';
import CourseScratch from './pages/courses/Scratch';
import MinecraftModding from './pages/courses/MinecraftModding';
import AppInventor from './pages/courses/AppInventor';
import Alice3 from './pages/courses/Alice3';

// AppInventor sessions
import AppInventorSession10 from './pages/appinventor/Session10';
import AppInventorSession11 from './pages/appinventor/Session11';
import AppInventorSession12 from './pages/appinventor/Session12';
import AppInventorSession13 from './pages/appinventor/Session13';
import Session14 from './pages/appinventor/Session14';

// Scratch sessions - lecții complete existente
import Session1Alegesanatos from './pages/scratch/Session1Alegesanatos';
import Session3MotoRacer from './pages/scratch/Session3MotoRacer';
import Session5BeachBallBounce from './pages/scratch/Session5BeachBallBounce';
import Session7CakeQuest from './pages/scratch/Session7cakequest';

// Scratch sessions - placeholder-uri
import Session1 from './pages/scratch/Session1';
import Session2 from './pages/scratch/Session2';
import Session3 from './pages/scratch/Session3';
import Session4 from './pages/scratch/Session4';
import Session5 from './pages/scratch/Session5';
import Session6 from './pages/scratch/Session6';
import Session7 from './pages/scratch/Session7';
import Session8 from './pages/scratch/Session8';
import Session9 from './pages/scratch/Session9';
import ScratchSession10 from './pages/scratch/Session10';
import ScratchSession11 from './pages/scratch/Session11';
import ScratchSession12 from './pages/scratch/Session12';
import ScratchSession13 from './pages/scratch/Session13';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Course pages */}
          <Route path="/courses/lego-spike-essentials" element={<LegoSpikeEssentials />} />
          <Route path="/courses/scratch" element={<CourseScratch />} />
          <Route path="/courses/minecraft-modding" element={<MinecraftModding />} />
          <Route path="/courses/appinventor" element={<AppInventor />} />
          <Route path="/courses/alice3" element={<Alice3 />} />
          
          {/* AppInventor sessions */}
          <Route path="/appinventor/session10" element={<AppInventorSession10 />} />
          <Route path="/appinventor/session11" element={<AppInventorSession11 />} />
          <Route path="/appinventor/session12" element={<AppInventorSession12 />} />
          <Route path="/appinventor/session13" element={<AppInventorSession13 />} />
          <Route path="/appinventor/session14" element={<Session14 />} />
          
          {/* Scratch sessions - lecții complete */}
          <Route path="/scratch/session1alegesanatos" element={<Session1Alegesanatos />} />
          <Route path="/scratch/session3motoracer" element={<Session3MotoRacer />} />
          <Route path="/scratch/session5beachballbounce" element={<Session5BeachBallBounce />} />
          <Route path="/scratch/session7cakequest" element={<Session7CakeQuest />} />
          
          {/* Scratch sessions - placeholder-uri pentru lecțiile în dezvoltare */}
          <Route path="/scratch/session1" element={<Session1 />} />
          <Route path="/scratch/session2" element={<Session2 />} />
          <Route path="/scratch/session3" element={<Session3 />} />
          <Route path="/scratch/session4" element={<Session4 />} />
          <Route path="/scratch/session5" element={<Session5 />} />
          <Route path="/scratch/session6" element={<Session6 />} />
          <Route path="/scratch/session7" element={<Session7 />} />
          <Route path="/scratch/session8" element={<Session8 />} />
          <Route path="/scratch/session9" element={<Session9 />} />
          <Route path="/scratch/session10" element={<ScratchSession10 />} />
          <Route path="/scratch/session11" element={<ScratchSession11 />} />
          <Route path="/scratch/session12" element={<ScratchSession12 />} />
          <Route path="/scratch/session13" element={<ScratchSession13 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
