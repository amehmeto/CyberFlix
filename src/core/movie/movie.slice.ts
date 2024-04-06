import { createSlice } from '@reduxjs/toolkit'
import { searchMovie } from './usecases/search-movie.usecase'
import { movieAdapter } from './movie'

export const movieSlice = createSlice({
  name: 'movie',
  initialState: movieAdapter.getInitialState(),
  reducers: {},
  extraReducers(builder) {
    builder.addCase(searchMovie.fulfilled, (state, action) => {
      return movieAdapter.setAll(state, action.payload)
    })
  },
})
