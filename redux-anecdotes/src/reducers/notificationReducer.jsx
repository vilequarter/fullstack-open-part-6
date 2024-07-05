import { createSlice } from "@reduxjs/toolkit";

const initialState = ''

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(state, action) {
      console.log('notification')
      return action.payload
    },
    removeNotification() {
      return ''
    }
  }
})

export const notification = (content, seconds) => {
  return dispatch => {
    console.log(`notification`)
    dispatch(setNotification(content))
    setTimeout(() => dispatch(removeNotification()), seconds * 1000)
  }
}

export const { setNotification, removeNotification} = notificationSlice.actions
export default notificationSlice.reducer