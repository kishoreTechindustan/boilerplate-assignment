import * as actionsType from '../actionsType';

const initialState = {
  isLoading: false,
  users: [],
};

export default function Dashboard(state = { ...initialState }, action) {
  switch (action.type) {
    case actionsType.USER_FETCH_REQUESTED:
      return { ...state, users: [], isLoading: true };
    case actionsType.USER_FETCH_SUCCEEDED:
      return { ...state, users: action.data, isLoading: false };
    case actionsType.USER_FETCH_FAILED:
      return { ...state, users: [], isLoading: false };
    default:
      return state;
  }
}
