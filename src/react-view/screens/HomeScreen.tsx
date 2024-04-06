import { StyleSheet, Text, View, FlatList } from 'react-native'
import { theme as T } from '../design-system/theme'
import { SearchBar } from './SearchBar'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../core/_redux_/createStore'
import { selectAllMovies } from '../../core/movie/selectors/selectAllMovies'
import { MoviePreviewCard } from './MoviePreviewCard'
import { useEffect } from 'react'
import { retrieveTenRandomMovies } from '../../core/movie/usecases/retrieve-ten-random-movies.usecase'

export function HomeScreen() {
  const dispatch = useDispatch<AppDispatch>()
  const movies = useSelector<RootState, ReturnType<typeof selectAllMovies>>(
    (state) => selectAllMovies(state),
  )
  const isLoading = useSelector<RootState, boolean>(
    (state) => state.movies.isLoading,
  )

  useEffect(() => {
    dispatch(retrieveTenRandomMovies())
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CyberFlix Movie Search</Text>

      <SearchBar />

      {isLoading && <Text>Loading...</Text>}
      {!isLoading && movies.length === 0 ? (
        <Text>No movies found</Text>
      ) : (
        <FlatList
          data={movies}
          renderItem={({ item }) => <MoviePreviewCard movie={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatlistContainer}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: T.color.lightGray,
    color: T.color.darkGray,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontSize: T.font.size.small,
    maxWidth: T.width.hundred_percent,
    padding: T.spacing.none,
  },
  title: {
    fontSize: T.font.size.xxxLarge,
    fontWeight: T.font.weight.bold,
    margin: T.spacing.large,
    textAlign: 'center',
  },
  flatlistContainer: {
    width: '100%',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
