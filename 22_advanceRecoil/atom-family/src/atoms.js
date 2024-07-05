import { atomFamily } from "recoil";
import { TODOS } from "./todos";

export const todosAtomFamily = atomFamily({
  key: "todosAtomFamily",
  default: (id) => {
    let foundTodo = null;
    for (let i = 0; i < TODOS.length; i++) {
      if (TODOS[i].id === id) {
        foundTodo = TODOS[i];
      }
    }
    return foundTodo;
  },
});
