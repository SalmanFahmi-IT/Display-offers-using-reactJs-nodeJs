import React from 'react';
import image from '../assets/images/avatar.png';
import emailIcon from '../assets/images/email-icon.png';
import adressIcon from '../assets/images/adress-icon.png';

function UserProfil ({ user = {} }) {
    return(
        <div className='user-box mb-2'>
            <div className='user-img'>
                <img src={image} alt={user.name} width='150'/>
            </div>
            <div className='user-content'>
                <h2 className='mb'> { user.name } </h2>
                <p className='mb'> <img src={emailIcon} alt='email'/> { user.email } </p>
                <p> <img src={adressIcon} alt='adress'/> { user.adresse } </p>
            </div>
        </div>
    );
    
};

export default UserProfil;