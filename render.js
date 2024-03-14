import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // Perform API call or heavy computation
    const result = await fetch('https://api.example.com/data');
    const json = await result.json();
    setData(json);
  };

  return (
    <View>
      {data ? <Text>{data}</Text> : <Text>Loading...</Text>}
    </View>
  );
};

export default MyComponent;