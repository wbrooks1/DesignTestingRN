import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';

const SingleLineInput = (props) => {
  return (
    <View>
      {props.borderTop ? <View style={styles.divider} /> : null}
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
