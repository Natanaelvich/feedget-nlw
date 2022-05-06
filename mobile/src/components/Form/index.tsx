import React, { useState } from 'react';
import { ArrowLeft } from 'phosphor-react-native';
import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import { theme } from '../../theme';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Button } from '../Button';
import { ScreenshotButton } from '../ScreenshotButton';

import { captureScreen } from 'react-native-view-shot';
import * as FileSystem from 'expo-file-system';

import { FeedbackType } from '../Widget';

import { styles } from './styles';
import { api } from '../../libs/api';

interface Props {
  feedbackType: FeedbackType
  onFeedbackReset: () => void;
  onFeedbackSent: () => void;
}

export function Form({feedbackType, onFeedbackReset, onFeedbackSent}: Props) {
  const [comment, setComment] = useState('');
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  function handleScreenshot() {
    captureScreen({
      format: 'jpg',
      quality: 0.8,
    })
      .then(uri => setScreenshot(uri))
      .catch(error => console.log(error));
  }

  function handleRemoveScreenshot() {
    setScreenshot(null);
  }

  async function handleSendFeedback() {
    if(isSendingFeedback) {
      return;
    }

    setIsSendingFeedback(true);

    const screenshotBase64 = 
      screenshot &&
      await FileSystem.readAsStringAsync(
        screenshot,
        {
          encoding: 'base64',
        }
      );

    try { 
      await api.post('/feedbacks', {
        type: feedbackType,
        comment,
        screenshot: `data:image/png;base64, ${screenshotBase64}`,
      });

      onFeedbackSent();

    } catch (error) {
      console.log(error);
      setIsSendingFeedback(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onFeedbackReset}>
          <ArrowLeft size={24}
            color={theme.colors.text_secondary}/>

        </TouchableOpacity>
        
        <View style={styles.titleContainer}>
          <Image style={styles.titleImage}
            source={feedbackTypeInfo.image}
          />

          <Text style={styles.titleText}>
            {feedbackTypeInfo.title}
          </Text>
        </View>
      </View>

      <TextInput multiline
        style={styles.formInput}
        placeholder='Conte com detalhes o que está acontecendo...'
        placeholderTextColor={theme.colors.text_secondary}
        onChangeText={setComment}
      />

      <View style={styles.formFooter}>
        <ScreenshotButton screenshot={screenshot}
          onTakeScreenshot={handleScreenshot}
          onRemoveScreenshot={handleRemoveScreenshot} />

        <Button isLoading={isSendingFeedback}
          onPress={handleSendFeedback}/>
      </View>
    </View>
  );
}