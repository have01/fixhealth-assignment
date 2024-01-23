import React, { useState } from 'react'
import Rating from '@mui/material/Rating';
interface TestimonialCardProps {
  username: string;
  reviewText: string;
  company: string;
  reviewStar: number | number;
  problem: string
  // Add other properties if needed
}

const TestimonialCard: React.FC<{
  item: TestimonialCardProps;
  index: number;
}> = ({ item, index }) => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleReadMore = () => {
    setExpanded(!isExpanded);
  };


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
            <p className="font-semibold text-black">{item?.username}</p>
            <p className="text-sm text-black">{item?.company}</p>
            <Rating name="simple-controlled" value={item?.reviewStar} />
          </div>
        </div>
        <div className={`rounded-t-lg px-2 ${isExpanded ? 'overflow-y-scroll' : 'overflow-y-scroll'}`}>
          <p className="font-semibold px-2">{item?.problem}</p>
          <p className={`py-1 px-2 ${item.reviewText.length > 250 && !isExpanded ? 'line-clamp-6' : 'line-clamp-none'}`}>
            {item?.reviewText}
          </p>
          {item?.reviewText.length > 250 && (
            <button
              onClick={toggleReadMore}
              className="text-blue-500 hover:underline focus:outline-none px-2"
            >
              {item?.reviewText.length > 250 && !isExpanded ? 'Read More' : 'Read Less'}
            </button>
          )}
        </div>
      </div >
    </>
  );
};

export default TestimonialCard;
