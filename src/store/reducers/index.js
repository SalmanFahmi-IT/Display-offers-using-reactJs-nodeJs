import { combineReducers } from 'redux';
import user from './user';
import offers from './offers';
import userOffers from './userOffers';

export default combineReducers({
    user,
    offers,
    userOffers
});