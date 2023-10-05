import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { api_url } from '../config/api'
import { getTodoList } from './actions/postAction.js'



const initialState = {

  isLoading: false,

  currentUser: {

  },

  todos:[],

  posts: [

    { title: "Biryani", description: "A delicious Chicken Biryani", price: 500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ORqhxkUz3XAVuHmw690kOGIBPk6uQW7tq2zZERc8adPjQuCQAWdi&s=0" },
    { title: "Daal", description: "A delicious Maash Daal", price: 500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ORqhxkUz3XAVuHmw690kOGIBPk6uQW7tq2zZERc8adPjQuCQAWdi&s=0" },
    { title: "Pulao", description: "A delicious Chicken Pulao", price: 500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ORqhxkUz3XAVuHmw690kOGIBPk6uQW7tq2zZERc8adPjQuCQAWdi&s=0" },
    { title: "Biryani", description: "A delicious Chicken Biryani", price: 500, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ORqhxkUz3XAVuHmw690kOGIBPk6uQW7tq2zZERc8adPjQuCQAWdi&s=0" }

  ],
  cart: [],
  users: [],
  total: 0


}





export const postSlice = createSlice({



  name: 'post',

  initialState,


  reducers: {


    userLogin: (state, action) => {



      state.currentUser = action.payload._doc
      state.currentUser.jwt = action.payload.accessToken


    },



    logout: (state, action) => {
      state.currentUser = {}
    },



    setItems: (state, action) => {

      state.items = [...action.payload.data].reverse()
      // const reversed = [...state.articles].reverse()
      action.payload.cb()



    },

    add_to_cart: (state, action) => {

      state.cart = [...state.cart, action.payload]
      state.total = state.total + action.payload.price


    },


    remove_from_cart: (state, action) => {

      state.cart = state.cart.filter(v => v._id != action.payload._id)

      state.total = state.total - action.payload.price


    },





  },

  extraReducers: (builder) => {
    builder.addCase(getTodoList.pending, (state, action) => {
      state.isLoading = true;
    })
    builder.addCase(getTodoList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
      console.log(action.payload)
    })
    builder.addCase(getTodoList.rejected, (state, action) => {
      state.isError = true;
    })
  }





})






export const { userLogin, logout, setItems, add_to_cart, remove_from_cart } = postSlice.actions

export default postSlice.reducer