import { createSelector } from '@reduxjs/toolkit'

export const selectMovieById = createSelector(
  [(state, id) => state.movies.entities[id]],
  (movie) => movie,
)
