import axios from 'axios';

export const FETCH_JOKES = 'FETCH_JOKES';
export const CREATE_JOKE = 'CREATE_JOKE';

const ROOT_URL = '/api/v1';

export function fetchJokes() {
  const request = axios.get(`${ROOT_URL}/jokes`);

  return {
    type: FETCH_JOKES,
    payload: request
  };
}

export function createJoke(props) {
  const request = axios.post(`${ROOT_URL}/createJoke`, props);

  return {
    type: CREATE_JOKE,
    payload: request,
  }
}
