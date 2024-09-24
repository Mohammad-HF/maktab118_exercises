import Form from "./form";

export default function ContactUs() {
  return (
    <div className=" flex flex-col gap-y-14 ">
     <div className="flex flex-col gap-y-6">
     <h2 className="text-3xl font-bold text-black/75">Contact us</h2>
      <p className="text-sm text-grayPApp max-w-[390px]">
        Need an experinced and skilled gand with custom it projects ? fill out the
        form to get a free consultaion.
      </p>
     </div>
     {/* form */}
     <Form/>
    </div>
  );
}
