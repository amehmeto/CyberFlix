import { createAppAsyncThunk } from '../../_redux_/createAppThunk'

export const searchMovie = createAppAsyncThunk(
  'movie/searchMovie',
  async (searchQuery: string, { extra: { movieGateway } }) => {
    return movieGateway.searchMovie(searchQuery)
  },
)
