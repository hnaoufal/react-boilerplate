import { ReviewsActionTypes } from '../constants';

export interface ReviewsAction {
  type: ReviewsActionTypes;
  payload: {}
}

export function loadAllReviews(): ReviewsAction {
  return {
    type: ReviewsActionTypes.GET_ALL_REVIEWS,
    payload: {}
  }
}

export function loadReviews(page: number): ReviewsAction {
  return {
    type: ReviewsActionTypes.GET_REVIEWS,
    payload: { page }
  }
}