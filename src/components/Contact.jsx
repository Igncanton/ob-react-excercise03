import React from 'react';

const Contact = ({ name, status, index, userRemoval, userLog }) => {

    const logBtn = status
        ? (<button onClick={() => userLog(index)} className='contact_btn contact_btn-logOut'>Log Out</button>)
        : (<button onClick={() => userLog(index)} className='contact_btn contact_btn-logIn'>Log In</button>)

    const userStatus = status
        ? (<p className='contact_status contact_status-online'>online</p>)
        : (<p className='contact_status contact_status-offline'>offline</p>)

    return (
        <div className='contact_container'>
            <p className='contact_name'>{name}</p>
            {userStatus}
            {logBtn}
            <button onClick={() => userRemoval(index)} className='contact_btn contact_btn-delete'>Delete</button>
        </div>
    );
};


export default Contact;
