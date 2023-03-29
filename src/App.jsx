import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home';
import Blog from './pages/blog';
import Learning from './pages/lerning';
import Cv from './pages/cv';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="learning" element={<Learning />} />
        <Route path="cv" element={<Cv />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
