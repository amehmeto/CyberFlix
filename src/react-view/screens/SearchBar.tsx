import { useState } from 'react'
import { Pressable, TextInput, View, StyleSheet, Text } from 'react-native'
import { theme as T } from '../design-system/theme'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../core/_redux_/createStore'
import { searchMovie } from '../../core/movie/usecases/search-movie.usecase'

export function SearchBar() {
  const dispatch = useDispatch<AppDispatch>()
  const [movieSearchQuery, setMovieSearchQuery] = useState('')

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={movieSearchQuery}
        onChangeText={setMovieSearchQuery}
        placeholder="Search for a movie..."
      />
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : styles.buttonNotPressed,
        ]}
        onPress={() => dispatch(searchMovie(movieSearchQuery))}
      >
        <Text style={styles.buttonText} numberOfLines={1}>
          Search
        </Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: T.width.max,
    flexDirection: 'row',
    backgroundColor: T.color.white,
    borderRadius: T.border.radius.extraRounded,
    padding: T.spacing.small,
    marginBottom: T.spacing.medium,
  },
  input: {
    flex: 2,
    marginRight: T.spacing.small,
    fontSize: T.font.size.medium,
    paddingVertical: T.spacing.small,
    paddingHorizontal: T.spacing.large,
    lineHeight: T.lineHeight.large,
    borderRadius: T.border.radius.extraRounded,
    borderWidth: T.border.width.thin,
    borderColor: T.color.grey,
  },
  button: {
    flex: 1,
    backgroundColor: T.color.mediumGray,
    borderColor: T.color.mediumGray,
    borderWidth: T.border.width.thin,
    fontSize: T.font.size.regular,
    paddingVertical: T.spacing.medium,
    paddingHorizontal: T.spacing.large,
    borderRadius: T.border.radius.extraRounded,
    justifyContent: 'center',
  },
  buttonText: {
    color: T.color.white,
    fontWeight: T.font.weight.bold,
    justifyContent: 'center',
    textAlign: 'center',
  },
  buttonNotPressed: {
    backgroundColor: T.color.darkGray,
  },
  buttonPressed: {
    backgroundColor: T.color.lightGray,
  },
})
