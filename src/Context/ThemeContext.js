import React from 'react'

const ThemeContext = React.createContext({
  isDark: '',
  toggleTheme: () => {},
  activeTabId: 'Home',
  changeTab: () => {},
  savedVideos: [],
  addSavedVideo: () => {},
  removeSavedVideo: () => {},
})

export default ThemeContext
