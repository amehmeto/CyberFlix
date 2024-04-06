import { movieAdapter } from '../movie'
import { createSelector } from '@reduxjs/toolkit'

export const selectAllMovies = createSelector(
  [(state) => state.movies],
  (movies) => movieAdapter.getSelectors().selectAll(movies),
)
