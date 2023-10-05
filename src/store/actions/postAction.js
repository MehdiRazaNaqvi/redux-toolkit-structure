import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getTodoList = createAsyncThunk('todo/getList', async (page, { rejectWithValue }) => {
    try {
        const data = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})