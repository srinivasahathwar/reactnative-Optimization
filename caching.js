import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CachedDataComponent = () => {
  const [cachedData, setCachedData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if cached data exists
        const cachedResponse = await AsyncStorage.getItem('cachedData');
        if (cachedResponse) {
          setCachedData(JSON.parse(cachedResponse));
        } else {
          // Make API call if no cached data found
          const response = await fetch('https://api.example.com/data');
          const data = await response.json();
          setCachedData(data);
          // Cache the response
          await AsyncStorage.setItem('cachedData', JSON.stringify(data));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      {/* Render data from cachedData */}
    </View>
  );
};

export default CachedDataComponent;