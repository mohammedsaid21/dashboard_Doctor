import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const logOut = createAsyncThunk(
  "product/logOut",
  async (user, thunkAPI) => {
    // const { rejectedWithValue } = thunkAPI;
    // JSON.stringify -> convert the normal code into JSON code
    try {
      const res = await fetch("https://app.medical-clinic.tk/api/auth/user/logout", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      console.log(user)
      const data = await res.json();
      return data;
    } catch (error) {
      return error.message
      // return rejectedWithValue(error.message);
    }
  }
);

const initialState = {
  userInfo: sessionStorage.getItem('token')
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.userInfo = action.payload
    },
    logout: (state) => {
      // state.userInfo = null
      sessionStorage.removeItem('token')
    },

  },
})
// Bearer
//eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2IiwianRpIjoiOTQ5N2Y0MzgwMTBlMWYyYmVlMjg2MGZiNTBiMWI2YTI5MDcxNWJkNTU1ODYyYzVkZDFjM2Y4OWExZjU4OWE3NDI2MTRmNmVkODZhNmMzYjEiLCJpYXQiOjE2NTExNzU2MjUuMDI0NjgxMDkxMzA4NTkzNzUsIm5iZiI6MTY1MTE3NTYyNS4wMjQ2ODQ5MDYwMDU4NTkzNzUsImV4cCI6MTY4MjcxMTYyNS4wMjExODk5MjgwNTQ4MDk1NzAzMTI1LCJzdWIiOiI3Iiwic2NvcGVzIjpbXX0.plL0R-J2REnfWMBBE8lExBxqSrrStI6HDI96VhwdWBh1nARtK1q5xEvAl5wK3Nc6c-pUA_weUQEm7sV-LdG7hM9-_udx9KHJR_YPxXUctcXIda0a-HiT_1IJ3oLn4ksHFJlu0CGUiAugYH8jcdCZmbGUN5hBRlE_aMeTOGpC_Ylqns6Uiwx_1HSJmpQvuEeI4OsxWgO-Ht__GdI1gTXfc0A6JfEJSw6e_YvCAQ0KFf3hjACJIve_MrlakSxCUax9V7-IqstJi1reJpjtBhYKei5iDUTtJ8oKTAvRDWtOh_992Tj-b3fftn_aJEG2mlJT3AqeShLcLxFu7l-Q5GceOab2AZ65TaiEt9zoD59AU-_AGHJVNVip7vCVBLM93_9bhk5gYPokEmWm6Eeugoyz6Wi1DiFYZlNfL6oToh2MPmtGouqoIIHb3g-cnI4HMWNn4hxbqriliEIy-zH93R3UiszshbeHDuMwBNPgKtXo1l46A7_o1RH3GeiNd9CipoyKniAeSOU9UijfaN_pZh8ljJuCiq7dn9454H6jEWthxvXkUbPf1I0_FH9rrsAxZTKZnigF5u3YXd6dRQm7wpibZyL7nsQAE5zFKSwXnAFlI5PY3vJ5WwHGfBD-vqb7JMg3mqPIqdqbsc9blmEs0WnTlpR20ANCwcKcnrE4m0v_SOU

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions

export default userSlice.reducer