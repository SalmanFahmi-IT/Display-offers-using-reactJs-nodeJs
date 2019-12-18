import React from 'react';
import { OfferItem } from '../components';

function OfferList ({ data }) {
    return(
        <>
            {
                data && data.map(item => {
                return <OfferItem 
                        key = {item._id}
                        Item = {item}
                        />
                })
            }
        </>
    );
    
};

export default OfferList;