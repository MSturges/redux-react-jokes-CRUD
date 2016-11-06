import axios from 'axios';

export const FETCH_JOKES = 'FETCH_JOKES';
export const CREATE_JOKE = 'CREATE_JOKE';
export const FETCH_JOKE = 'FETCH_JOKE';
export const DELETE_JOKE = 'DELETE_JOKE';

const ROOT_URL = 'http://localhost:3000/api/v1';
// const ROOT_URL = '/api/v1';

export function fetchJokes() {
  const request = axios.get(`${ROOT_URL}/jokes`);

  return {
    type: FETCH_JOKES,
    payload: request
  };
}

export function fetchJoke(id) {
  const request = axios.get(`${ROOT_URL}/jokes/${id}`);

  return {
    type: FETCH_JOKE,
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

export function deleteJoke(id) {
  const request = axios.delete(`${ROOT_URL}/jokes/${id}`);

  return {
    type: DELETE_JOKE,
    payload: request
  };
}
