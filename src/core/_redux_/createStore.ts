import { AnyAction, configureStore, ThunkDispatch } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'
import { Movie } from '../movie/movie'

export type PreloadedState = Partial<RootState>

export interface MovieGateway {
  searchMovie: (movieSearchQuery: string) => Promise<Movie[]>
}

export type Dependencies = {
  movieGateway: MovieGateway
}

export const createStore = (
  dependencies: Dependencies,
  preloadedState?: PreloadedState,
) =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: dependencies,
        },
      }),
    preloadedState,
  })

export type AppStore = ReturnType<typeof createStore>
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<RootState, Dependencies, AnyAction>
