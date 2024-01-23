// TestimonialCard.tsx

import React, { useState } from 'react';
import Rating from '@mui/material/Rating';

export interface TestimonialCardProps {
  username: string;
  userImage: string;
  reviewText: string;
  reviewLink: string;
  reviewStar: number | string;
  company: string;
  problem: string;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = (props) => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleReadMore = () => {
    setExpanded(!isExpanded);
  };

  const { username, userImage, reviewText, reviewLink, reviewStar, company, problem, index } = props;

  return (
    <>
      <div className="flex flex-col max-w-[300px] py-2 sm:max-w-sm mx-2 my-6 h-[345px] shadow-lg bg-white shadow-lg rounded-md">
        <div className="flex text-white p-4">
          <img
            src={`https://source.unsplash.com/300x300/?portrait?${index}`}
            alt=""
            className="w-20 h-20 mb-2 bg-center bg-cover rounded-full"
          />
          <div className='flex flex-col ml-4'>
            <p className="font-semibold text-black">{username}</p>
            <p className="text-sm text-black">{company}</p>
            <Rating name="simple-controlled" value={parseFloat(reviewStar as string)} />
          </div>
        </div>
        <div className={`rounded-t-lg px-2 ${isExpanded ? 'overflow-y-scroll' : 'overflow-y-scroll'}`}>
          <p className="font-semibold px-2">{problem}</p>
          <p className={`py-1 px-2 ${reviewText.length > 250 && !isExpanded ? 'line-clamp-6' : 'line-clamp-none'}`}>
            {reviewText}
          </p>
          {reviewText.length > 250 && (
            <button
              onClick={toggleReadMore}
              className="text-blue-500 hover:underline focus:outline-none px-2"
            >
              {reviewText.length > 250 && !isExpanded ? 'Read More' : 'Read Less'}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
