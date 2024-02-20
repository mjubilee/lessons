import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import './App.css';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>{' | '}
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
       </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
