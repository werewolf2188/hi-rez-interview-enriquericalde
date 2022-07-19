import { createSlice } from '@reduxjs/toolkit'

const items = [
  { name: "imageList", path: "/" },
  { name: "imageDetails", path: "/imageDetails" }
]

function getSelected() {
  if (typeof window === 'object' &&
      window.location &&
      window.location.pathname) {
    return items.find(element => element.path === window.location.pathname)
  }
  return items[0]
}

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    items: items,
    selected: getSelected()
  },
  reducers: {
  },
})

// Action creators are generated for each case reducer function

export default menuSlice.reducer