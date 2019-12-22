/**
 * Fetching data
 * @param {*} data 
 */
const url = `${process.env.REACT_APP_API_URL}/useroffers`;
const fetchUserOffersSuccess = data => ({
  type: 'FETCH_USER_OFFERS_SUCCESS',
  data
});

const fetchUserOffersStarted = () => ({
  type: 'FETCH_USER_OFFERS_STARTED'
});

const fetchUserOffersFailure = error => ({
  type: 'FETCH_USER_OFFERS_FAILURE',
  error
});

const ApplyOfferSuccess = data => ({
  type: 'APPLY_OFFER_SUCCESS',
  data
});

const ApplyOfferStarted = () => ({
  type: 'APPLY_OFFER_STARTED'
});

const ApplyOfferFailure = error => ({
  type: 'APPLY_OFFER_FAILURE',
  error
});

export const fetchUserOffers = () => {
  return dispatch => {
    dispatch(fetchUserOffersStarted());
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then((data) => {
        dispatch(fetchUserOffersSuccess(data));
      })
      .catch(err => {
        dispatch(fetchUserOffersFailure(err));
      })
  };
};

export const applyOffer = (item) => {
  return dispatch => {
    dispatch(ApplyOfferStarted());
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(item)
    })
      .then(response => {
        return response.json();
      })
      .then((data) => {
        dispatch(ApplyOfferSuccess(data));
      })
      .catch(err => {
        dispatch(ApplyOfferFailure(err));
      })
  };
};