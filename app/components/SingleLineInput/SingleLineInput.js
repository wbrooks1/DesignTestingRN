import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';

const SingleLineInput = (props) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        {...props}
      />
    </View>
  );
};

SingleLineInput.propTypes = {
  borderTop: React.PropTypes.bool,
};

export default SingleLineInput;
