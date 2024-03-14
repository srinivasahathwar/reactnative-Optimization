import React from 'react';
import { FlatList, View, Text } from 'react-native';

const data = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  // Add more items here
];

const renderItem = ({ item }) => (
  <View>
    <Text>{item.title}</Text>
  </View>
);

const App = () => (
  <FlatList
    data={data}
    renderItem={renderItem}
    keyExtractor={item => item.id}
  />
);

export default App;