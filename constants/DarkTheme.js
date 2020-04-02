import color from 'color';
import { DefaultTheme } from 'react-native-paper';

const colors = {
  arsenic: "#384049",
  gunmetal: "#293444",
  yankeeBlue: "#102542",
  white: "#ffffff",
  passiveAgressive: "#b71200",
  black: "#000000"
}

const {arsenic, gunmetal, yankeeBlue, white, passiveAgressive, black} = colors;

export default {
  ...DefaultTheme,
  dark: true,
  mode: 'adaptive',
  colors: {
    ...DefaultTheme.colors,
    primary: yankeeBlue,
    accent: arsenic,
    background: gunmetal,
    error: passiveAgressive,
    onBackground: black,
    surface: gunmetal,
    text: white,
    disabled: color(white)
      .alpha(0.38)
      .rgb()
      .string(),
    placeholder: color(white)
      .alpha(0.54)
      .rgb()
      .string(),
    backdrop: color(black)
      .alpha(0.5)
      .rgb()
      .string(),
    notification: white,
  },
}