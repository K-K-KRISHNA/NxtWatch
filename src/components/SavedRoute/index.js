// import {Component} from 'react'
import Header from '../Header'
import SideTabBar from '../SideTabBar'
import {SavedContainer} from './styledComponents'
// import ThemeContext from '../../Context/ThemeContext'

const SavedRoute = () => (
  <>
    <Header />
    <SavedContainer>
      <SideTabBar />
      <h1>Saved Route</h1>
    </SavedContainer>
  </>
)

export default SavedRoute
