import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll', async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/tasks');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask', async (text, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/tasks', { text });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (taskId, thunkAPI) => {
  try {
    const { data } = await axios.delete(`/tasks/${taskId}`);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const toggleCompleted = createAsyncThunk(
  '/tasks/toggleCompleted', async (task, thunkAPI) => {
    try {
      const { data } = await axios.put(`/tasks/${task.id}`, { completed: !task.completed });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
