import { useEffect, useState } from "react";
import Input from "../Input";

export default function EditTitleDesc({
  dataAlarm,
  editFunc,
  changeShowModal
}: {
  dataAlarm: IDataAlarm;
  editFunc : ()=>EditItem;
  changeShowModal : ChangeShowModal;
}) {
  const [disableEdit, setDisableEidt] = useState<boolean>(false);
  const setValue = (name: keyof IEditValues, value: string) => {
    setAllValues({ ...allValues, [name]: value });
  };
  const [allValues, setAllValues] = useState<IEditValues>({
    title: dataAlarm.title,
    description: dataAlarm.desc,
  });

  useEffect(() => {
    if (Object.values(allValues).includes("") && disableEdit !== true) {
      setDisableEidt(true);
    } else if (!Object.values(allValues).includes("") && disableEdit !== false)
      setDisableEidt(false);
  }, [allValues]);
  return (
    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
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
              <label>Title Alarm</label>
              <Input
                value={dataAlarm.title}
                placeHolder="Alarm title"
                type="text"
                validator={(input) => {
                  return input.length < 3
                    ? "title should be 3 char or more"
                    : undefined;
                }}
                collectValue={(input) => {
                  setValue("title", input);
                }}
              />
              <label>Description Alarm</label>
              <Input
                value={dataAlarm.desc}
                type="text"
                placeHolder="Alarm Description"
                validator={(input) => {
                  return input.length < 10
                    ? "description should be 10 char or more"
                    : undefined;
                }}
                collectValue={(input) => {
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
            editFunc()!(
              allValues.title,
              allValues.description,
              dataAlarm.time
            );
            changeShowModal();
          }}
          disabled={disableEdit}
          type="button"
          className="inline-flex w-full justify-center border-2 border-white rounded-md px-3 py-2 text-sm font-semibold hover:text-white shadow-blue-300/60 shadow-lg bg-redApp hover:bg-redApp/50 sm:ml-3 sm:w-auto disabled:bg-grayApp disabled:hover:text-black"
        >
          Edit
        </button>
        <button
          onClick={() => {
            changeShowModal();
          }}
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md border-white hover:text-white shadow-blue-300/60 shadow-lg bg-blueApp_2 hover:bg-blueApp_2/50 px-3 py-2 text-sm font-semibold text-gray-900 border-2 sm:mt-0 sm:w-auto"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
