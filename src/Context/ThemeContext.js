import React from 'react'

const ThemeContext = React.createContext({
  isDark: '',
  toggleTheme: () => {},
  activeTabId: 'Home',
  changeTab: () => {},
  savedVideos: [],
})

export default ThemeContext
