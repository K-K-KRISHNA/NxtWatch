// import {Component} from 'react'
import Header from '../Header'
import SideTabBar from '../SideTabBar'
import {HomeContainer} from './styledComponents'
// import ThemeContext from '../../Context/ThemeContext'

const HomeRoute = () => (
  <>
    <Header />
    <HomeContainer>
      <SideTabBar />
      <h1>Home Route</h1>
    </HomeContainer>
  </>
)

export default HomeRoute
