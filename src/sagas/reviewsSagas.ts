import { call, fork, put, takeLatest, takeEvery } from 'redux-saga/effects';
import ReviewsApi from '../utils/api/Reviews.api';

import { ReviewsActionTypes } from '../constants/index';

/* Workers */
function* handleGetReviews({ payload }: any) {
  try {
    const result = yield call(ReviewsApi.getReviews as any, { page: payload.page });

    yield put({ type: ReviewsActionTypes.GET_REVIEWS_COMPLETE, payload: result })

  } catch (error) {
    yield put({
      type: ReviewsActionTypes.GET_REVIEWS_FAILED,
      payload: { error },
      error: true,
    });
  }
}

function* handleGetAllReviews({ payload }: any) {
  let page = payload.page;

  try {

    while(payload.hasMore) {
      const result = yield call(ReviewsApi.getReviews as any, { page });
      yield put({ type: ReviewsActionTypes.GET_ALL_REVIEWS_COMPLETE, payload: result })
    }

    page++;
  } catch (error) {
    yield put({
      type: ReviewsActionTypes.GET_ALL_REVIEWS_FAILED,
      payload: { error },
      error: true,
    });
  }
}


/* Watchers */
function* watchHandleGetReviews() {
  yield takeLatest(ReviewsActionTypes.GET_REVIEWS, handleGetReviews);
}

function* watchHandleGettAllReviews() {
  yield takeEvery(ReviewsActionTypes.GET_ALL_REVIEWS, handleGetAllReviews);
}


export function* reviewsSagas() {
  yield fork(watchHandleGetReviews);
  yield fork(watchHandleGettAllReviews);
}
