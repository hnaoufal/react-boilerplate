import axios from 'axios';

const url = 'https://sellics-frontend-test.herokuapp.com/reviews';

export interface ReviewRequestPayload {
  page: Number;
}

class ReviewsApiClass {
  getReviews = ({ page }: ReviewRequestPayload) => axios.get(`api/reviews/${page}`);
}

export default new ReviewsApiClass(); 