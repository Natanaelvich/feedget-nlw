import React from 'react';
import { Text, View } from 'react-native';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Option } from '../Option';
import { FeedbackType } from '../Widget';

import { styles } from './styles';

interface Props {
  onFeedbackTypeChanged: (feedbackType: FeedbackType) => void;
}

export function Options({onFeedbackTypeChanged} : Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.sheetTitle}>
        {'Deixe seu Feedback'}
      </Text>

      <View style={styles.optionList}>
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <Option key={key}
              title={value.title}
              image={value.image}
              onPress={() => onFeedbackTypeChanged(key as FeedbackType)}/>
          );
        })}
      </View>
    </View>
  );
}