import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(todo) {
        return {
          payload: { id: Date.now(), title: todo },
        };
      },
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, title } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.title = title;
      }
    },
  },
});

export const { addTodo, removeTodo, editTodo } = todosSlice.actions;
export default todosSlice.reducer;
