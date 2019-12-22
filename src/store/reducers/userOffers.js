/**
 * OffersReducer
 */
const initialState = {
  list: [],
  started: false,
  success: false,
  failure: false
};
function offersReducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_USER_OFFER_STARTED':
        return {
          ...state,
          started: true
        };
      case 'FETCH_USER_OFFER_SUCCESS':
        return {
          ...state,
          list: action.data,
          started: false,
          success: true,
        };
      case 'FETCH_USER_OFFER_FAILURE':
        return {
          ...state,
          failure: true,
          message: action.error
        };
        case 'APPLY_OFFER_STARTED':
          return {
            ...state,
            started: true
          };
        case 'APPLY_OFFER_SUCCESS':
          return {
            ...state,
            list: action.data,
            started: false,
            success: true,
          };
        case 'APPLY_OFFER_FAILURE':
          return {
            ...state,
            failure: true,
            message: action.error
          };
      default:
        return state
    }
}

export default offersReducer;