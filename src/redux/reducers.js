// import { persistReducer } from "redux-persist";
// import { combineReducers, createReducer } from "@reduxjs/toolkit";

// import storage from "redux-persist/lib/storage";
// import {
//   addTask,
//   deleteTask,
//   setStatusFilter,
//   toggleCompleted,
// } from "./actions";
// import { statusFilters } from "./constants";

// const tasksInitialState = [
//   { id: 0, text: "Learn HTML and CSS", completed: true },
//   { id: 1, text: "Get good at JavaScript", completed: true },
//   { id: 2, text: "Master React", completed: false },
//   { id: 3, text: "Discover Redux", completed: false },
//   { id: 4, text: "Build amazing apps", completed: false },
// ];

// const tasksReducer = createReducer(tasksInitialState, {
//   [addTask]: (state, action) => {
//     state.push(action.payload);
//   },
//   [deleteTask]: (state, action) => {
//     const index = state.findIndex(task => task.id === action.payload);
//     state.splice(index, 1);
//   },
//   [toggleCompleted]: (state, action) => {
//     for (const task of state) {
//       if (task.id === action.payload) {
//         task.completed = !task.completed;
//         break;
//       }
//     }
//   },
// });

// const filtersInitialState = {
//   status: statusFilters.all,
// };

// const filtersReducer = createReducer(filtersInitialState, {
//   [setStatusFilter]: (state, action) => {
//     state.status = action.payload;
//   },
// });


// export const rootReducer = combineReducers({
//   tasks: tasksReducer,
//   filters: filtersReducer,
// });

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['tasks'],
// };

// export const persistedReducer = persistReducer(persistConfig, rootReducer);

