// modal class
export class renderEditTodo {
  constructor(private modal: HTMLDivElement) {}
  public renderEdit(todo: Itodo): void {
    let html: string = `<div class="absolute bg-gray-300 p-4 rounded-md left-[calc(50%_-_162px)] top-[calc(50%_-_93px)]">
            <div class="border-b-2 border-b-black mb-4 pb-2 flex justify-between" >
              <h2 class="text-center font-bold ">Edit Your Task</h2>
              <button id="close"><img src="public/close.svg" alt=""></button>
            </div>
            <form class="" id="submitEdit">
              <label for="title">Title for Task:</label>
              <input class="bg-gray-200 rounded-sm ml-2 pl-2" type="text" name="titleI" id="title" value="${
                todo.title
              }" required>
              <div class="flex items-center gap-x-5 mt-2">
                <label for="isComplete">isComplete:</label>
                <input class="size-4" type="checkbox" name="isComplete" id="isComplete" ${
                  todo.completed ? "checked" : ""
                } required">
              </div>
             <button type="submit" class="bg-green-500 text-white px-4 py-2 text-sm font-semibold rounded-md block mx-auto mt-3">Done</button>
            </form>
          </div>`;
    this.modal.innerHTML = html;
  }

  // remove html render
  public renderDelete(todo: Itodo): void {
    let html: string = `<div class="w-[270px] bg-gray-300 rounded-lg p-4 absolute left-[calc(50%_-_135px)] top-[calc(50%_-_54px)]">
            <h2 class="text-center font-bold ">Remove The Task</h2>
            <P class="text-sm">Are you sure to delete <span class="text-red-600 font-semibold">'${todo.title}'</span></P>
            <div class="flex justify-between pt-3 font-semibold">
              <button id="close" class="text-white bg-gray-500 px-4 py-2 text-sm rounded-md hover:bg-gray-400">No</button>
              <button id="submitDelete" class="text-red-100 bg-red-600 px-4 py-2 text-sm rounded-md hover:bg-red-500">Yes</button>
            </div>
          </div>`;
    this.modal.innerHTML = html;
  }

  // close modal

  // message for add or edit or delete
  public message(text: string) {
    let html: string = `        <div class="absolute left-0 top-0 animate-dropDrown hover:ani">
        <h2 class="font-bold text-white text-center bg-green-500 px-4 py-3 w-fit rounded-md">${text}</h2>
      </div>`;
    this.modal.innerHTML = html;
    setTimeout(() => {
      this.modal.innerHTML = "";
    }, 2500);
  }
}
