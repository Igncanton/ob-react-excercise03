import React, { useState } from 'react'
import NewContactform from './NewContactForm';
import Contact from './Contact';

// Initiall users data base as a template example
const usersDB = [{ user: "Ignacio", logged: false }, { user: "Sophie", looged: false }]

function ContactsList() {
    // holds and updates the users state of the app
    const [users, setUsers] = useState(usersDB);

    // creates and push a new user into users
    function userCreation(userName) {
        const tempUsers = [...users]
        tempUsers.push({ user: userName, logged: false })
        setUsers(tempUsers)
    }

    // removes a user from the users state
    function userRemoval(userIndex) {
        const tempUsers = [...users]
        tempUsers.splice(userIndex, 1)
        setUsers(tempUsers)
    }

    // updates the logged state of a use
    function userLog(userIndex) {
        const tempUsers = [...users]
        tempUsers[userIndex].logged = !tempUsers[userIndex].logged
        setUsers(tempUsers)
    }

    return (
        <>
            {/* Title Container */}
            <h1 className='contactList_title'>Contacts List</h1>

            {/* New Contact Form */}
            <NewContactform userCreation={userCreation} />

            {/* Contact List with all the users */}
            <div className='contactList_container'>
                {users.map((user, index) => {
                    return (
                        <Contact
                            name={user.user}
                            status={user.logged}
                            key={index}
                            index={index}
                            userRemoval={userRemoval}
                            userLog={userLog} />
                    )
                })}
            </div>
        </>
    )
}

export default ContactsList
