import React from 'react';
import moment from 'moment';
import { Button } from '../components';
import offerImg from '../assets/images/logo.png';
import { useDispatch } from 'react-redux';

function OfferItem ({ Item = {} }) {
    const dispatch = useDispatch();
    const apply = item => {
        const appliedItem = { ...item, applied: true };
        dispatch({type: 'ADD_OFFER_TO_USER', item: appliedItem})
    };
    return(
        <div className='offer-box'>
            <div className='offer-img'>
                <img src={offerImg} alt='logo' />
            </div>
            <div className='offer-content'>
                <h2 className='offer-title mb'> { Item.name } </h2>
                <p className='offer-subtitle mb'> Ajouté le { moment(Item.createdAt).format('DD-MM-YYYY') } </p>
                <p className='offer-description'> { Item.description } </p>
            </div>
            <div className='offer-btn'>
                <Button 
                onClick={() => apply(Item)} 
                primary={Item.applied}
                disabled={Item.applied}
                >
                    {Item.applied ? 'Postulé' : 'Postuler'}
                </Button>
            </div>
        </div>
    );
    
};

export default OfferItem;