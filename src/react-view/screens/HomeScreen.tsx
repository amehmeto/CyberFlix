import { StyleSheet, Text, View } from 'react-native'
import { theme as T } from '../design-system/theme'
import { SearchBar } from './SearchBar'
import { useSelector } from 'react-redux'
import { RootState } from '../../core/_redux_/createStore'
import { selectAllMovies } from '../../core/movie/selectors/selectAllMovies'

export function HomeScreen() {
  const results = useSelector<RootState, ReturnType<typeof selectAllMovies>>(
    (state) => selectAllMovies(state),
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cyberflix Movie Search</Text>

      <SearchBar />

      {results.map((movie, index) => (
        <Text key={movie.id} style={styles.result}>
          {movie.title}
        </Text>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: T.color.lightGray,
    color: T.color.darkGray,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: T.font.size.small,
    maxWidth: T.width.max,
    padding: T.spacing.xxLarge,
  },
  title: {
    fontSize: T.font.size.xxxLarge,
    fontWeight: T.font.weight.bold,
    marginBottom: T.spacing.large,
    textAlign: 'center',
  },
  result: { fontSize: T.font.size.regular, fontFamily: T.font.family.debug },
})
