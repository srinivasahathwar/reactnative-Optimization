import React from 'react';
import { SectionList, Text, View } from 'react-native';

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

const Item = ({ title }) => (
  <View style={{ padding: 20 }}>
    <Text>{title}</Text>
  </View>
);

const App = () => {
  const renderSectionHeader = ({ section: { title } }) => (
    <View style={{ backgroundColor: 'lightgray', padding: 10 }}>
      <Text>{title}</Text>
    </View>
  );

  const renderItem = ({ item }) => <Item title={item} />;

  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
    />
  );
};

export default App;