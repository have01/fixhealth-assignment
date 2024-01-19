import "./App.css";
import Navbar from "./components/navabar";
import Hero from "./components/hero";
import MultiStepForm from "./components/MultiStepForm";
import TestimonialCarousel from "./components/TestimonialCarousel";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MultiStepForm />
      <TestimonialCarousel />
    </>
  );
}

export default App;
