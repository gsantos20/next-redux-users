import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CreateUser, User } from "@models/User"
import * as UserService from "@services/UserService";
import { toastr } from "common/Toastr";

const initialState: User[] = [];

export const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        console.log(action.payload);
        const { id, data } = action.payload.id;
        const userIndex = state.findIndex(user => user.id === id);
        if (userIndex !== -1) {
          state[userIndex] = data;
        }
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        return state.filter(user => user.id !== action.payload);
      });
  },
});


export const getUsers = createAsyncThunk('users/getUsers', async () => {
  const res = await UserService.get();

  if(res.data.success){
    return res.data.data;
  }else{
    toastr.error(res.data)
    throw new Error(res.data.data)
  }
});

export const createUser = createAsyncThunk(
  'users/createUser',
  async (user: CreateUser) => {
    const res = await UserService.create(user);

    if(res.data.success){
      toastr.success('Usuário criado com sucesso!')
      return res.data.data;
    }else{
      toastr.error(res.data.data)
      throw new Error(res.data.data)
    }
  }
);

export const updateUser = createAsyncThunk(
  'users/updateUser',
  async (user: User) => {
    const { id, ...data } = user
    const res = await UserService.update(id, data);

    if(res.data.success){
      toastr.success('Usuário atualizado com sucesso!')
      return res.data.data;
    }else{
      toastr.error(res.data.data)
      throw new Error(res.data.data)
    }
  }
);

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (id: number) => {
    const res = await UserService.remove(id);

    if(res.data.success){
      toastr.success('Usuário removido com sucesso!')
      return res.data.data;
    }else{
      toastr.error(res.data.data)
      throw new Error(res.data.data)
    }
  }
);

const { reducer } = usersSlice

export default reducer;
