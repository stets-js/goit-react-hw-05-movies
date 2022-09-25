import axios from 'axios';

export const BASE_URL = 'https://api.themoviedb.org/3/';
const options = {
  params: {
    api_key: 'b2b44248eba868a317398f9864f0c270',
  },
};

const getTrending = async () => {
  try {
    const response = await axios.get(`${BASE_URL}trending/movie/week`, options);
    return response.data;
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
};

export const getSearchMovies = async query => {
  try {
    const response = await axios.get(`${BASE_URL}search/movie`, {
      params: { query: query, api_key: options.params.api_key },
    });
    return response.data;
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
};

export const getDetailsMovies = async id => {
  try {
    const response = await axios.get(`${BASE_URL}movie/${id}`, options);
    return response.data;
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
};

export const getCastMovies = async id => {
  try {
    const response = await axios.get(`${BASE_URL}movie/${id}/credits`, options);
    return response.data;
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
};

export const getRewiesMovies = async id => {
  try {
    const response = await axios.get(`${BASE_URL}movie/${id}/reviews`, options);
    return response.data;
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
};

export default getTrending;
