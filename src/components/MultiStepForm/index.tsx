import { useState } from "react";
import { Sidebar } from "./sidebar";
import FormStep1 from "./FormStep1";
import { ThankYou } from "./thankYou";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";

function Index() {
  const [step, setStep] = useState(1);
  return (
    <div className="w-full bg-gray-900 " id="targetSection">
      <div className="bg-gray-900"></div>
      <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 ">
        <div className="bg-gray-900 w-full shadow rounded p-8 sm:p-12 ">
          <p className="text-2xl sm:text-5xl font-bold leading-7 text-center text-[#5a51df] ">
            Make an Appointment
          </p>
          <p className=" font-bold leading-7 text-center text-[#d8d9ef] mt-4">
            By filling out the form, you automatically make an appointment with
            a doctor.
          </p>
          <main className=" shadow-lg flex mt-10 flex-col text-neutral-cool-gray w-full lg:mx-auto lg:max-w-[58.75rem] rounded-md lg:mt-20 lg:flex-row grow lg:p-4 lg:rounded-lg bg-gray-700 lg:h-[26.75rem] ">
            <Sidebar currentStep={step} />
            <div className="px-4 relative bg-neutral-magnolia  lg:bg-transparent lg:flex lg:flex-col lg:w-full ">
              {step === 1 && <FormStep1 setStep={setStep} />}
              {step === 2 && <FormStep2 setStep={setStep} />}
              {step === 3 && <FormStep3 setStep={setStep} />}
              {step === 4 && <ThankYou />}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Index;
