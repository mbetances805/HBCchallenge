import axios from 'axios';

const GET_USERS = 'GET_USERS';

const defaultUser = {};

const getUsers = (list) => ({type: GET_USERS, list});

export const loadUsers = () =>
  dispatch =>
    axios.get(`/api/users`)
      .then(res =>
        dispatch(getUsers(res.data)))
      .catch(err => console.log(err));

export default function (state = defaultUser, action) {
  switch (action.type) {
    case GET_USERS:
      return action.list
    default:
      return state
  }
}
