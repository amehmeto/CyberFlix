type FakeDetails = {
  '#TITLE': string
  '#YEAR': number
  '#IMDB_ID': string
  '#RANK': number
  '#ACTORS': string
  // Add other properties if needed
}
type MainDetails = {
  id: string
  wins: object // Replace with a more specific type if possible
  nominations: object // Replace with a more specific type if possible
  prestigiousAwardSummary: any
  ratingsSummary: object // Replace with a more specific type if possible
  // Add other properties if needed
}
type ShortDetails = {
  '@context': string
  '@type': string
  url: string
  name: string
  image: string
  // Add other properties if needed
}
type PlotText = {
  plaidHtml: string
}

type PlotNode = {
  plotText: PlotText
  experimental_translatedPlotText: any
}

type PlotEdge = {
  node: PlotNode
}

type PlotConnection = {
  edges: PlotEdge[]
}

type TitleKeyword = {
  legacyId: string
  text: string
}

type TitleKeywordEdge = {
  node: TitleKeyword
}

type TitleKeywordConnection = {
  edges: TitleKeywordEdge[]
  total: number
}

type Genre = {
  id: string
  text: string
}

type Genres = {
  genres: Genre[]
}

type ParentsGuideConnection = {
  total: number
}

type ParentsGuide = {
  guideItems: ParentsGuideConnection
}
type StoryLineDetails = {
  id: string
  summaries: PlotConnection
  outlines: PlotConnection
  synopses: PlotConnection
  storylineKeywords: TitleKeywordConnection
  taglines: PlotConnection
  genres: Genres
  certificate: any
  parentsGuide: ParentsGuide
}
type TopDetails = {
  id: string
  productionStatus: object
  canHaveEpisodes: boolean
  series: any
  titleText: object
}
export type MovieDetails = {
  fake: FakeDetails
  imdbId: string
  main: MainDetails
  short: ShortDetails
  storyLine: StoryLineDetails
  top: TopDetails
}

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
  details?: MovieDetails
}

export interface ApiResponse {
  ok: boolean
  description: MovieResponse[]
  error_code: number
}
