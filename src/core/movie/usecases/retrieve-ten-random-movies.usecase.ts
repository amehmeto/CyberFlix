import { createAppAsyncThunk } from '../../_redux_/createAppThunk'

// Arbitrary "random" way to search for movies as the API doesn't provide a random search
// This is just for the sake of the example, in a real-world scenario,
// this would not be a proper random movie implementation

function randomMovieSearch() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const numbers = '0123456789'
  const symbols = alphabet + numbers
  const randomSymbol = Math.floor(Math.random() * symbols.length)
  return symbols[randomSymbol]
}

export const retrieveTenRandomMovies = createAppAsyncThunk(
  'movie/retrieveTenRandomMovies',
  async (_, { extra: { movieGateway } }) => {
    const tenRandomMovieSearch = await Promise.all(
      Array(10)
        .fill(null)
        .map(() => movieGateway.searchMovie(randomMovieSearch())),
    )

    return tenRandomMovieSearch.map((movies) => {
      const randomIndex = Math.floor(Math.random() * movies.length)
      return movies[randomIndex]
    })
  },
)
