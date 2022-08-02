import React from 'react'
import { useParams } from 'react-router-dom'

import PlaceList from '../components/PlaceList'

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Taj Mahal',
        description: 'One of 7 wonders of world',
        imageUrl: 'https://whc.unesco.org/uploads/thumbs/site_0252_0008-750-750-20151104113424.jpg',
        address: 'Agra',
        location: {
            lat: 40.45543,
            lang: 70.21345
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Taj Mahal',
        description: 'One of 7 wonders of world',
        imageUrl: 'https://whc.unesco.org/uploads/thumbs/site_0252_0008-750-750-20151104113424.jpg',
        address: 'Agra',
        location: {
            lat: 213.45543,
            lang: 134.21345
        },
        creator: 'u2'
    }
]

const UserPlaces = props => {

    const userId = useParams().userId
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
    return (
        <PlaceList items={loadedPlaces} />
    )
}

export default UserPlaces