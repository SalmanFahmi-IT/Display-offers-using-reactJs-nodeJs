/**
 * UserOffersReducer
 */
const initialState = [];
function userOffersReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_OFFER_TO_USER':
        return [ action.item, ...state ]
      default:
        return state
    }
}

export default userOffersReducer;