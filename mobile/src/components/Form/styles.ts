import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({

  container: {
    paddingHorizontal: 24,
    alignItems: 'center',
    height: 280 - 24 - 24 - 8,
  },

  header: {
    flexDirection: 'row',
    marginTop: 8,
  },

  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 24,
  },

  titleImage: {
    height: 24,
    width: 24,
    marginRight: 8,
  },

  titleText: {
    fontSize: 20,
    lineHeight: 24,
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.medium,
  },

  formInput: {
    height: 112,
    width: '100%',
    padding: 12,
    marginTop: 16,
    borderRadius: 4,
    borderWidth: 1,
    fontSize: 14,
    lineHeight: 24,
    borderColor: theme.colors.stroke,
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.regular,
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
  },
  
  formFooter: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 16,
  },
});