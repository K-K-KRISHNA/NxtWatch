// import {Component} from 'react'
import Header from '../Header'
import SideTabBar from '../SideTabBar'
import {TrendingContainer} from './styledComponents'
// import ThemeContext from '../../Context/ThemeContext'

const TrendingRoute = () => (
  <>
    <Header />
    <TrendingContainer>
      <SideTabBar />
      <h1>Trending Route</h1>
    </TrendingContainer>
  </>
)

export default TrendingRoute
