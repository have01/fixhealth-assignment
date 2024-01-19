import Doctor from "../2150780304-removebg.png";

const Hero = () => {
  const handleButtonClick = () => {
    const targetSection = document.getElementById("targetSection");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <section id="hero" className="">
        <div className="bg-center bg-cover  h-[600px] bg-gray-900 flex items-center">
          <div className="flex justify-center container mx-auto items-center  bg-gray-900 mt-10">
            <div className="h-full  text-center md:text-left  ">
              <h1 className="text-[#d8d9ef] text-4xl sm:text-6xl font-bold">
                The Best Therapy <br /> And Treatment <br />
                at <span className="text-[#5a51df]"> Fixhealth</span>
              </h1>
              <p className="text-slate-400 mt-4 text-xl sm:text-2xl">
                Get world class Physiotherapy <br /> care from highly qualified{" "}
                <br />
                and certified doctors near you
              </p>
              <button
                onClick={handleButtonClick}
                className="bg-[#5a51df] text-white shadow-md px-6 py-4 rounded-md mt-10"
              >
                Make an Appointment
              </button>
            </div>
            <div className="w-2/5  hidden md:flex">
              <img src={Doctor} alt="" sizes="" className="mr-10 " />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
