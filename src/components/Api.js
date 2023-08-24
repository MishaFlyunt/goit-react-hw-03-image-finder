import axios from 'axios';

const API_KEY = '22737684-faaa64a0ef24c6eb802e7e4c8';
export const perPage = 12;
axios.defaults.baseURL = `https://pixabay.com/api/`;

export const fetchImages = async (query, page) => {
  const toSeparate = query.split('/');
  const extractQuery = toSeparate[1];
  console.log(extractQuery);
  try {
    const response = await axios.get('', {
      params: {
        key: API_KEY,
        q: extractQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        page: page,
        per_page: perPage,
      },
    });
    return response.data.hits;
  } catch (error) {
    throw error;
  }
};
