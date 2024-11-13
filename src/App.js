import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
// eslint-disable-next-line
import Hero from './components/Hero';
// eslint-disable-next-line
import Specials from './components/Specials';
// eslint-disable-next-line
import Testimonials from './components/Testimonials';
// eslint-disable-next-line
import About from './components/About';
import Footer from './components/Footer';
import BookingPage from './pages/BookingPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
