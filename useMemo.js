import React, { useMemo } from 'react';

const MemoizedComponent = ({ data }) => {
  const memoizedData = useMemo(() => {
    // Expensive calculation or data processing
    return data.map(item => item * 2);
  }, [data]);

  return <SomeComponent data={memoizedData} />;
};