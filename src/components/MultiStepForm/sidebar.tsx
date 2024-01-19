import clsx from "clsx";

interface SidebarProps {
  currentStep: number;
}
const steps = [
  {
    step: 1,
    title: "Name & Mobile",
  },
  {
    step: 2,
    title: "Age City & Company",
  },
  {
    step: 3,
    title: "Health Information",
  },
];
export const Sidebar = ({ currentStep }: SidebarProps) => {
  return (
    <aside className="bg-sidebar-image-mobile h-[100px] sm:min-h-[172px] bg-cover bg-no-repeat lg:rounded-lg lg:bg-sidebar-image-desktop">
      <nav>
        <ol className="flex justify-center pt-8 gap-4 lg:flex-col lg:w-60 lg:mx-autor">
          {steps.map((step) => (
            <li className="flex gap-4 lg:ml-8 items-center" key={step.step}>
              <button
                className={clsx(
                  "px-3 py-2 border-2 bg-white  border-[#5a51df] inline-flex rounded-full leading-none font-medium w-min h-min transition-colors duration-[400ms]",
                  currentStep === step.step
                    ? " text-[#5a51df] border-cyan-400 font-semibold"
                    : "black"
                )}
              >
                {step.step}
              </button>
              <span
                className={clsx(
                  "hidden lg:inline uppercase",
                  currentStep === step.step
                    ? " text-[#5a51df]  font-bold"
                    : "text-white"
                )}
              >
                <p className="font-normal">Step {step.step}</p>
                <span className="font-bold">{step.title}</span>
              </span>
            </li>
          ))}
        </ol>
      </nav>
    </aside>
  );
};
