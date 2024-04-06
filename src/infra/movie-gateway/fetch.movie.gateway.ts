import { Movie } from '../../core/movie/movie'
import { MovieMapper } from './movie.mapper'
import { MovieGateway } from '../../core/movie/ports/movieGateway'
import { ApiResponse, MovieDetails, MovieResponse } from './apiResponse'

export class FetchMovieGateway implements MovieGateway {
  private baseUrl = 'https://search.imdbot.workers.dev/ '

  async getMovieDetails(
    movieImdbId: string,
  ): Promise<MovieDetails | undefined> {
    try {
      const response = await fetch(`${this.baseUrl}?tt=${movieImdbId}`)

      return response.json()
    } catch (error) {
      console.error('Error in getMovieDetails call', error)
      return undefined
    }
  }

  async searchMovie(movieSearchQuery: string): Promise<Movie[]> {
    if (movieSearchQuery.length === 0) return Promise.resolve([])

    const response = await fetch(`${this.baseUrl}?q=${movieSearchQuery}`)
    const result: ApiResponse = await response.json()

    const enrichedMovies: MovieResponse[] = await Promise.all(
      result.description.map(async (movie) => {
        const details = await this.getMovieDetails(movie['#IMDB_ID'])
        return { ...movie, details }
      }),
    )

    return MovieMapper.toDomainEntities(enrichedMovies)
  }
}
