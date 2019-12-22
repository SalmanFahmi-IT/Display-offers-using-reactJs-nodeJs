/**
 * Fetching data
 * @param {*} data 
 */
const url = `${process.env.REACT_APP_API_URL}/offers`;
const fetchOffersSuccess = data => ({
  type: 'FETCH_OFFERS_SUCCESS',
  data
});

const fetchOffersStarted = () => ({
  type: 'FETCH_OFFERS_STARTED'
});

const fetchOffersFailure = error => ({
  type: 'FETCH_OFFERS_FAILURE',
  error
});

export const fetchOffers = () => {
  return dispatch => {
    dispatch(fetchOffersStarted());
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then((data) => {
        dispatch(fetchOffersSuccess(data));
      })
      .catch(err => {
        dispatch(fetchOffersFailure(err));
      })
  };
};