import React from 'react';
import { useSelector } from 'react-redux';
import OfferList from './OfferList';
import { UserProfil } from '../components';

function Profile() {
    const {user, userOffers} = useSelector( state =>  ({
        user: state.user,
        userOffers: state.userOffers
    }));
    return(
        <React.Fragment>
            <UserProfil user={user} />
            <div className='title mb-2'>
                Les offres que j'ai postulé 
                <small>( {userOffers.length} offres trouvées )</small>
            </div>
            <OfferList data={ userOffers }/>
        </React.Fragment>
    );
};
export default Profile;