import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'theme',
    initialState: {
        color: 'yellow'
    },
    reducers: {
        switchColor: (state) => {
            state.color === 'yellow' ? state.color = 'black' : state.color = 'yellow'
        }
    }
})

export const {switchColor} = slice.actions

export const themeSelector = state => state.theme

export default slice.reducer
