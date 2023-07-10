import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';

const App= () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={styles.textinputContainer}
        placeholder="Type here to translate!"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={styles.textContainer}>
        {text
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    padding: 10,
    fontSize: 45,
    color: 'navy',
    backgroundColor: 'black',
    borderRadius: 50

  },
  viewContainer : {
    padding: 10
  },

  textinputContainer : {
    height: 60,
    fontStyle: 'italic'

  }


});

export default App;