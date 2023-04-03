import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const tasksInitialState = {
  items: [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
  ],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
          },
        }
      }
    },

    deleteTask(state, action) {
      // state.items = state.items.filter(({ id }) => id !== action.payload);
      const index = state.items.findIndex(task => task.id === action.payload);
      state.items.splice(index, 1);
    },

    toggleCompleted(state, action) {
      for (const task of state.items) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    }
  }
});

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;

export const getTasks = state => state.tasks.items;

const persistConfig = {
  key: 'tasks',
  storage,
};

export const persistedTasksReducer = persistReducer(persistConfig, tasksSlice.reducer);


