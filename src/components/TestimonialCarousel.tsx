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
import TestimonialCard, { TestimonialCardProps } from "./TestimonialCard";

interface clientReview {
  username: string;
  userImage: string;
  reviewText: string;
  reviewLink: string;
  reviewStar: number | string;
  company: string;
  problem: string;
}

const TestimonialCarousel = () => {
  const [visibleSlides, setVisibleSlides] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 640) {
        setVisibleSlides(1); // For mobile devices
      } else if (screenWidth <= 1024) {
        setVisibleSlides(2); // For iPad
      } else {
        setVisibleSlides(4); // For laptops and larger screens
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
      <div className="container mx-auto max-w-7xl ">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-5 text-[#5a51df]">
              What people <br />
              are saying.
            </h1>
            <h3 className="text-xl mb-5 font-light text-white">
              Don't just take our word for it , Read Reviews from our customers
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
          <Slider>
            {data.map((item: clientReview, index) => (
              <Slide
                index={index}
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5"
              >
                <TestimonialCard
                  username={item.username}
                  userImage={item.userImage}
                  reviewText={item.reviewText}
                  reviewLink={item.reviewLink}
                  reviewStar={item.reviewStar}
                  company={item.company}
                  problem={item.problem}
                  index={index}
                />
              </Slide>
            ))}
          </Slider>
        </CarouselProvider>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
