import axios from 'axios';

export const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchTrending = async () => {
  try {
    const options = {
      params: {
        api_key: 'b2b44248eba868a317398f9864f0c270',
      },
    };

    const response = await axios.get(`${BASE_URL}trending/movie/week`, options);
    return response.data;
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
};
