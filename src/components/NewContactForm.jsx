import React, { useRef } from 'react';

// New contact form creation
const NewContactform = ({ userCreation }) => {
    const userInputRef = useRef('')

    const newUser = (e) => {
        e.preventDefault()
        userCreation(userInputRef.current.value)
        userInputRef.current.value = ''
    }

    return (
        <form onSubmit={newUser} className='newContact_form'>
            <input ref={userInputRef} className='newContact_input' type='text' placeholder="New contact's name" />
            <button className='newContact_btn' type='submit'>Create contact</button>
        </form>
    );
};

export default NewContactform;
