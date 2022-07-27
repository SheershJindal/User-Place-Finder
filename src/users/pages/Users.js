import React from 'react'
import UsersList from '../components/UsersList'

const Users = () => {
    const USERS = [
        {
            id: 'u1', 
            name: 'Sheersh', 
            image: 'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80', 
            places: 3
        }
    ]

    return <UsersList items={USERS}/>
}

export default Users