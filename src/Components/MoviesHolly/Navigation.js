import React from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import{createStackNavigator} from '@react-navigation/stack'

import MoviesIndexPage from "./MoviesIndex"
import MoviesDetailsPage from "./MoviesDetails"
import Movieslist from "./MovieLists"
import MovieReviewPage from "./MoviesReviews"

const RootStack =createStackNavigator();
const Navigation = ({navigation}) => {
    return (
        <>
          <RootStack.Navigator headerMode='none'  >
         
              <RootStack.Screen component={MoviesIndexPage} name="MoviesIndexPage" />
              {/* <RootStack.Screen component={Movieslist} name="Movieslist" /> */}
              <RootStack.Screen component={MoviesDetailsPage} name="MoviesDetailsPage" />
              <RootStack.Screen component={MovieReviewPage} name="MovieReviewPage" />

          </RootStack.Navigator>
        </>
    )
}

export default Navigation
