import { useState } from 'react'
import { Pressable, TextInput, View, StyleSheet, Text } from 'react-native'
import { theme as T } from '../design-system/theme'

export function SearchBar() {
  const [value, setValue] = useState('')

  const handleSubmit = () => {
    console.log('Submit', value)
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder="Search for a movie..."
      />
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : styles.buttonNotPressed,
        ]}
        onPress={handleSubmit}
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
    width: '80%',
    flexDirection: 'row',
    backgroundColor: T.color.white,
    borderRadius: T.border.radius.extraRounded,
    padding: T.spacing.small,
    marginBottom: T.spacing.medium,
  },
  input: {
    flex: 2,
    marginRight: T.spacing.small,
    fontSize: T.fontSize.medium,
    paddingVertical: T.spacing.small,
    paddingHorizontal: T.spacing.large,
    lineHeight: 28,
    borderRadius: T.border.radius.extraRounded,
    borderWidth: T.border.width.thin,
    borderColor: T.color.grey,
  },
  button: {
    flex: 1,
    backgroundColor: T.color.mediumGray,
    borderColor: T.color.mediumGray,
    borderWidth: T.border.width.thin,
    fontSize: T.fontSize.regular,
    paddingVertical: T.spacing.medium,
    paddingHorizontal: T.spacing.large,
    borderRadius: T.border.radius.extraRounded,
    justifyContent: 'center',
  },
  buttonText: {
    color: T.color.white,
    fontWeight: T.fontWeight.bold,
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
