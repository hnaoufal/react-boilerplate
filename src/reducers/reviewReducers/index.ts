import { ReviewsActionTypes } from '../../constants/index'

export type State = []

export interface Actions {
  type: String | null;
  payload: Array<object> | null;
}

const initialState: State = [];

export default function reviewsReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case ReviewsActionTypes.GET_ALL_REVIEWS_COMPLETE:
      return action.payload;
    default:
      break;
  }
  return state;
}
