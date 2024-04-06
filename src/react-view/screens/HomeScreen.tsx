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

  useEffect(() => {
    dispatch(retrieveTenRandomMovies())
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cyberflix Movie Search</Text>

      <SearchBar />

      <FlatList
        data={movies}
        renderItem={({ item }) => <MoviePreviewCard movie={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ width: '100%' }}
      />
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
    padding: T.spacing.none,

    borderWidth: T.border.width.thick,
    borderColor: T.color.purple,
  },
  title: {
    fontSize: T.font.size.xxxLarge,
    fontWeight: T.font.weight.bold,
    marginBottom: T.spacing.large,
    textAlign: 'center',
  },
})
