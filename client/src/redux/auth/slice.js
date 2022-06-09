import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// state

const initialState = {
  loading: false,
  error: null,
  token: null,
  data: null,
};

export const register = createAsyncThunk(
  "user/register",

  async (paramaters, thunkAPI) => {
    const { data } = await axios.post(
      `http://localhost:8800/api/auth/register`,
      {
        username: paramaters.username,
        email: paramaters.email,
        password: paramaters.password,
      }
    );

    return data; // return must be token,otherwise will cause token invalid
  }
);

export const signIn = createAsyncThunk(
  "user/singIn",

  async (paramaters, thunkAPI) => {
    const { data } = await axios.post(`http://localhost:8800/api/auth/login`, {
      email: paramaters.email,
      password: paramaters.password,
    });

    return data.token; // return must be token,otherwise will cause token invalid
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,

  // reducers
  reducers: {
    logOut: (state) => {
      state.token = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: {
    // function as reducers object content

    // pending
    [register.pending.type]: (state) => {
      state.loading = true;
    },

    // fulfilled
    [register.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
    // rejected

    [register.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // pending
    [signIn.pending.type]: (state) => {
      state.loading = true;
    },

    // fulfilled
    [signIn.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.token = action.payload;
      state.error = null;
    },
    // rejected

    [signIn.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
// action
// Action creators are generated for each case reducer function
export const { logOut } = userSlice.actions;

export default userSlice.reducer;
