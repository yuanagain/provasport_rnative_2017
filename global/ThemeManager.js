// ThemeManager.js
// Yuan Wang

import { StyleSheet } from 'react-native';
import { themeManager } from 'nachos-ui'

import { PrimaryColor } from '../global/Colors.js'

// ============ Adjust H1 theme ============
const H1Theme = themeManager.getStyle('H1')
const newH1Theme = {
  ...H1Theme,
  FONT_COLOR: 'rgba(0,0,0, 0.5)',
  FONT_WEIGHT: "600",
}
themeManager.setSource('H1', () => (newH1Theme))

// ============ Adjust H2 theme ============
const H2Theme = themeManager.getStyle('H2')
const newH2Theme = {
  ...H2Theme,
  FONT_COLOR: 'rgba(0,0,0, 0.5)',
  FONT_WEIGHT: "600",
}
themeManager.setSource('H2', () => (newH2Theme))

// ============ Adjust H3 theme ============
const H3Theme = themeManager.getStyle('H3')
const newH3Theme = {
  ...H3Theme,
  FONT_COLOR: 'rgba(0,0,0, 0.5)',
  FONT_SIZE: 20,
  FONT_WEIGHT: "600",
}
themeManager.setSource('H3', () => (newH3Theme))

// ============ Adjust H4 theme ============
const H4Theme = themeManager.getStyle('H4')
const newH4Theme = {
  ...H4Theme,
  FONT_COLOR: 'rgba(0,0,0, 0.5)',
  FONT_SIZE: 20,
  FONT_WEIGHT: "600",
}
themeManager.setSource('H4', () => (newH4Theme))

// ============ Adjust H6 theme ============
const H6Theme = themeManager.getStyle('H6')
const newH6Theme = {
  ...H6Theme,
  FONT_COLOR: 'rgba(0,0,0, 0.8)',
  FONT_WEIGHT: "300",
}
themeManager.setSource('H6', () => (newH6Theme))

// ============ Adjust TabButton theme ============
const TabButtonTheme = themeManager.getStyle('TabButton')
const newTabButtonTheme = {
  ...TabButtonTheme,
  BUTTON_SELECTED_BACKGROUND: PrimaryColor(0.5),
  BUTTON_SELECTED_BORDER_COLOR: PrimaryColor(0.5),
  BUTTON_FONT_COLOR: 'rgba(0, 0, 0, 0.8)',
  BUTTON_ICON_COLOR: 'rgba(0, 0, 0, 0.8)'
}
themeManager.setSource('TabButton', () => (newTabButtonTheme))


// Global Styles
export const __GLOBAL_STYLES__ = StyleSheet.create({
  positions: {
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  container: {
    flex: 0,
    height: 180,
    borderWidth: 1,
    borderColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

});