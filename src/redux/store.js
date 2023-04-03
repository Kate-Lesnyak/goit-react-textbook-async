import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import { configureStore } from '@reduxjs/toolkit';
import { persistedTasksReducer } from "./tasksSlice";
import { filtersReducer } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    tasks: persistedTasksReducer,
    filters: filtersReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);

