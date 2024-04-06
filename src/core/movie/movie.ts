import { createEntityAdapter } from '@reduxjs/toolkit'

export type Movie = {
  id: string
  title: string
  actors: string[]
  aka: string
  poster: string
}

export const movieAdapter = createEntityAdapter<Movie>()
