import { renderEditTodo } from "./renderEditTodo";
import { TodoList } from "./todoList";

const addTodoForm = <HTMLDivElement>document.getElementById("addTodoForm");
const mainSection = <HTMLDivElement>document.getElementById("mainSection");
const modal = <HTMLDivElement>document.getElementById("modal");
export class EditTodo extends TodoList {
  constructor() {
    super();
  }
  private renderEditTodo : renderEditTodo = new renderEditTodo(modal);

  public listener(): void {
    // for add Todo
    addTodoForm.addEventListener("submit", (event): void => {
      event.preventDefault();
      const input = <HTMLInputElement>addTodoForm.children[0];
      const userId: number = this.list[this.list.length - 1].userId;
      const id: number = this.list[this.list.length - 1].id;
      const newTodo: Itodo = {
        userId: userId + 1,
        id: id + 1,
        title: input.value,
        completed: false,
      };
      input.value = "";
      this.list.push(newTodo);
      this.createTodo();
      this.renderEditTodo.message("Successfully Added");
    });
    // for edit and delete
    this.content.addEventListener("click", (event: MouseEvent): void => {
      let target = <HTMLImageElement>event.target;
      if (target.tagName !== "IMG") return;
      mainSection.classList.add("pointer-events-none", "blur-sm");
      let parent = <HTMLElement>target.parentElement;
      while (!parent.dataset.id) {
        parent = <HTMLElement>parent.parentElement;
      }
      const todoIndex = <number>(
        this.list.findIndex(({ id }) => id === Number(parent.dataset.id))
      );
      const todo = <Itodo>this.list[todoIndex];
      // edit Todo
      if (target.src.includes("edit")) {
        this.renderEditTodo.renderEdit(todo);
        // submit todo
        let submitEdit = <HTMLFormElement>modal.querySelector("#submitEdit");
        submitEdit.addEventListener("submit", (event: SubmitEvent) => {
          this.submitEdit({ event, submitEdit, todoIndex, todo });
          this.renderEditTodo.message("Successfully Edited");
        });
        // delete todo
      } else if (target.src.includes("trash")) {
        this.renderEditTodo.renderDelete(todo);
        let submitDelete = <HTMLFormElement>(
          modal.querySelector("#submitDelete")
        );
        submitDelete.addEventListener("click", () => {
          this.submitDelete(todoIndex);
          this.renderEditTodo.message("Sccessfully Deleted");
        });
      }

      let closeEdit = <HTMLButtonElement>modal.querySelector("#close");
      closeEdit.addEventListener("click", () => {
        modal.innerText = "";
        mainSection.classList.remove("pointer-events-none", "blur-sm");
      });
    });
  }
  // submit edit todo
  private submitEdit({ event, submitEdit, todoIndex, todo }: submitEditParams) {
    event.preventDefault();
    setTimeout(() => {
      mainSection.classList.remove("pointer-events-none", "blur-sm");
    }, 2500);
    let completeInput = <HTMLInputElement>submitEdit.isComplete;
    let titleInput = <HTMLInputElement>submitEdit.titleI;
    this.list[todoIndex] = {
      userId: todo.userId,
      id: todo.id,
      title: titleInput.value,
      completed: completeInput.checked,
    };
    this.createTodo();
  }

  // submit delete todo
  private submitDelete(todoIndex: number) {
    this.list.splice(todoIndex, 1);
    setTimeout(() => {
      mainSection.classList.remove("pointer-events-none", "blur-sm");
    }, 2500);
    this.createTodo();
  }
}
