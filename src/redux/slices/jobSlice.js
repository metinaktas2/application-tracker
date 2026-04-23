import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoading: true, error: null, jobs: [] };

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = true;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
    setJobs: (state, action) => {
      (state.isLoading = false),
        (state.error = null),
        (state.jobs = action.payload);
    },
    deleteJob: (state, action) => {
      const index = state.jobs.findIndex((job) => job.id === action.payload);
      state.jobs.splice(index, 1);
    },
    createJob: (state, action) => {
      state.jobs.push(action.payload);
    },
    updatejob: (state, action) => {
      const index = state.jobs.findIndex((i) => i.id === action.payload.id);
      state.jobs.splice(index, 1, action.payload);
    },
  },
});

export const {
  setError,
  setLoading,
  setJobs,
  deleteJob,
  createJob,
  updatejob,
} = jobSlice.actions;
export default jobSlice.reducer;
