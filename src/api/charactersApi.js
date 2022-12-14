import { baseUrl } from "./constants";

export const getCharactersData = async (pattern, page = 1, gender = '', status = '', species = '') => {
  try {
    const request = await fetch(`${baseUrl}/${pattern}?page=${page}&status=${status}&gender=${gender}&species=${species}`);
    const data = request.json();

    return data;

  } catch (error) {
    return error;
  }
}
