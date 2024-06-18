import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addUser, fetchUsers, userLogin } from './userApi';

const initialState = {
    arrUsers: [],
    currentUser: null,
    statusUser: ""

}
export const fetchAllUsers = createAsyncThunk(
    'user/fetchAllUsers',
    async (thunkAPI) => {
        const res = await fetchUsers();
        return res;
    }
)
export const loginUser = createAsyncThunk(
    'user/login',
    async (user, thunkAPI) => {
        console.log('slice')
        const res = await userLogin(user);
        return res;
    }
)
export const addNewUser = createAsyncThunk(
    'user/addNewUser',
    async (newUser, thunkAPI) => {
        const res = await addUser(newUser);
        return res;
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAdmin:(state,action) =>{
            state.statusUser=action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                state.currentUser = action.payload;
                state.statusUser = "client";
            })
            .addCase(addNewUser.fulfilled, (state, action) => {
                state.currentUser = action.payload;
                state.statusUser = "client";
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.arrUsers = action.payload;
            })
    },

})

export const {setAdmin} = userSlice.actions;
export default userSlice.reducer;
