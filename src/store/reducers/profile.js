import {getMe, getList, getUserDetails} from 'services/api/User/routines';
import get from 'lodash/get';

const initial = {
  users: [],
  repositories: [],
  userData:{}
};

export default (state = initial, action) => {
  switch (action.type) {
    case getMe.SUCCESS: {
      let data = get(action, 'payload.response.data', {});

      return {
        ...state,
        data,
      };
    }
    case getUserDetails.SUCCESS: {
      let data = get(action, 'payload.response.data', {});

      return {
        ...state,
        userData: data,
      };
    }
    case getList.SUCCESS: {
      let data = get(action, 'payload.response.data.items', []);

      if (action.payload.request.link === 'repositories') {
        return {
          ...state,
          repositories: data,
        };
      }

      if (action.payload.request.link === 'users') {
        return {
          ...state,
          users: data,
        };
      }
      return state;
    }
    case 'CLEAR': {
      return {
        ...state,
        users: [],
        repositories: [],
      };
    }
  }
  return state;
};
