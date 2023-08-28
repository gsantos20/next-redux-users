import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CreateUser, User } from "@models/User"
import * as UserService from "@services/UserService";

const initialState: User[] = [];

export const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        return action.payload.data;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.push(action.payload.data);
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        console.log(action.payload);
        const { id, data } = action.payload.data.id;
        const userIndex = state.findIndex(user => user.id === id);
        if (userIndex !== -1) {
          state[userIndex] = data;
        }
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        return state.filter(user => user.id !== action.payload.data);
      });
  },
});

export const getUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await UserService.get();
  return response.data;
});

export const createUser = createAsyncThunk(
  'users/createUser',
  async (user: CreateUser) => {
    const response = await UserService.create(user);
    return response.data;
  }
);

export const updateUser = createAsyncThunk(
  'users/updateUser',
  async ({ id, data }: { id: number; data: User }) => {
    const response = await UserService.update(id, data);
    return response.data;
  }
);

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (id: number) => {
    const response = await UserService.remove(id);
    return response.data;
  }
);

const { reducer } = usersSlice

export default reducer;
