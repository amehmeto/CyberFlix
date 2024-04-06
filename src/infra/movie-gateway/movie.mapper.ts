import { Movie } from '../../core/movie/movie'

import { MovieResponse } from './apiResponse'

export class MovieMapper {
  static toDomainEntity(rawApiMovie: MovieResponse): Movie {
    return {
      id: rawApiMovie['#IMDB_ID'],
      title: rawApiMovie['#TITLE'],
      actors: rawApiMovie['#ACTORS'].split(', '),
      aka: rawApiMovie['#AKA'],
      poster: rawApiMovie['#IMG_POSTER'],
      reviews: [],
      description:
        rawApiMovie.details?.storyLine.summaries.edges[0]?.node.plotText
          .plaidHtml ?? 'No description available',
    }
  }

  static toDomainEntities(apiMovies: MovieResponse[]): Movie[] {
    return apiMovies.map((apiMovie) => this.toDomainEntity(apiMovie))
  }
}
