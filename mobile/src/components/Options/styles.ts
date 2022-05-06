import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 280 - 24 - 24 - 8,
  },
  sheetTitle: {
    fontSize: 20,
    lineHeight: 24,
    marginTop: 8,
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.medium,
  },
  optionList: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 32,
    paddingBottom: 40,
  },
});