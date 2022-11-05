
import './App.css';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Contact from './components/Contact';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/contact" element={<Contact />} />
       
      </Routes>    
    </div>
    </Router>
  );
}

export default App;
