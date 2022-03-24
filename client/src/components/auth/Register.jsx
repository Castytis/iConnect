import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const password2ChangeHandler = (event) => {
    setPassword2(event.target.value);
  };

  const createUserHandler = async (event) => {
    event.preventDefault();

    if (password !== password2) {
      console.log('Password do not match');
    } else {
      const newUser = {
        name: name,
        email: email,
        password: password,
      };
      console.log(newUser);
    }
  };

  return (
    <Fragment>
      <div className='container'>
        <h1 className='large text-primary'>Sign Up</h1>
        <p className='lead'>
          <i className='fas fa-user'></i> Create Your Account
        </p>
        <form className='form' onSubmit={createUserHandler}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Name'
              name='name'
              required
              value={name}
              onChange={nameChangeHandler}
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={emailChangeHandler}
            />
            <small className='form-text'>
              This site uses Gravatar so if you want a profile image, use a
              Gravatar email
            </small>
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Password'
              name='password'
              minLength='6'
              value={password}
              onChange={passwordChangeHandler}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Confirm Password'
              name='password2'
              minLength='6'
              value={password2}
              onChange={password2ChangeHandler}
            />
          </div>
          <input type='submit' className='btn btn-primary' value='Register' />
        </form>
        <p className='my-1'>
          Already have an account? <Link href='/login'>Sign In</Link>
        </p>
      </div>
    </Fragment>
  );
};

export default Register;
