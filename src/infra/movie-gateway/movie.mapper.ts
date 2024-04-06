import { Movie } from '../../core/movie/movie'
import { MovieResponse } from './fetch.movie.gateway'

export class MovieMapper {
  static toDomainEntity(rawApiMovie: MovieResponse): Movie {
    return {
      id: rawApiMovie['#IMDB_ID'],
      title: rawApiMovie['#TITLE'],
      actors: rawApiMovie['#ACTORS'].split(', '),
      aka: rawApiMovie['#AKA'],
      poster: rawApiMovie['#IMG_POSTER'],
    }
  }

  static toDomainEntities(apiMovies: MovieResponse[]): Movie[] {
    return apiMovies.map((apiMovie) => this.toDomainEntity(apiMovie))
  }
}
