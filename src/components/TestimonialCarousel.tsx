// Carousel.tsx

import React, { useEffect, useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import data from "../mockdata/testimonialData";
import TestimonialCard from "./TestimonialCard";

interface clientReview {
  username: string;
  userImage: string;
  reviewText: string;
  reviewLink: string;
  reviewStar: number | string;
}

const TestimonialCarousel = () => {
  const [visibleSlides, setVisibleSlides] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 640) {
        setVisibleSlides(1); // For mobile devices
      } else if (screenWidth <= 1024) {
        setVisibleSlides(3); // For iPad
      } else {
        setVisibleSlides(5); // For laptops and larger screens
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-gray-900 w-full">
      <div className="container mx-auto px-8">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-5 text-[#5a51df]">
              What people <br />
              are saying.
            </h1>
            <h3 className="text-xl mb-5 font-light text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <div className="text-center mb-10">
              <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
            </div>
          </div>
        </div>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={data.length}
          visibleSlides={visibleSlides}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex flex-col">
            <div className="flex justify-between container px-6">
              <div></div>
              <div className="flex flex-row justify-center">
                <ButtonBack
                  role="button"
                  aria-label="slide backward"
                  className="bg-white dark:bg-slate-800 p-2 w-6 h-6 ring-1 ring-slate-900/5 dark:ring-slate-200/20 transform transition duration-500 hover:scale-110 shadow-lg rounded-full flex items-center justify-center mr-2 ml-2"
                  id="prev"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </ButtonBack>
                <ButtonNext
                  role="button"
                  aria-label="slide forward"
                  className="bg-white dark:bg-slate-800 p-2 w-6 h-6 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg transform transition duration-500 hover:scale-110 rounded-full flex items-center justify-center"
                  id="next"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </ButtonNext>
              </div>
            </div>

            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden mt-2">
              <Slider>
                <div
                  id="slider"
                  className="h-auto p-4 flex items-center justify-start transition ease-out duration-700"
                >
                  {data.map((item: clientReview, index) => (
                    <Slide
                      index={index}
                      key={index}
                      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5"
                    >
                      <TestimonialCard item={item} />
                    </Slide>
                  ))}
                </div>
              </Slider>
            </div>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
};

export default TestimonialCarousel;