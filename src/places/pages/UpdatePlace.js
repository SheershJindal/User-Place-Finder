import React from 'react'
import { useParams } from 'react-router-dom'

import Button from '../../shared/components/FormElements/Button'
import Input from '../../shared/components/FormElements/Input'
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators'
import { useForm } from '../../shared/hooks/form-hook'
import './PlaceForm.css'

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

const UpdatePlace = props => {
    const placeId = useParams().placeId
    
    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId)

    const [formState, inputHandler] = useForm({
        title: {
            value: identifiedPlace.title,
            isValid: true
        },
        description: {
            value: identifiedPlace.description,
            isValid: true
        }
    }, true)

    const placeUpdateSubmitHandler = event => {
        event.preventDefault()
        console.log(formState.inputs)
    }

    if (!identifiedPlace) {
        return <div className='center'>
            <h2>Could not find place.</h2>
        </div>
    }
    return (
        <form className='place-form' onSubmit={placeUpdateSubmitHandler}>
            <Input 
                id='title'
                element='input'
                type='text'
                label='Title'
                validators={[VALIDATOR_REQUIRE()]}
                errorText='Enter valid input.'
                onInput={inputHandler}
                initialValue={formState.inputs.title.value}
                initialValid={formState.inputs.title.isValid}/>
            <Input 
                id='description'
                element='textarea'
                label='Description'
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText='Enter valid description.'
                onInput={inputHandler}
                initialValue={formState.inputs.description.value}
                initialValid={formState.inputs.description.isValid}/>
            <Button
                type='submit'
                disabled={!formState.isValid}>
                    Update Place
            </Button>
        </form>
    )
}

export default UpdatePlace