import * as actionsType from '../actionsType';
import { userApi } from '../api';

export function getUser(data) {
  return (dispatch) => {
    dispatch({
      type: actionsType.USER_FETCH_REQUESTED,
    });
    return new Promise((resolve, reject) => {
      userApi(data)
        .then((res) => {
          dispatch({
            type: actionsType.USER_FETCH_SUCCEEDED,
            data: res,
          });
          return resolve(res);
        })
        .catch((err) => {
          dispatch({
            type: actionsType.USER_FETCH_FAILED,
          });
          return reject(err);
        });
    });
  };
}
