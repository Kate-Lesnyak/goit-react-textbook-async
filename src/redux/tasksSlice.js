import { createSlice } from "@reduxjs/toolkit";
import { addTask, deleteTask, fetchTasks, toggleCompleted } from "./operations";

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false; state.error = action.payload;
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchTasks.pending]: handlePending,
    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchTasks.rejected]: handleRejected,

    [addTask.pending]: handlePending,
    [addTask.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items.push(payload);
      // state.items = [...state.items, payload];
    },
    [addTask.rejected]: handleRejected,

    [deleteTask.pending]: handlePending,
    [deleteTask.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(({ id }) => id !== payload.id);
      // const index = state.items.findIndex(
      //   task => task.id === payload.id
      // );
      // state.items.splice(index, 1);
    },
    [deleteTask.rejected]: handleRejected,

    [toggleCompleted.pending]: handlePending,
    [toggleCompleted.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === payload.id
      );
      state.items.splice(index, 1, payload);
    },
    [toggleCompleted.rejected]: handleRejected,
  }
});

export const tasksReducer = tasksSlice.reducer;

