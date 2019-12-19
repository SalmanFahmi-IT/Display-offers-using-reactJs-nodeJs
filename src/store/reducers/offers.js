/**
 * OffersReducer
 */
import offers from '../../data/offers';
const initialState = offers.map(offer => {return {...offer, applied: false}});
function offersReducer(state = initialState, action) {
    switch (action.type) {
      case 'APPLY_OFFER':
        const offer = { ...action.item, applied: true};
        return [ offer, ...state ]
      default:
        return state
    }
}

export default offersReducer;