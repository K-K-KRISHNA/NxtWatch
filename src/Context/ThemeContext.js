import React from 'react'

const ThemeContext = React.createContext({
  isDark: '',
  toggleTheme: () => {},
  activeTabId: 'Home',
  changeTab: () => {},
})

export default ThemeContext
