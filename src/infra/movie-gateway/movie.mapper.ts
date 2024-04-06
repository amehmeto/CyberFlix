import { Movie } from '../../core/movie/movie'

import { MovieResponse } from './apiResponse'

export class MovieMapper {
  static toDomainEntity(rawApiMovie: MovieResponse): Movie {
    /*    console.log(Object.keys(rawApiMovie.details?.top || {}))
    console.log(Object.keys(rawApiMovie.details?.main || {}))
    console.log(rawApiMovie.details?.main)
    console.log(rawApiMovie.details?.main.reviews)*/

    return {
      id: rawApiMovie['#IMDB_ID'],
      title: rawApiMovie['#TITLE'],
      actors: rawApiMovie['#ACTORS'].split(', '),
      aka: rawApiMovie['#AKA'],
      poster: rawApiMovie['#IMG_POSTER'],
      description:
        rawApiMovie.details?.storyLine.summaries.edges[0]?.node.plotText
          .plaidHtml ?? 'No description available',
      reviews: (rawApiMovie.details?.top?.reviews as unknown as string[]) ?? [],
      keywords: rawApiMovie.details?.storyLine.storylineKeywords.edges.map(
        (edge) => edge.node.text,
      ) ?? ['no keywords available'],
    }
  }

  static toDomainEntities(apiMovies: MovieResponse[]): Movie[] {
    return apiMovies.map((apiMovie) => this.toDomainEntity(apiMovie))
  }
}
