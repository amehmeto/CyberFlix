import { MovieGateway } from '../../core/_redux_/createStore'
import { Movie } from '../../core/movie/movie'
import { MovieMapper } from './movie.mapper'

export interface MovieResponse {
  '#ACTORS': string
  '#AKA': string
  '#IMDB_ID': string
  '#IMDB_IV': string
  '#IMDB_URL': string
  '#IMG_POSTER': string
  '#RANK': number
  '#TITLE': string
  '#YEAR': number
  photo_height?: number
  photo_width?: number
}

export interface ApiResponse {
  ok: boolean
  description: MovieResponse[]
  error_code: number
}

export class FetchMovieGateway implements MovieGateway {
  private baseUrl = 'https://search.imdbot.workers.dev/ '

  async searchMovie(movieSearchQuery: string): Promise<Movie[]> {
    if (movieSearchQuery.length === 0) return Promise.resolve([])

    const response = await fetch(`${this.baseUrl}?q=${movieSearchQuery}`)
    const result: ApiResponse = await response.json()
    const mappedToDomainMovies = MovieMapper.toDomainEntities(
      result.description,
    )

    return Promise.resolve(mappedToDomainMovies)
  }
}
