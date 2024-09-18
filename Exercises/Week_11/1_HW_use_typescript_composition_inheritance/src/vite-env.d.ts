/// <reference types="vite/client" />
interface Itodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
  interface submitEditParams{
    event: SubmitEvent,
    submitEdit: HTMLFormElement,
    todoIndex: number,
    todo: Itodo
  }