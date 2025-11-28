import {createSlice}  from '@reduxjs/toolkit'

const messageSlice = createSlice(
{
    name: 'message',
    initialState:{
        value: ''
    },
    reducers: {
showMessage :(state, action)=>{
state.value = 'welcome'
}

    }
}
)

export default   messageSlice.reducer;
export const {showMessage} = messageSlice.actions