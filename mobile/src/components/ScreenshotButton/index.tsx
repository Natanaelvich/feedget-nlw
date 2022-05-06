import { Camera, Trash } from 'phosphor-react-native';
import React from 'react';
import {
  Image,
  TouchableOpacity,
  View
} from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';

interface Props {
  screenshot: string | null;
  onTakeScreenshot: () => void;
  onRemoveScreenshot: () => void;
}

export function ScreenshotButton({ screenshot, onTakeScreenshot, onRemoveScreenshot, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}
      onPress={screenshot ? onRemoveScreenshot : onTakeScreenshot}
      style={styles.container}>
      {
        screenshot
          ? 
          <View>
            <Image style={styles.image}
              source={{uri: screenshot}} />
            <Trash size={16}
              color={theme.colors.text_secondary}
              weight='fill'
              style={styles.removeIcon}
            />
          </View>
          :
          <Camera size={24}
            color={theme.colors.text_primary}
            style={styles.cameraIcon}/>
      }
    </TouchableOpacity>
  );
}