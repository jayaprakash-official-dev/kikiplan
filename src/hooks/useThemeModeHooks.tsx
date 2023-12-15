import {useColorScheme} from 'react-native';
import {darkTheme} from '../theme/darkTheme';
import {lightTheme} from '../theme/lightTheme';
const useThemeModeHooks = () => {
  const colorScheme = useColorScheme();
  return [colorScheme === 'dark' ? darkTheme : lightTheme];
};

export default useThemeModeHooks;
