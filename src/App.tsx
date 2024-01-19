import "./App.css";
import Navbar from "./components/navabar";
import Hero from "./components/hero";
import Testimonials from "./components/testimonial";
import MultiStepForm from "./components/MultiStepForm";
import { useSelector } from "react-redux";
import TestimonialCarousel from "./components/TestimonialCarousel";
import { doctorsArray } from "./mockdata/doctors";
function App() {
  const data = useSelector((state) => console.log(state));
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
