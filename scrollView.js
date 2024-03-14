import React from 'react';
import {ScrollView, View, Text} from 'react-native';

const App = () => {
  const DATA = [
    {
      title: 'Fruits',
      data: ['Apple', 'Banana', 'Orange'],
    },
    {
      title: 'Vegetables',
      data: ['Carrot', 'Broccoli', 'Spinach'],
    },
    // Add more sections as needed
  ];
  return (
    <ScrollView>
      {DATA.map((result, key) => (
        <View style={{padding: 20}} key={key}>
          <Text style={{fontSize: 24}}>{result.title}</Text>
          {result?.data.map((resultData, index) => (
            <Text style={{fontSize: 24}} key={index}>
              {resultData}
            </Text>
          ))}
        </View>
      ))}
      {/* Add more views as needed */}
    </ScrollView>
  );
};

export default App;
