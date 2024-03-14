import React, { useEffect, useState } from 'react';

const PaginatedDataComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.example.com/data?page=${currentPage}`);
        const jsonData = await response.json();
        // Concatenate new data with existing data
        setData(prevData => [...prevData, ...jsonData]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentPage]);

  const loadMoreData = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <View>
      {/* Render data */}
      <Button title="Load More" onPress={loadMoreData} />
    </View>
  );
};

export default PaginatedDataComponent;