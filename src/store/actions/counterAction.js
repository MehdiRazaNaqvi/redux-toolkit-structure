import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';




export const getUsersList = createAsyncThunk('todo/getUsersList', async (page, { rejectWithValue }) => {
    try {
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})