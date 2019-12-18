import React from 'react';
import { useSelector } from 'react-redux';
import OfferList from './OfferList';

function Home() {
    const offers = useSelector( state => state.offers);
    return(
       <OfferList data={ offers }/>
    );
};
export default Home;