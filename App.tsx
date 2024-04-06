import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from './src/react-view/screens/HomeScreen'
import { Provider } from 'react-redux'
import { createStore } from './src/core/_redux_/createStore'
import { FetchMovieGateway } from './src/infra/movie-gateway/fetch.movie.gateway'
import { MovieDetailsScreen } from './src/react-view/screens/MovieDetailsScreen'

export type ScreenList = {
  Home: undefined
  MovieDetailsScreen: {
    movieId: string
  }
}

const Stack = createNativeStackNavigator()

const store = createStore({
  movieGateway: new FetchMovieGateway(),
})

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="MovieDetailsScreen"
            component={MovieDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
