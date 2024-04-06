import { Movie } from '../movie'

export interface MovieGateway {
  searchMovie: (movieSearchQuery: string) => Promise<Movie[]>
}
