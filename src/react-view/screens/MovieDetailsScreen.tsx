import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ScreenList } from '../../../App'
import { useSelector } from 'react-redux'
import { selectMovieById } from '../../core/movie/selectors/selectMovieById'
import { StyleSheet, Text, View } from 'react-native'
import { theme as T } from '../design-system/theme'
import HTMLView from 'react-native-htmlview'
import { MoviePoster } from './MoviePoster'

export function MovieDetailsScreen({
  route: {
    params: { movieId },
  },
}: Readonly<{
  navigation: NativeStackNavigationProp<ScreenList, 'MovieDetailsScreen'>
  route: { params: { movieId: string } }
}>) {
  const movie = useSelector((state) => selectMovieById(state, movieId))

  if (!movie) {
    return <Text>Loading...</Text>
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{movie.title}</Text>
      <View style={[styles.textDetails]}>
        <MoviePoster movie={movie} />
        <View style={styles.details}>
          <Text style={styles.label}>Description:</Text>
          <HTMLView style={styles.htmlView} value={movie.description} />
          <Text style={styles.label}>Actors:</Text>
          <Text style={styles.textList}>{movie.actors.join(', ')}</Text>
          <Text style={styles.label}>Reviews:</Text>
          <Text style={styles.textList}>{movie.reviews.join('\n')}</Text>
          <Text style={styles.label}>Keywords:</Text>
          <Text style={styles.textList}>{movie.keywords.join(', ')}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: T.spacing.medium,
    backgroundColor: T.color.white,
    width: T.width.hundred_percent,
  },
  title: {
    fontSize: T.font.size.xxxLarge,
    fontWeight: T.font.weight.bold,
    marginBottom: T.spacing.medium,
  },
  poster: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: T.spacing.medium,
  },
  details: {
    marginLeft: T.spacing.medium,
    width: T.width.sixty_five_percent,
  },
  textList: {
    margin: T.spacing.small,
    fontSize: T.font.size.medium,
  },
  htmlView: {
    margin: T.spacing.small,
  },
  label: {
    fontSize: T.font.size.large,
    fontWeight: T.font.weight.bold,
    marginBottom: T.spacing.small,
  },
  textDetails: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
})
