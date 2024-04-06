import { createAppAsyncThunk } from '../../_redux_/createAppThunk'

function randomMovieSearch() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const randomLetter = Math.floor(Math.random() * alphabet.length)
  return alphabet[randomLetter]
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
