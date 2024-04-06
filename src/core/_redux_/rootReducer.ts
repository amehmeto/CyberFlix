import { combineReducers } from '@reduxjs/toolkit'
import { movieSlice } from '../movie/movie.slice'

export const rootReducer = combineReducers({
  movies: movieSlice.reducer,
})
