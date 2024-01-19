import React, { lazy, Suspense } from "react";
import "./App.css";
import Loader from "./components/Loader";

const Navbar = lazy(() => import("./components/navabar"));
const Hero = lazy(() => import("./components/hero"));
const MultiStepForm = lazy(() => import("./components/MultiStepForm"));
const TestimonialCarousel = lazy(
  () => import("./components/TestimonialCarousel")
);

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Hero />
        <MultiStepForm />
        <TestimonialCarousel />
      </Suspense>
    </>
  );
}

export default App;
