import React from 'react';
import { Image } from 'react-native';

const App = () => (
  <Image
    source={require('./path/to/image.png')} // add your image path here 
    style={{ width: 100, height: 100 }}
  />
);

export default App;