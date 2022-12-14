import { call, put, spawn } from "redux-saga/effects";
import { getCharactersData } from "../../api/charactersApi";

import { setCharacters, setCharactersLoadError } from "./actions";

export function* fetchCharactersDataSaga({ payload: { page, gender, status, species } }) {
  yield spawn(loadCharacters, page, gender, status, species);
}

export function* loadCharacters(page, gender, status, species) {
  const characters = yield call(getCharactersData, 'character', page, gender, status, species);
  
  if (!characters?.error) {
    yield put(setCharacters(characters));
  } else {
    yield put(setCharactersLoadError())
  }
}
