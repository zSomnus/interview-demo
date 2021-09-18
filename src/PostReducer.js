import { FETCH_POSTS, NEW_POST } from "./action/Type";

const initialState = {
  posts: [],
  addedPost: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case NEW_POST:
      return {
        addedPost: action.payload,
        posts: [action.payload, ...state.posts],
      };
    default:
      return state;
  }
}
