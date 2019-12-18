import React from 'react';
import { useSelector } from 'react-redux';
import OfferList from './OfferList';

function Profile() {
    const {user, userOffers} = useSelector( state =>  ({
        user: state.user,
        userOffers: state.userOffers
    }));
    return(
        <React.Fragment>
            name: {user.name}
            <OfferList data={ userOffers }/>
        </React.Fragment>
    );
};
export default Profile;