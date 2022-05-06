import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  copyright: {
    color: theme.colors.text_secondary,
    fontSize: 12,
    fontFamily: theme.fonts.medium,
    textAlign: 'center',
  },
});