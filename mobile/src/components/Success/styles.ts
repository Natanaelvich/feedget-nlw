import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    alignItems: 'center',
    height: 280 - 24 - 24 - 8,
  },
  successImage: {
    width: 40,
    height: 40,
    marginTop: 40,
  },

  successTitle: {
    color: theme.colors.text_primary,
    fontSize: 20,
    lineHeight: 24,
    marginTop: 8,
  },

  button: {
    height: 40,
    marginTop: 24,
    backgroundColor: theme.colors.surface_secondary,
    paddingHorizontal: 24,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: theme.colors.text_primary,
    fontSize: 14,
    lineHeight: 24,
    fontFamily: theme.fonts.medium,
  },
});