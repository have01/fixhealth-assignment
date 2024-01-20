import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../redux/formSlice";

interface Form1Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const FormStep1: React.FC<Form1Props> = ({ setStep }) => {
  const { name, mobile } = useSelector(
    (state: { form: { userData: { name: string; mobile: string } } }) =>
      state.form.userData
  );
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    dispatch(setUserData({ [name]: value }));
  };
  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <>
      <div className="flex justify-center">
        <div className=" rounded-lg p-5  text-white">
          <h2 className="text-2xl font-bold pb-2">Personal Info</h2>
          <p className="text-gray-400 mb-2">
            Please provide your name, email address, and phone number.
          </p>
          <form onSubmit={handleNext}>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                placeholder="name"
                required
                value={name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Mobile</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                placeholder="9999955555"
                required
                value={mobile}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="bg-[#5a51df] px-4 py-2 rounded-sm">
              Next
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormStep1;
