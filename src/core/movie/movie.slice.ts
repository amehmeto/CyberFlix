import { createSlice } from '@reduxjs/toolkit'
import { searchMovie } from './usecases/search-movie.usecase'
import { movieAdapter } from './movie'
import { retrieveTenRandomMovies } from './usecases/retrieve-ten-random-movies.usecase'

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    ...movieAdapter.getInitialState(),
    isLoading: false,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(searchMovie.fulfilled, (state, action) => {
        state.isLoading = false
        movieAdapter.setAll(state, action.payload)
      })
      .addCase(searchMovie.pending, (state) => {
        state.isLoading = true
        movieAdapter.removeAll(state)
      })
      .addCase(retrieveTenRandomMovies.fulfilled, (state, action) => {
        state.isLoading = false
        movieAdapter.setAll(state, action.payload)
      })
      .addCase(retrieveTenRandomMovies.pending, (state) => {
        state.isLoading = true
        movieAdapter.removeAll(state)
      })
  },
})
