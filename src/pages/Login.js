

import { useState, useEffect } from 'react';
// *Logo
import logo from '../assets/1.png';

//*Redux
import { useSelector, useDispatch } from 'react-redux';
//*Route
import { useNavigate } from 'react-router';
//*Axios
import axios from 'axios';
import { fetchUser } from '../redux/slices/userSlice';

function Login() {
  //* two way binding
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();

  //* Function on submit
  const onSubmitForm = (e) => {
    e.preventDefault();
    //TODO : check if the user is in the database
    axios
      .post('http://localhost:8080/api/v1/auth/login', {
        email: email,
        password: password,
      })
      .then((result) => {
        if (result.data.status === 'emailInvalid') {
          return setMessage('Email Invalid!');
        }
        if (result.data.id) {
          axios
            .get(`http://localhost:8080/api/v1/users/${result.data.id}`)
            .then((user) => {
              //console.log(user.data);
              dispatch(fetchUser({ user: { ...user.data } }));
              setMessage('');
              localStorage.setItem('RESQ', user.data._id);
              //TODO: navigate to homepage
              navigate('/homepage');
            });
        } else {
          setMessage('Invalid Password!');
        }
      });
  };

  useEffect(() => {
    if ('RESQ' in localStorage) {
      return navigate('/homepage');
    }
  }, []);
  return (
    <div className='vh-100 d-flex justify-content-center align-items-center'>
      <div className='container d-flex justify-content-center align-items-center border border-2 rounded py-3 px-4 border border-dark'>
        <div className='p-5 rounded-3 d-flex flex-column align-items-center'>
          <img alt='logo_here' src={logo}/>
          <small className='mb-3'>Sign in to continue</small>
          <form
            className='w-50'
            onSubmit={(e) => {
              onSubmitForm(e);
            }}
          >
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>
                Email:
              </label>
              <input
                type='text'
                className='form-control'
                id='email'
                placeholder='Enter email'
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='password' className='form-label'>
                Password:
              </label>
              <input
                type='password'
                className='form-control'
                id='password'
                placeholder='Enter password'
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <small className={`text-danger ${message ? 'visible' : 'invisible'}`}>
              {message}
            </small>
            <div className='mb-3 d-flex justify-content-end mb-5'>
              <a href='/' className='link-primary'>
                Forgot Password?
              </a>
            </div>
            <div className='mb-3 d-flex justify-content-center'>
              <input
                type='submit'
                className='btn btn-dark w-75'
                value='Login'
              />
            </div>
        </form>
          <p>
            Don't have an account?{' '}
            <span>
              <a href='/sign_up' className='link-primary'>
                Sign Up
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
