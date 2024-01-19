interface TestimonialCardProps {
  username: string;
  reviewText: string;
  // Add other properties if needed
}

const TestimonialCard: React.FC<{ item: TestimonialCardProps }> = ({
  item,
}) => {
  return (
    <>
      <div className="relative p-6 h-[210px] space-y-6 leading-none rounded-lg bg-white ring-1 ring-gray-900/5 mx-2">
        <div className="flex items-center space-x-4">
          <img
            src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
            className="w-12 h-12 bg-center bg-cover border rounded-full"
            alt="Tim Cook"
          />
          <div>
            <h3 className="text-lg font-semibold text-black">
              {item?.username}
            </h3>
            <p className="text-gray-500 text-md">Compnay Name</p>
          </div>
        </div>
        <p className="leading-normal text-black text-md line-clamp-4">
          {item?.reviewText}
        </p>
      </div>
    </>
  );
};

export default TestimonialCard;
