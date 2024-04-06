import { StyleSheet, Text, View } from 'react-native'
import { theme as T } from '../design-system/theme'
import { SearchBar } from './SearchBar'

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cyberflix Movie Search</Text>

      <SearchBar />
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
    fontSize: T.fontSize.small,
    maxWidth: T.width.max,
    padding: T.spacing.xxLarge,
  },
  title: {
    fontSize: T.fontSize.xxxLarge,
    fontWeight: T.fontWeight.bold,
    marginBottom: T.spacing.large,
    textAlign: 'center',
  },
})
