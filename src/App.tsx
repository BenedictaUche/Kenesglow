import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MediaKit from './pages/MediaKit';
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/media-kit" element={<MediaKit />} />
      </Routes>
    </Router>
  );
};

export default App;
