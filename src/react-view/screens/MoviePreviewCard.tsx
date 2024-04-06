import { Movie } from '../../core/movie/movie'
import { StyleSheet, Image, Text, View } from 'react-native'
import { theme as T } from '../design-system/theme'

export function MoviePreviewCard(props: Readonly<{ movie: Movie }>) {
  const undefinedUrlPlaceholder = 'https://via.placeholder.com/100'

  return (
    <View style={styles.container}>
      <Text style={styles.result}>{props.movie.title}</Text>
      <Image
        source={{
          uri: props.movie.poster ?? undefinedUrlPlaceholder,
        }}
        alt={props.movie.title + ' poster'}
        style={styles.posterImage}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  result: {
    fontSize: T.font.size.regular,
    fontFamily: T.font.family.debug,
  },
  container: {
    flex: 1,
    backgroundColor: T.color.red,
    borderWidth: T.border.width.thin,
    borderColor: T.color.red,
    color: T.color.darkGray,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: T.font.size.small,
    width: T.width.hundred_percent,
    padding: T.spacing.medium,
    marginBottom: T.spacing.large,
  },
  posterImage: {
    width: T.width.posterImage,
    height: T.height.posterImage,
  },
})
