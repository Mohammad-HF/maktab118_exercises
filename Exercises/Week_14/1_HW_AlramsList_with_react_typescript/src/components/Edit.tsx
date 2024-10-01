import { useEffect, useState } from "react";
import Input from "./Input";

export default function Edit({
  rOrE,
  dataAlarm,
  removeOrEdit,
  changeShowModal,
}: {
  rOrE: "remove" | "edit";
  dataAlarm: { title: string; desc: string };
  removeOrEdit: () => void | ((title : string , desc :string)=>void);
  changeShowModal: ChangeShowModal;
}) {
    const [disableEdit , setDisableEidt] = useState<boolean>(false);
    const [allValues, setAllValues] = useState<IEditValues>({
        title: dataAlarm.title,
        description: dataAlarm.desc,
      });
      const setValue = (name : keyof IEditValues, value: string) => {
        setAllValues({ ...allValues, [name]: value });
      }


      useEffect(()=>{
        if(Object.values(allValues).includes("") && disableEdit !== true) {
            setDisableEidt(true)
        }else if(!Object.values(allValues).includes("") && disableEdit !== false) setDisableEidt(false);
        
      },[allValues])
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >

      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          {/* delete */}
          <div
            className={`${
              rOrE === "edit" && "hidden"
            } relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg`}
          >
            <div className="bg-skyBlueApp px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start pt-2 pb-6">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg
                    className="h-6 w-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                    />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                  <h3
                    className="text-lg pt-1 font-bold leading-6 text-gray-900"
                    id="modal-title"
                  >
                    Delete Alarm
                  </h3>
                  <div className="my-4 ">
                    <p className="text-sm text-gray-700">
                      Are you sure you want to delete
                      <span className="text-red-500 bg-blueApp_1 rounded-sm font-semibold pb-1 px-1 mx-1">
                        {dataAlarm.title}
                      </span>
                      Alarm ?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blueApp_1 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                onClick={() => {
                  removeOrEdit();
                  changeShowModal();
                }}
                type="button"
                className="inline-flex w-full justify-center border-2 border-white rounded-md px-3 py-2 text-sm font-semibold hover:text-white shadow-blue-300/60 shadow-lg bg-redApp hover:bg-redApp/50 sm:ml-3 sm:w-auto"
              >
                Yes
              </button>
              <button
                onClick={changeShowModal}
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md border-white hover:text-white shadow-blue-300/60 shadow-lg bg-blueApp_2 hover:bg-blueApp_2/50 px-3 py-2 text-sm font-semibold text-gray-900 border-2 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </div>
          {/* edit */}
          <div
            className={`${
              rOrE === "remove" && "hidden"
            } relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg`}
          >
            <div className="bg-skyBlueApp px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <img src="./src/assets/alarm-clock.svg" alt="" />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                  <h3
                    className="text-lg pt-1 font-bold leading-6 text-gray-900"
                    id="modal-title"
                  >
                    Edit Alarm 
                    <span className="pl-2 text-white/90">{dataAlarm.title}</span>
                  </h3>
                  <div className="flex flex-col gap-y-3 pt-4 ">
                    <label htmlFor="title">Title Alarm</label>
                    <Input
                      value={dataAlarm.title}
                      placeHolder="Alarm title"
                      type="text"
                      validator={(input) => {
                        return input.length < 3
                          ? "title should be 3 char or more"
                          : undefined;
                      }}
                      collectValue= {(input) => {
                        setValue("title", input);
                      }}
                    />
                    <label htmlFor="desc">Description Alarm</label>
                    <Input
                      value={dataAlarm.desc}
                      type= "text"
                      placeHolder= "Alarm Description"
                      validator= {(input) => {
                        return input.length < 10
                          ? "description should be 10 char or more"
                          : undefined;
                      }}
                      collectValue= {(input) => {
                        setValue("description", input);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blueApp_1 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
                onClick={() => {
                  removeOrEdit()!(allValues.title , allValues.description)
                  changeShowModal();
                }}
                disabled = {disableEdit}
                type="button"
                className="inline-flex w-full justify-center border-2 border-white rounded-md px-3 py-2 text-sm font-semibold hover:text-white shadow-blue-300/60 shadow-lg bg-redApp hover:bg-redApp/50 sm:ml-3 sm:w-auto disabled:bg-grayApp disabled:hover:text-black"
              >
                Edit
              </button>
              <button
                onClick={changeShowModal}
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md border-white hover:text-white shadow-blue-300/60 shadow-lg bg-blueApp_2 hover:bg-blueApp_2/50 px-3 py-2 text-sm font-semibold text-gray-900 border-2 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
