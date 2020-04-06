import { AsyncStorage } from 'react-native';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

export default {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2
}