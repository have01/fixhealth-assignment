import React from "react";
import { setUserData } from "../../redux/formSlice";
import { useDispatch, useSelector } from "react-redux";

interface Form1Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const FormStep2: React.FC<Form1Props> = ({ setStep }) => {
  const dispatch = useDispatch();
  const { age, city, company } = useSelector(
    (state: {
      form: { userData: { age?: number; city: string; company: string } };
    }) => state.form.userData
  );

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    dispatch(setUserData({ [name]: value }));
  };
  return (
    <>
      <div className="flex justify-center">
        <div className="  rounded-lg p-5  text-white">
          <h2 className="text-2xl font-bold pb-2">Personal Info</h2>
          <p className="text-gray-400 pb-2">
            Please provide your age, city, and company information.
          </p>
          <form onSubmit={(e) => handleNext(e)}>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                placeholder="25"
                required
                value={age === undefined ? "" : age}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">City</label>
              <input
                type="text"
                id="city"
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                placeholder="Your City"
                required
                value={city}
                onChange={handleChange}
                name="city"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                placeholder="Your Company"
                required
                value={company}
                onChange={handleChange}
              />
            </div>
            <button
              onClick={() => setStep((prev) => prev - 1)}
              className="bg-[#5a51df] px-4 py-2 rounded-sm mr-2"
            >
              Back
            </button>
            <button type="submit" className="bg-[#5a51df] px-4 py-2 rounded-sm">
              Next
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormStep2;
