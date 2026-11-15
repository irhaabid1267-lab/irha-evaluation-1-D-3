
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CarrierBar from './components/CarrierBar';
import FreightSystems from './components/FreightSystems';
import FreightMatrix from './components/FreightMatrix';
import CaseStudies from './components/CaseStudies';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CarrierBar />
      <FreightSystems />
      <FreightMatrix />
      <CaseStudies />
      <BookingForm />
      <Footer />
    </>
  );
}

export default App;
