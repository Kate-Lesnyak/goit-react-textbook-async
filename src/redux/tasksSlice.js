import { createSlice } from "@reduxjs/toolkit";
import { addTask, fetchTasks } from "./operations";
// import { nanoid } from "nanoid";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";


export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchTasks.pending](state) {
      state.isLoading = true
    },
    [fetchTasks.fulfilled](state, action) {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchTasks.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    [addTask.pending](state) {
      state.isLoading = true
    },
    [addTask.fulfilled](state, { payload }) {
      state.items.push(payload);
      state.isLoading = false;
      state.error = null;
    },
    [addTask.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    }
  }
  // reducers: {
  //   addTask: {
  //     reducer(state, action) {
  //       state.items.push(action.payload);
  //     },
  //     prepare(text) {
  //       return {
  //         payload: {
  //           text,
  //           id: nanoid(),
  //           completed: false,
  //         },
  //       }
  //     }
  //   },

  // deleteTask(state, action) {
  //   // state.items = state.items.filter(({ id }) => id !== action.payload);
  //   const index = state.items.findIndex(task => task.id === action.payload);
  //   state.items.splice(index, 1);
  // },

  // toggleCompleted(state, action) {
  //   for (const task of state.items) {
  //     if (task.id === action.payload) {
  //       task.completed = !task.completed;
  //       break;
  //     }
  //   }
  // }
});

// export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;

// export const getTasks = state => state.tasks.items;

export const tasksReducer = tasksSlice.reducer;

// const persistConfig = {
//   key: 'tasks',
//   storage,
// };

// export const persistedTasksReducer = persistReducer(persistConfig, tasksSlice.reducer);


