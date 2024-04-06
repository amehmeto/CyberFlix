import { createAppAsyncThunk } from '../../_redux_/createAppThunk'

export const searchMovie = createAppAsyncThunk(
  'movie/searchMovie',
  async (searchQuery: string, { extra }) => {
    return extra.movieGateway.searchMovie(searchQuery)
  },
)
