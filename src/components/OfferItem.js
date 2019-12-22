import React from 'react';
import moment from 'moment';
import { Button } from '../components';
import offerImg from '../assets/images/logo.png';

function OfferItem ({ Item = {}, apply }) {
    return(
        <div className='offer-box'>
            <div className='content'>
                <div className='offer-img'>
                    <img src={offerImg} alt='logo' />
                </div>
                <div className='offer-content'>
                    <h2 className='offer-title mb'> { Item.name } </h2>
                    <p className='offer-subtitle mb'> Ajouté le { moment(Item.createdAt).format('DD-MM-YYYY') } </p>
                    <p className='offer-description'> { Item.description } </p>
                </div>
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