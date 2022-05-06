import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  option: {
    flex: 1,
    width: 104,
    height: 112,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.surface_secondary,
    borderRadius: 8,
    padding: 8,
    marginHorizontal: 4,
  },
  image: {
    height: 40,
    width: 40,
  },
  title: {
    color: theme.colors.text_primary,
    fontSize: 14,
    lineHeight: 24,
    fontFamily: theme.fonts.medium,
    marginTop: 8,
  },
});