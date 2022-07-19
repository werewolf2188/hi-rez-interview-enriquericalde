import { configureStore } from '@reduxjs/toolkit'

import authenticationSlice from './State/authenticationSlice'
import imageListSlice from './State/imageListSlice'
import menuSlice from './State/menuSlice'

export default configureStore({
  reducer: {
    authentication: authenticationSlice,
    imageList: imageListSlice,
    menu: menuSlice
  }
})