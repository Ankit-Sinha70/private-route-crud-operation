import { createAsyncThunk } from "@reduxjs/toolkit";

// create the userList
export const createUserlist = createAsyncThunk(
  "createUserlist",
  async (data) => {
    const response = await fetch(
      "https://64ae452bc85640541d4cb798.mockapi.io/crud",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      alert("Error creating");
    }
  }
);

// display the userlist

export const displayUserData = createAsyncThunk("displayUserData", async () => {
  const response = await fetch(
    "https://64ae452bc85640541d4cb798.mockapi.io/crud"
  );
  try {
    const result = await response.json();
    return result;
  } catch (error) {
    alert("Error creating");
  }
});

//delete the user list

export const deleteUserList = createAsyncThunk("deleteUserList", async (id) => {
  const response = await fetch(
    `https://64ae452bc85640541d4cb798.mockapi.io/crud/${id}`,
    {
      method: "DELETE",
    }
  );
  try {
    const result = await response.json();
    return result;
  } catch (error) {
    alert("Error creating");
  }
});

// update the user list

export const UpdateUserList = createAsyncThunk(
  "UpdateUserList", async (data) => {
    const response = await fetch(
      `https://64ae452bc85640541d4cb798.mockapi.io/crud/${data.id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      alert("Error Updating");
    }
  }
);
