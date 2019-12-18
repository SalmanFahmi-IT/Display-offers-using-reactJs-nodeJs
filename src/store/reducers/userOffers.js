/**
 * UserOffersReducer
 */
const initialState = [];
function userOffersReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_OFFER_TO_USER':
        return [...state, action.data]
      default:
        return state
    }
}

export default userOffersReducer;