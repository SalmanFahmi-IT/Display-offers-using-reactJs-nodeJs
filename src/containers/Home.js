import React from 'react';
import { useSelector } from 'react-redux';
import OfferList from './OfferList';

function Home() {
    const {offers, userOffers} = useSelector( state =>  ({
        userOffers: state.userOffers,
        offers: state.offers
    }));
    const offerIds = userOffers.map(item => item._id);
    const newOfferList = offers.map(item =>{ return { ...item, applied: offerIds.includes(item._id)}});
    return(
        <>
            <div className='title mb-2'>
                Offres <small>( {offers.length} offres trouvées )</small>
            </div>
            <OfferList data={ newOfferList } />
        </>
    );
};

export default Home;