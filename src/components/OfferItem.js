import React from 'react';
import { Button } from '../components';

function OfferItem ({ Item = {} }) {
    return(
        <p>
            { Item._id }<br />
            { Item.city }<br />
            { Item.name }<br />
            { Item.company }<br />
            { Item.createdAt }<br />
            { Item.description }<br />
            <Button>Postuler</Button>
        </p>
    );
    
};

export default OfferItem;