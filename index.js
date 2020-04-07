import { AppRegistry, Platform } from 'react-native';
import App from './App';

AppRegistry.registerComponent('levantador', () => App);

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('main');
  AppRegistry.runApplication('levantador', { rootTag });
}
