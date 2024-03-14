import React from 'react';
import { VirtualizedList, View, Text } from 'react-native';

const data = Array.from({ length: 1000 }, (_, index) => ({
  id: String(index),
  title: `Item ${index}`,
}));

const renderItem = ({ item }) => (
  <View>
    <Text>{item.title}</Text>
  </View>
);

const getItemCount = () => data.length;

const getItem = (data, index) => data[index];

const App = () => (
  <VirtualizedList
    data={data}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    getItemCount={getItemCount}
    getItem={getItem}
  />
);

export default App;