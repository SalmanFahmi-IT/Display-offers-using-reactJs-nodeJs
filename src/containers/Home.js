import React from 'react';
import { useSelector } from 'react-redux';
import OfferList from './OfferList';

function Home() {
    const {offers} = useSelector( state =>  ({
        offers: state.offers
    }));

    return(
        <>
            <div className='title mb-2'>
                Offres <small>( {offers.length} offres trouvées )</small>
            </div>
            <OfferList data={ offers } />
        </>
    );
};

export default Home;