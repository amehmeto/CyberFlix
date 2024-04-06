import { Movie } from '../../core/movie/movie'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { theme as T } from '../design-system/theme'
import HTMLView from 'react-native-htmlview'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ScreenList } from '../../../App'
import { MoviePoster } from './MoviePoster'

export function MoviePreviewCard(props: Readonly<{ movie: Movie }>) {
  const navigation =
    useNavigation<NativeStackNavigationProp<ScreenList, 'MovieDetailsScreen'>>()

  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate('MovieDetailsScreen', {
          movieId: props.movie.id,
        })
      }
    >
      <Text style={styles.title}>{props.movie.title}</Text>
      <View style={styles.subContainer}>
        <MoviePoster movie={props.movie} />
        <HTMLView style={styles.description} value={props.movie.description} />
      </View>
    </Pressable>
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
