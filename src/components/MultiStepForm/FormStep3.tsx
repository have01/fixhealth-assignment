import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../redux/formSlice";

interface Form1Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

interface Doctor {
  name?: string;
  specialty?: string;
  city?: string;
  image?: string;
}

const FormStep3: React.FC<Form1Props> = ({ setStep }) => {
  const dispatch = useDispatch();
  const [availableDoctors, setAvailableDoctors] = useState<Doctor[]>([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null); // State to store selected doctor details
  const [selected, setSelected] = useState(false)
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const { chiefComplaints, experience, age, city } = useSelector(
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
    const apiUrl = `https://fixbackend-production.up.railway.app/api/doctors?city=${cityParam}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setAvailableDoctors(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [city]);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(selectedDoctor)
    if (!selectedDoctor) {
      setSelected(!selected)
    } else {
      setStep(4);
      setSelected(false)
    }
  };

  const handleDoctorSelect = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setDropdownOpen(false);
    setSelected(false)
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

              <div className="relative">
                <button
                  id="dropdownDefaultButton"
                  onClick={toggleDropdown}
                  className="text-black w-full flex justify-between bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                >
                  {selectedDoctor ? (
                    <>
                      <div className="flex items-center">
                        <img
                          src={selectedDoctor.image}
                          alt=""
                          className="rounded-full flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full"
                        />
                        <p className="">
                          {selectedDoctor.name}{" "}
                          <span className="ml-2">
                            ({selectedDoctor.specialty})
                          </span>
                        </p>

                      </div>
                    </>
                  ) : (
                    "Select doctor"
                  )}
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {/* Dropdown menu */}
                {isDropdownOpen && (
                  <ul className="py-2 w-full text-sm text-gray-700 bg-white absolute max-h-[280px] rounded-sm mt-1 overflow-y-auto dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    {availableDoctors?.map((doctor: Doctor) => (
                      <div key={doctor?.name} onClick={() => handleDoctorSelect(doctor)} className="flex w-full border-b border-gray-300  py-1 items-center px-2 cursor-pointer">
                        <img src={doctor?.image} alt="doctor" className="rounded-full flex-shrink-0 object-cover w-12 h-12 mx-1 rounded-full" />
                        <p className="ml-2"> {doctor?.name} <span className="ml-2">({doctor?.specialty})</span></p>
                      </div>
                    ))}
                  </ul>
                )}
                {selected ? "Select a doctor before submit" : ""}
              </div>
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

export default FormStep3;
