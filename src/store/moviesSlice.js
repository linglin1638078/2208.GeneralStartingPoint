const { createSlice } = require('@reduxjs/toolkit')

const initialState= {
    list:[]
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setList: (state, action) => {
            state.list = action.payload
        }
    }
})

export default movieSlice.reducer;
export const { setList } = movieSlice.actions;