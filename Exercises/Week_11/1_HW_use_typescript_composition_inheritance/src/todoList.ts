import axios from "axios";

export class TodoList {
  protected list: Itodo[] = [];
  protected content = <HTMLDivElement>document.getElementById("content");
  private urls: string = "https://jsonplaceholder.typicode.com/todos";
  constructor() {
    this.getAppendTodos();
  }
  private async fetchResponse() {
    const response = await axios.get<Itodo[]>(this.urls);
    this.list = response.data;
  }
  public getTodos() {
    return this.list;
  }
  public async getAppendTodos() {
    await this.fetchResponse();
    this.createTodo();
  }
  protected createTodo() {
    let html = this.list
      .map((item) => {
        return this.reneder(item);
      })
      .join(" ");
    this.content.innerHTML = html;
  }
  private reneder(obj: Itodo) {
    return `<div class="flex gap-x-3 " data-id= ${obj.id}>
          <input class="size-5 shrink-0 self-center pointer-events-none" type="checkbox" ${
            obj.completed ? "checked" : ""
          } >
          <p class="grow ">${obj.title}</p>
          <button class="size-5 self-center shrink-0"><img src="public/edit-button.svg" alt=""></button>
          <button class="size-5 self-center shrink-0"><img src="public/trash-icon.svg" alt=""></button>
        </div>`;
  }
}
