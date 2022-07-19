import { createSlice } from '@reduxjs/toolkit'

const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: {
      isFormOpen: false,
      users: [],
      activeUser: undefined
    },
    reducers: {
      addUser: (state, action) => {
        state.users.push(action.payload)
        if (state.activeUser == undefined) {
          state.activeUser = action.payload
        }
      },
      changeFormState: (state) => {
        state.isFormOpen = !state.isFormOpen
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { changeFormState, addUser } = authenticationSlice.actions
  
  export default authenticationSlice.reducer