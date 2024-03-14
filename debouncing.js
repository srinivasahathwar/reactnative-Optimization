import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import debounce from 'lodash/debounce'; // Import debounce function from lodash

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const debounceSearch = debounce((searchTerm) => {
    // Make API call with the search term
    console.log('Making API call with:', searchTerm);
  }, 300); // Debounce time in milliseconds

  const handleSearch = (text) => {
    setSearchTerm(text);
    debounceSearch(text);
  };

  return (
    <View>
      <TextInput
        placeholder="Search..."
        onChangeText={handleSearch}
      />
    </View>
  );
};

export default SearchComponent;