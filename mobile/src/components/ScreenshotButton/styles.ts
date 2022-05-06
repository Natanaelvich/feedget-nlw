import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    backgroundColor: theme.colors.surface_secondary,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    position: 'relative',
  },

  removeIcon: {
    position: 'absolute',
    right: 4,
    bottom: 4,
  },
  cameraIcon: {
    // margin: 8,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 4,
  },
});