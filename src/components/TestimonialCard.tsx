interface TestimonialCardProps {
  username: string;
  reviewText: string;
  company: string;
  // Add other properties if needed
}

const TestimonialCard: React.FC<{
  item: TestimonialCardProps;
  index: number;
}> = ({ item, index }) => {
  return (
    <>
      <div className="flex flex-col max-w-[300px] sm:max-w-sm mx-2 my-6 h-[280px] bg-white shadow-lg justify-between">
        <div className="px-2 py-4 rounded-t-lg sm:px-8 md:px-12">
          <p className="relative  py-1 text-md text-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="w-4 h-4 text-violet-400  "
            >
              <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
              <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
            </svg>
            <span className="line-clamp-4"> {item?.reviewText}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="absolute right-0 w-4 h-4 text-violet-400"
            >
              <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
              <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
            </svg>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center text-white p-4 m bg-[#5a51df] ">
          <img
            src={`https://source.unsplash.com/200x200/?portrait?${index}`}
            alt=""
            className="w-16 h-16 mb-2 -mt-14 bg-center bg-cover rounded-full"
          />
          <p className="text-xl font-semibold leadi">{item?.username}</p>
          <p className="text-sm ">{item?.company}</p>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
