import { Movie } from '../../core/movie/movie'
import { Image, StyleSheet } from 'react-native'
import { theme as T } from '../design-system/theme'
import { useEffect, useState } from 'react'

export function MoviePoster(
  props: Readonly<{
    movie: Movie
  }>,
) {
  const [aspectRatio, setAspectRatio] = useState(1)

  useEffect(() => {
    Image.getSize(
      props.movie.poster ?? undefinedUrlPlaceholder,
      (width, height) => {
        setAspectRatio(width / height)
      },
    )
  }, [props.movie.poster])

  const undefinedUrlPlaceholder = 'https://via.placeholder.com/100'

  return (
    <Image
      source={{
        uri: props.movie.poster ?? undefinedUrlPlaceholder,
      }}
      alt={props.movie.title + ' poster'}
      style={[styles.posterImage, { aspectRatio: aspectRatio }]}
    />
  )
}

const styles = StyleSheet.create({
  posterImage: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: T.width.posterImage,
    borderRadius: T.border.radius.rounded,
  },
})
