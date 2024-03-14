export const fetchData = async () => {
  try {
    const result = await fetch('https://api.example.com/data');
    const response = await result.json();
    return response;
  } catch (e) {
    dispatch(getFresherUploadedImages(onerror));
    return {e, status: false};
  }
};
