import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { api_url } from '../config/api'





const initialState = {



  currentUser: {

  },


  items: [],
  cart: [],
  users: [],
  total: 0


}





export const counterSlice = createSlice({



  name: 'counter',

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


})







export const { userLogin, logout, setItems, add_to_cart, remove_from_cart } = counterSlice.actions

export default counterSlice.reducer