import { createSlice } from '@reduxjs/toolkit'
import { searchMovie } from './usecases/search-movie.usecase'
import { movieAdapter } from './movie'
import { retrieveTenRandomMovies } from './usecases/retrieve-ten-random-movies.usecase'

export const movieSlice = createSlice({
  name: 'movie',
  initialState: movieAdapter.getInitialState(),
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(searchMovie.fulfilled, (state, action) => {
        return movieAdapter.setAll(state, action.payload)
      })
      .addCase(retrieveTenRandomMovies.fulfilled, (state, action) => {
        return movieAdapter.setAll(state, action.payload)
      })
  },
})
