const colors = {
  black: "#000A26",
  red: '#D43E20',
  darkYellow: '#E0BD6E',
  lightYellow: '#E0DC90',
  powderBlue: '#BBE1E2',
}

const {red, lightYellow, black, powderBlue} = colors;

export default {
  ...colors,
  tabIconDefault: '#ccc',
  tabIconSelected: '#777',
  errorBackground: red,
  errorText: lightYellow,
  noticeBackground: black,
  noticeText: powderBlue,
};
