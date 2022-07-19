import { createSlice } from '@reduxjs/toolkit'

const imageListSlice = createSlice({
    name: 'imageList',
    initialState: {
      selected: 0,
      images: [{
        id: 1,
        image: undefined,
        title: "Lorem ipsum dolor sit amet, consetetur",
        averageRating: 2,
        stars: 3.5,
        comments: [
          {
            username: 'Test',
            comment: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet.',
            stars: 3.5
          },
          {
            username: 'Test',
            comment: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet.',
            stars: 3.5
          }
        ]
      },
      {
        id: 2,
        image: undefined,
        title: "Lorem ipsum dolor sit amet, consetetur",
        averageRating: 2.5,
        stars: 4,
        comments: [
          {
            username: 'Test',
            comment: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet.',
            stars: 3.5
          },
          {
            username: 'Test',
            comment: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet.',
            stars: 3.5
          }
        ]
      },
      {
        id: 3,
        image: undefined,
        title: "Lorem ipsum dolor sit amet, consetetur",
        averageRating: 3,
        stars: 2,
        comments: [
          {
            username: 'Test',
            comment: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet.',
            stars: 3.5
          },
          {
            username: 'Test',
            comment: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet.',
            stars: 3.5
          }
        ]
      },
      {
        id: 4,
        image: undefined,
        title: "Lorem ipsum dolor sit amet, consetetur",
        averageRating: 4,
        stars: 1,
        comments: [
          {
            username: 'Test',
            comment: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet.',
            stars: 3.5
          },
          {
            username: 'Test',
            comment: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet.',
            stars: 3.5
          }
        ]
      },
      {
        id: 5,
        image: undefined,
        title: "Lorem ipsum dolor sit amet, consetetur",
        averageRating: 5,
        stars: 5,
        comments: [
          {
            username: 'Test',
            comment: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet.',
            stars: 3.5
          },
          {
            username: 'Test',
            comment: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet.',
            stars: 3.5
          }
        ]
      },
      {
        id: 6,
        image: undefined,
        title: "Lorem ipsum dolor sit amet, consetetur",
        averageRating: 1,
        stars: 2.5,
        comments: [
          {
            username: 'Test',
            comment: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet.',
            stars: 3.5
          },
          {
            username: 'Test',
            comment: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet.',
            stars: 3.5
          }
        ]
      },
      {
        id: 7,
        image: undefined,
        title: "Lorem ipsum dolor sit amet, consetetur",
        averageRating: 4.5,
        stars: 3,
        comments: [
          {
            username: 'Test',
            comment: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet.',
            stars: 3.5
          },
          {
            username: 'Test',
            comment: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet.',
            stars: 3.5
          }
        ]
      },
      {
        id: 8,
        image: undefined,
        title: "Lorem ipsum dolor sit amet, consetetur",
        averageRating: 3,
        stars: 0,
        comments: [
          {
            username: 'Test',
            comment: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet.',
            stars: 3.5
          },
          {
            username: 'Test',
            comment: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet.',
            stars: 3.5
          }
        ]
      }]
    },
    reducers: {
      select: (state, action) => {
        console.log("Hello")
        console.log(action)
        state.selected = action.payload
      }
    },
  })

  export const { select } = imageListSlice.actions
  
  export default imageListSlice.reducer