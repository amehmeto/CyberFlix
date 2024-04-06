import { createEntityAdapter } from '@reduxjs/toolkit'

export type Movie = {
  id: string
  title: string
  description: string
  actors: string[]
  aka: string
  poster: string
  reviews: string[]
}

export const movieAdapter = createEntityAdapter<Movie>()
