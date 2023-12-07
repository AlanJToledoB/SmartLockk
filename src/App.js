import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import About from './componentes/About';
import Participantes from './componentes/Participantes';

import Home from './pages/Home';
import Hardware from './componentes/Hardware';
import Software from './componentes/Software';




function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <About />
        <Hardware />
        <Participantes />
        <Software />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
