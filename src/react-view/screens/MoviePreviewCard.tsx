import { Movie } from '../../core/movie/movie'
import { StyleSheet, Image, Text, View } from 'react-native'
import { theme as T } from '../design-system/theme'
import { useEffect, useState } from 'react'
import HTMLView from 'react-native-htmlview'

export function MoviePreviewCard(props: Readonly<{ movie: Movie }>) {
  const [aspectRatio, setAspectRatio] = useState(1)

  const undefinedUrlPlaceholder = 'https://via.placeholder.com/100'

  useEffect(() => {
    Image.getSize(
      props.movie.poster ?? undefinedUrlPlaceholder,
      (width, height) => {
        setAspectRatio(width / height)
      },
    )
  }, [props.movie.poster])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.movie.title}</Text>
      <View style={styles.subContainer}>
        <Image
          source={{
            uri: props.movie.poster ?? undefinedUrlPlaceholder,
          }}
          alt={props.movie.title + ' poster'}
          style={[styles.posterImage, { aspectRatio }]}
        />
        <HTMLView style={styles.description} value={props.movie.description} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: T.font.size.xxLarge,
    fontFamily: T.font.family.debug,
    marginBottom: T.spacing.small,
  },
  container: {
    flex: 1,
    backgroundColor: T.color.white,
    borderRadius: T.border.radius.rounded,

    shadowColor: T.color.shadow,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: T.border.radius.roundedSmall,

    color: T.color.darkGray,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: T.font.size.small,
    width: T.width.previewCard,

    paddingVertical: T.spacing.large,
    paddingHorizontal: T.spacing.xxLarge,

    margin: T.spacing.large,
  },
  posterImage: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: T.width.posterImage,
  },
  description: {
    marginLeft: T.spacing.medium,
    width: T.width.sixty_five_percent,
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: T.width.hundred_percent,
  },
})
