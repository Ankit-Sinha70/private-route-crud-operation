import { createAsyncThunk } from "@reduxjs/toolkit";

// create the userList
export const createUserlist = createAsyncThunk(
  "createUserlist",
  async (data) => {
    const response = await fetch(
      import.meta.env.VITE_APP_API_URL,
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
    import.meta.env.VITE_APP_API_URL
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
    `${import.meta.env.VITE_APP_API_URL}/${id}`,
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
      `${import.meta.env.VITE_APP_API_URL}/${data.id}`,
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
