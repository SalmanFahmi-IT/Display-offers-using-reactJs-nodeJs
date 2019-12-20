import offers from '../data/offers';
export const fetchOffers = () => {
    return dispatch => {
            dispatch(fetchOffersStarted());
            try{
                dispatch(fetchOffersSuccess(offers));
                console.log(offers)
            }
            catch(error) {
                dispatch(fetchOffersFailure(error));
            }
    };
  };
  
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