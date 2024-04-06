import { AnyAction, configureStore, ThunkDispatch } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'
import { MovieGateway } from '../movie/ports/movieGateway'

export type Dependencies = {
  movieGateway: MovieGateway
}

export const createStore = (dependencies: Dependencies) =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: dependencies,
        },
      }),
  })

export type AppStore = ReturnType<typeof createStore>
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<RootState, Dependencies, AnyAction>
