import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const getData = createAsyncThunk(
  "user/getDate",
  async (dataTest, thunkAPI) => {
    // const { rejectedWithValue } = thunkAPI;
    // JSON.stringify -> convert the normal code into JSON code
    try {
      const token = JSON.parse(sessionStorage.getItem("token"));
      const res = await fetch(dataTest.api, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return error.message;
      // return rejectedWithValue(error.message);
    }
  }
);

export const createElement = createAsyncThunk(
  "user/createElement",
  async (dataObject, thunkAPI) => {
    // const { rejectedWithValue } = thunkAPI;
    // JSON.stringify -> convert the normal code into JSON code
    try {
      const token = JSON.parse(sessionStorage.getItem("token"));
      const res = await fetch(dataObject.api, {
        method: "POST",
        body: JSON.stringify(dataObject.info),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return error.message;
      // return rejectedWithValue(error.message);
    }
  }
);

export const deleteElement = createAsyncThunk(
  "user/deleteElement",
  async (dataObject, thunkAPI) => {
    // const { rejectedWithValue } = thunkAPI;
    // JSON.stringify -> convert the normal code into JSON code
    try {
      const token = JSON.parse(sessionStorage.getItem("token"));
      const res = await fetch(dataObject.api, {
        method: "DELETE",
        body: JSON.stringify(dataObject.info),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return error.message;
      // return rejectedWithValue(error.message);
    }
  }
);

export const updateInfo = createAsyncThunk(
  "user/updataInfo",
  async (dataObject, thunkAPI) => {
    // const { rejectedWithValue } = thunkAPI;
    // JSON.stringify -> convert the normal code into JSON code
    try {
      const token = JSON.parse(sessionStorage.getItem("token"));
      const res = await fetch(dataObject.api, {
        method: "POST",
        body: JSON.stringify(dataObject.updatedObject),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return error.message;
      // return rejectedWithValue(error.message);
    }
  }
);


// export const getOneElement = createAsyncThunk(
//   "user/getOneElement",
//   async (api, thunkAPI) => {
//     // const { rejectedWithValue } = thunkAPI;
//     // JSON.stringify -> convert the normal code into JSON code
//     try {
//       const token = JSON.parse(sessionStorage.getItem("token"));
//       const res = await fetch(api, {
//         method: "GET",
//         headers: {
//           "Content-type": "application/json; charset=UTF-8",
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       const data = await res.json();
//       console.log(data)
//       return data;
//     } catch (error) {
//       return error.message;
//       // return rejectedWithValue(error.message);
//     }
//   }
// );

export const logout = createAsyncThunk(
  "user/logout",
  async (dataObject, thunkAPI) => {
    // const { rejectedWithValue } = thunkAPI;
    // JSON.stringify -> convert the normal code into JSON code
    try {
      const token = JSON.parse(sessionStorage.getItem("token"));
      const res = await fetch(
        "https://app.medical-clinic.tk/api/auth/user/logout",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      return data;
    } catch (error) {
      return error.message;
      // return rejectedWithValue(error.message);
    }
  }
);

const initialState = {
  userInfo: sessionStorage.getItem("token"),
  info: {},
  alertShow: false,
  data: [],
  reservation: {},
  customer: []
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      sessionStorage.setItem("token", JSON.stringify(action.payload))
      state.userInfo = action.payload;
    },
    showInfo: (state, action) => {
      state.info = action.payload;
    },
    objectDetails: (state, action) => {
      state.reservation = action.payload
      // console.log(action.payload)
    },
    getCustomer: (state, action) => {
      state.customer = action.payload
      // console.log(action.payload)
    },
  },
  extraReducers: {
    [logout.pending]: (state, action) => {
    },
    [logout.fulfilled]: (state, action) => {
      state.userInfo = sessionStorage.setItem("token", "");
    },
    [logout.rejected]: (state, action) => {
      // state.error = action.payload;
    },
    // ----------- createElement
    [createElement.pending]: (state, action) => {
    },
    [createElement.fulfilled]: (state, action) => {
      // state.alertShow = true
      toast.success("You Add New Item!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    [createElement.rejected]: (state, action) => {
      toast.error("There Is Error Please Do It Again", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    // ----------- Get Data
    [getData.pending]: (state, action) => {
      console.log('pending')
    },
    [getData.fulfilled]: (state, action) => {
      state.data = action.payload
      toast.success("You Add New Item!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    [getData.rejected]: (state, action) => {
      toast.error("There Is Error Please Do It Again", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    // ---------> deleteElement
    [deleteElement.pending]: (state, action) => {
    },
    [deleteElement.fulfilled]: (state, action) => {
      // state.alertShow = true
      toast.error("You Delete IT Successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    [deleteElement.rejected]: (state, action) => {
      toast.error("There Is Error Please Do It Again", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    // ---------> updateInfo
    [updateInfo.pending]: (state, action) => {
    },
    [updateInfo.fulfilled]: (state, action) => {
      // state.alertShow = true
      toast.success("You Update IT Successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    [updateInfo.rejected]: (state, action) => {
      toast.error("There Is Error Please Do It Again", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    // ---------> updateInfo
    

  }
});
// Bearer

// Action creators are generated for each case reducer function
export const { login, showInfo, objectDetails, getCustomer } = userSlice.actions;

export default userSlice.reducer;
