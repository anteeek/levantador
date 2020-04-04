import color from 'color';
import configureFonts from "./fonts";
import { DefaultTheme } from 'react-native-paper';


const colors = {
  black: "#000A26",
  white: "#fff",
  bittersweet: '#F87060',
  passiveAgressive: "#b71200",
  yankeeBlue: '#102542',
  lightGray: '#CDD7D6',
  tuscany: '#B3A394',
}

const {lightGray, tuscany, black, white, bittersweet, yankeeBlue, passiveAgressive} = colors;


export default {
  dark: false,
  roundness: 4,
  colors: {
    primary: yankeeBlue,
    accent: bittersweet,
    background: white,
    surface: white,
    error: passiveAgressive,
    text: yankeeBlue,
    onBackground: '#000000',
    onSurface: '#000000',
    disabled: color(black)
      .alpha(0.26)
      .rgb()
      .string(),
    placeholder: color(black)
      .alpha(0.54)
      .rgb()
      .string(),
    backdrop: color(black)
      .alpha(0.5)
      .rgb()
      .string(),
    notification: white,
  },
  fonts: configureFonts(),
  animation: {
    scale: 1.0,
  },
}
