import { createSlice } from "@reduxjs/toolkit";
import {
  UpdateUserList,
  createUserlist,
  deleteUserList,
  displayUserData,
} from "./UserService";

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    users: [],
    loading: false,
    isSuccess: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // create the userData
      .addCase(createUserlist.pending, (state) => {
        state.loading = true;
        state.isSuccess = false;
      })
      .addCase(createUserlist.fulfilled, (state, action) => {
        state.loading = false;
        state.isSuccess = true;
        state.users = [action.payload, ...state.users];
      })
      .addCase(createUserlist.rejected, (state, action) => {
        state.loading = false;
        state.isSuccess = false;
        state.users = action.payload;
      })
      // display the userList

      .addCase(displayUserData.pending, (state) => {
        state.loading = true;
        state.isSuccess = false;
      })
      .addCase(displayUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.isSuccess = true;
        state.users = action.payload;
      })
      .addCase(displayUserData.rejected, (state, action) => {
        state.loading = false;
        state.isSuccess = false;
      })

      // delete the userlist
      .addCase(deleteUserList.pending, (state) => {
        state.loading = true;
        state.isSuccess = false;
      })
      .addCase(deleteUserList.fulfilled, (state, action) => {
        state.loading = false;
        const { id } = action.payload;
        state.users = state.users.filter((ele) => ele.id !== id);
      })
      .addCase(deleteUserList.rejected, (state, action) => {
        state.loading = false;
        state.isSuccess = false;
        state.users = action.payload;
      })

      // update the userList
      .addCase(UpdateUserList?.pending, (state) => {
        state.loading = true;
        state.isSuccess = false;
      })
      .addCase(UpdateUserList?.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users?.map((elem) =>
          elem.id === action.payload.id ? action.payload : elem
        );
      })
      .addCase(UpdateUserList?.rejected, (state, action) => {
        state.loading = false;
        state.isSuccess = false;
        state.users = action.payload;
      });
  },
});

export default userSlice.reducer;
