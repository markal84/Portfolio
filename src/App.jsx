import { Routes, Route } from 'react-router-dom';
import { Unstable_Grid2, CssBaseline, ThemeProvider } from '@mui/material';
import { useThemeContext } from './theme/ThemeContextProvider';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home';
import Blog from './pages/blog';
import Learning from './pages/lerning';
import Cv from './pages/cv';
import NotFound from './pages/notFound';
import './App.css';

function App() {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header />
        <Unstable_Grid2 container justifyContent="center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="learning" element={<Learning />} />
            <Route path="cv" element={<Cv />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Unstable_Grid2>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
