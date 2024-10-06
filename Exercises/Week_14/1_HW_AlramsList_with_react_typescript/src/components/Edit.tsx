import EditTime from "./Edit/EditTime";
import EditTitleDesc from "./Edit/EditTitleDesc";
import Remove from "./Edit/Remove";

export default function Edit({
  rOrE,
  dataAlarm,
  removeOrEdit,
  changeShowModal,
  plusFunc,
}: {
  rOrE: "remove" | "edit" | "editTime";
  dataAlarm: IDataAlarm;
  removeOrEdit: () => void | EditItem;
  changeShowModal: ChangeShowModal;
  // for when editTime , plusFunc is delete alarm
  plusFunc?: RemoveItem;
}) {


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
        <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
          {/* delete */}
          {rOrE === "remove" && <Remove removeFunc={removeOrEdit} dataAlarm={dataAlarm} changeShowModal={changeShowModal}/>}
          {/* edit */}
          {rOrE === "edit" && <EditTitleDesc editFunc={removeOrEdit as ()=>EditItem} dataAlarm={dataAlarm} changeShowModal={changeShowModal}/>}
          {/* editTime */}
          {rOrE === "editTime" && 
            <EditTime
              editFunc={removeOrEdit as () => EditItem}
              deleteFunc={plusFunc!}
              dataAlarm={dataAlarm}
              changeShowModal={changeShowModal}
            />
          }
        </div>
      </div>
    </div>
  );
}
