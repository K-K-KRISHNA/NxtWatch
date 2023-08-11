// import {Component} from 'react'
import Header from '../Header'
import SideTabBar from '../SideTabBar'
import {GamingContainer} from './styledComponents'
// import ThemeContext from '../../Context/ThemeContext'

const GamingRoute = () => (
  <>
    <Header />
    <GamingContainer>
      <SideTabBar />
      <h1>Gaming Route</h1>
    </GamingContainer>
  </>
)

export default GamingRoute
