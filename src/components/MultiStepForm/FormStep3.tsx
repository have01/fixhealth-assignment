import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../redux/formSlice"; // Import the setUserData action
interface Form1Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
interface Doctor {
  name?: string;
  specialty?: string;
  city?: string;
}

const FormStep3: React.FC<Form1Props> = ({ setStep }) => {
  const dispatch = useDispatch();
  const [availableDoctors, setAvailableDoctors] = useState([]);

  const { chiefComplaints, experience, doctor, age, city } = useSelector(
    (state: {
      form: {
        userData: {
          chiefComplaints: string;
          experience: string;
          doctor: string;
          age: number;
          city: string;
        };
      };
    }) => state.form.userData
  );

  useEffect(() => {
    // Fetch data from the API with the city parameter
    const urlParams = new URLSearchParams(window.location.search);
    const cityParam = urlParams.get("city") ? urlParams.get("city") : city;
    const apiUrl = `http://localhost:3000/doctorsArray?city=${cityParam}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setAvailableDoctors(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [city]);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ): void => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      dispatch(setUserData({ [name]: (e.target as HTMLInputElement).checked }));
    } else {
      dispatch(setUserData({ [name]: value }));
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="w-full rounded-lg p-5 text-white">
          <h2 className="text-2xl font-bold pb-5">Health Information</h2>

          <form onSubmit={(e) => handleNext(e)}>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">
                Chief Complaints
              </label>
              <textarea
                id="chiefComplaints"
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                placeholder="Briefly describe your chief complaints"
                required
                value={chiefComplaints}
                name="chiefComplaints"
                onChange={handleChange}
              />
            </div>
            {age && age > 40 && (
              <div className="flex items-center mb-4">
                <input
                  required
                  value={experience}
                  name="experience"
                  onChange={handleChange}
                  id="default-checkbox"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-300">
                  Experience with Physiotherapy
                </label>
              </div>
            )}

            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">
                Select Doctor
              </label>
              <select
                id="selectDoctor"
                className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                value={doctor}
                name="doctor"
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select a Doctor
                </option>
                {availableDoctors?.map((doctor: Doctor) => (
                  <option key={doctor.name} value={doctor.name}>
                    {doctor?.name}
                  </option>
                ))}
              </select>
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

export default FormStep3;
