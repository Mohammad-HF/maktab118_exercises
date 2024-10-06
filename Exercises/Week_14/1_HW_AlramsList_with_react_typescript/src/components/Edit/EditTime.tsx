import { useState } from "react";
import Input from "../Input";

export default function EditTime({
  dataAlarm,
  editFunc,
  deleteFunc,
  changeShowModal,
}: {
  dataAlarm: IDataAlarm;
  editFunc: () => EditItem;
  deleteFunc: RemoveItem;
  changeShowModal: ChangeShowModal;
}) {
  const [time, setTime] = useState<string>("");
  const [disableExtend, setDisableExtend] = useState<boolean>(true);

  const timeValidator = (input: string) => {
    const time = new Date();
    if (
      input === "" ||
      Number(input.split(":")[0]) < Number(time.getHours()) ||
      (Number(input.split(":")[0]) === Number(time.getHours()) &&
        Number(input.split(":")[1]) <= Number(time.getMinutes()))
    ) {
      return `time can't less than or equal to ${
        time.getHours().toString().padStart(2, "0") +
        ":" +
        time.getMinutes().toString().padStart(2, "0")
      }`;
    } else return undefined;
  };
  const setInputTime = (input: string) => {
    setTime(input);
    setDisableExtend(input.length === 0);
  };

  return (
    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
      <div className="bg-skyBlueApp px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
            <img
              className="animate-bounce"
              src="./src/assets/alarm-clock.svg"
              alt=""
            />
            <audio src="./src/assets/DLBR.mp3" autoPlay></audio>
          </div>
          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
            <h3
              className="text-lg pt-1 font-bold leading-6 text-gray-900"
              id="modal-title"
            >
              Alarm
              <span className="px-2 text-white/90">{dataAlarm.title}</span>
              is now Active
            </h3>
            <div className="flex flex-col gap-y-3 pt-4 ">
              <label>Extend Time of Alarm</label>
              <Input
                value={dataAlarm.time}
                placeHolder="Alarm Time"
                type="time"
                validator={timeValidator}
                collectValue={(input) => {
                  setInputTime(input);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blueApp_1 px-4 py-3 sm:flex sm:flex-row-reverse sm:justify-evenly sm:px-6">
        <button
          onClick={() => {
            if (timeValidator(time)) return alert(timeValidator(time));
            editFunc()!(dataAlarm.title, dataAlarm.desc, time);
            changeShowModal();
          }}
          disabled={disableExtend}
          type="button"
          className="inline-flex w-full justify-center border-2 border-white rounded-md px-3 py-2 text-sm font-semibold hover:text-white shadow-blue-300/60 shadow-lg  bg-blueApp_2 hover:bg-blueApp_2/50 sm:ml-3 sm:w-auto disabled:bg-grayApp disabled:hover:text-black"
        >
          Extend Time
        </button>
        <button
          onClick={() => {
            deleteFunc!();
            changeShowModal();
          }}
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md border-white hover:text-white shadow-blue-300/60 shadow-lg bg-redApp hover:bg-redApp/50 px-3 py-2 text-sm font-semibold text-gray-900 border-2 sm:mt-0 sm:w-auto"
        >
          Delete Alarm
        </button>
        <button
          onClick={() => {
            editFunc()!(dataAlarm.title, dataAlarm.desc, dataAlarm.time, true);
            changeShowModal();
          }}
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md border-white hover:text-white shadow-blue-300/60 shadow-lg bg-gray-300/80 hover:bg-grayApp/50 px-3 py-2 text-sm font-semibold text-gray-900 border-2 sm:mt-0 sm:w-auto"
        >
          Turn Off Alarm
        </button>
      </div>
    </div>
  );
}
