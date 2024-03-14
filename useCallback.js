import React, { useCallback, useState } from 'react';
import { ScrollView, View, Text, Button } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  // Define a callback function using useCallback
  const handleButtonClick = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <ScrollView>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24 }}>Count: {count}</Text>
      </View>
      <View style={{ padding: 20 }}>
        {/* Button component using the callback function */}
        <Button title="Increase Count" onPress={handleButtonClick} />
      </View>
    </ScrollView>
  );
};