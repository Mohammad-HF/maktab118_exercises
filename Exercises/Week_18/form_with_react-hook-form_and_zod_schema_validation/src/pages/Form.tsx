import { AllInput } from "../containers/AllInput";

export const Form: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto ">
      <section className="bg-appBlue1 text-appWhite p-6">
        <h2 className="text-sm font-semibold">Global Company</h2>
        <h2 className="text-appBlue2 text-3xl font-bold ">
          REGISTRATION <span className="block leading-4 text-appWhite ">FORM</span>
        </h2>
      </section>
      <section className=" p-6 ">
        <AllInput/>
        <div className="flex md:px-6 gap-x-2 px-2 py-4 text-appWhite bg-appBlue1">
            <div className="sm:w-1/2">
                <h4>+000-000-0000</h4>
                <h4>+name@example.com</h4>
                <h4>www.example.com</h4>
            </div>
            <div className="border-l pl-2">
                <h4>123 street name,city,</h4>
                <h4>stat - 00000</h4>
            </div>
        </div>
      </section>
    </div>
  );
};
