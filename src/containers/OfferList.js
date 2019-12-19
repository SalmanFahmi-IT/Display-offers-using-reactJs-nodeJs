import React from 'react';
import { useDispatch } from 'react-redux';
import { OfferItem } from '../components';

function OfferList ({ data }) {    
    const dispatch = useDispatch();
    const apply = item => {
        dispatch({type: 'APPLY_OFFER', item })
    };
    return(
        <>
            {
                data && data.map(item => {
                return <OfferItem 
                        key = {item._id}
                        Item = {item}
                        apply={apply}
                        />
                })
            }
        </>
    );
    
};

export default OfferList;