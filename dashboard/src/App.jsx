import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Marketing from './components/Marketing';
import Layout from './components/Layout';
import Roadmap from './components/Roadmap';
import { ThemeProvider } from './components/Theme';

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/roadmap" element={<Roadmap />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
    
  );
};

export default App;