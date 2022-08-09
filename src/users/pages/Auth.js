import React, { useContext, useState } from 'react'

import Card from '../../shared/components/UIElements/Card'
import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators'
import { useForm } from '../../shared/hooks/form-hook'
import { AuthContext } from '../../shared/context/auth-context'
import './Auth.css'


const Auth = () => {
  const auth = useContext(AuthContext)
  const [formState, inputHandler, setInputData] = useForm(
    {
      email: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      }
    }, false
  )

  const [isLoginMode, setIsLoginMode] = useState(true)

  const authSubmitHandler = event => {
    event.preventDefault()
    console.log(formState.inputs)
    auth.login()
  }

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setInputData({
        ...formState.inputs,
        name: undefined
      }, formState.inputs.email.isValid && formState.inputs.password.isValid)
    } else {
      setInputData({
        ...formState.inputs,
        name: {
          valid: '',
          isValid: false
        }
      }, false)
    }
    setIsLoginMode(prevMode => !prevMode)
  }

  return (
    <Card className='authentication'>
      <h2>Login</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {
          !isLoginMode &&
          <Input
            element='input'
            id='name'
            type='text'
            label='Name'
            validators={[VALIDATOR_REQUIRE()]}
            errorText='Enter valid name.'
            onInput={inputHandler}
          />
        }
        <Input
          element='input'
          id='email'
          type='email'
          label='Email'
          validators={[VALIDATOR_EMAIL()]}
          errorText='Enter valid email'
          onInput={inputHandler}
        />
        <Input
          element='input'
          id='password'
          type='password'
          label='Password'
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText='Enter valid password'
          onInput={inputHandler}
        />
        <Button
          type='submit'
          disabled={!formState.isValid}
        >{isLoginMode ? 'Login' : 'SignUp'}</Button>
      </form>
      <Button
        inverse
        onClick={switchModeHandler}
      >{isLoginMode ? 'SignUp' : 'Login'} Instead</Button>
    </Card>
  )
}

export default Auth