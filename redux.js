import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './actions';

const MyComponent = () => {
  const data = useSelector(state => state.data);
  const dispatch = useDispatch();

  const fetchDataHandler = () => {
    dispatch(fetchData());
  };

  return (
    <View>
      <Button title="Fetch Data" onPress={fetchDataHandler} />
      {data && (
        <View>
          {data.map((item, index) => (
            <Text key={index}>{item}</Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default MyComponent;
