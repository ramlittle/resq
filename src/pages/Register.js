import { useState, useEffect } from 'react';
//*CSS
import './Register.css';
//*Route
import { useNavigate } from 'react-router';
//*Axios
import axios from 'axios';

function Register() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [showPassword, setShowPassword] = useState('password');

  const navigate = useNavigate();

  const [message, setMessage] = useState('');

  const [allEmail, setallEmail] = useState([]);

  useEffect(() => {
    // TODO on component mount reset allEmail content
    setallEmail([]);
    // TODO get all user email for comparing
    axios.get('http://localhost:8000/api/v1/users/').then((result) => {
      setallEmail(
        result.data.map((user) => {
          return user.email;
        })
      );
    });

  }, []);

  const onSubmitRegistration = (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      return setMessage('Password not match!');
    }
    if (password.length < 7) {
      return setMessage('Use atleast 8 character');
    }
    if (allEmail.includes(email)) {
      return setMessage('Email already exists');
    }
    axios
      .post('http://localhost:8080/api/v1/auth/register', {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        isAdmin: false,
        contact: contact,
        address: address

      })
      .then((result) => {
        console.log(result.data.status);
        if (result.data.status) {
          navigate('/');
        }
      });
  };
  return (
    <div className='vh-100 d-flex justify-content-center align-items-center'>
      <div className='container d-flex justify-content-center align-items-center border border-2 border border-dark'>
        <div className='reg-col-1'>
          <h6 className='mb-3 text-center fw-bold fs-3'>Create your RESQ Account</h6>
          <form
            className=''
            onSubmit={(e) => {
              onSubmitRegistration(e);
            }}
          >
            <div className='mb-3'>
              <div className='row'>
                <div className='col'>
                  <label htmlFor='firstname' className='form-label'>
                    First name:
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='firsname'
                    placeholder='First name'
                    required
                    value={firstname}
                    onChange={(e) => {
                      setFirstname(e.target.value);
                    }}
                  />
                </div>
                <div className='col'>
                  <label htmlFor='lastname' className='form-label'>
                    Last name:
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='lastname'
                    placeholder='Last name'
                    required
                    value={lastname}
                    onChange={(e) => {
                      setLastname(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>
                Email:
              </label>
              <input
                type='text'
                className='form-control'
                id='email'
                placeholder='email'
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {allEmail.includes(email) ? (
                <small className='text-danger mt-1'>
                  Email Already Exist!
                </small>
              ) : null}
            </div>
            <div className='mb-3'>
              <label htmlFor='contact' className='form-label'>
                Contact:
              </label>
              <input
                type='contact'
                className='form-control'
                id='contact'
                placeholder='Contact'
                required
                value={contact}
                onChange={(e) => {
                  setContact(e.target.value);
                }}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='address' className='form-label'>
                Address:
              </label>
              <input
                type='address'
                className='form-control'
                id='address'
                placeholder='Address'
                required
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
            <div className='mb-3'>
              <div className='row'>
                <label htmlFor='password' className='form-label'>
                  Password:
                </label>
                <div className='col'>
                  <input
                    type={showPassword}
                    className='form-control'
                    id='password'
                    placeholder='Password'
                    required
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (password.length < 7) {
                        setMessage('Use atleast 8 character');
                      } else {
                        setMessage('');
                      }
                    }}
                  />
                </div>
                <div className='col'>
                  <input
                    type={showPassword}
                    className='form-control'
                    id='cpassword'
                    placeholder='Confirm'
                    required
                    value={cpassword}
                    onChange={(e) => {
                      setCpassword(e.target.value);
                    }}
                  />
                </div>
                {message ? (
                  <small className='text-danger'>{message}</small>
                ) : null}
              </div>
            </div>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='checkbox'
                value=''
                id='flexCheckDefault'
                onChange={(e) => {
                  e.target.checked === true
                    ? setShowPassword('text')
                    : setShowPassword('password');
                }}
              />
              <label className='form-check-label' htmlFor='flexCheckDefault'>
                Show password
              </label>
            </div>
            <div className='mb-3 mt-2 d-flex justify-content-center'>
              <input
                type='submit'
                className='btn btn-dark px-4'
                value='Register'
              />
            </div>
          </form>
          <p className='mt-2 text-center'>
            Already have an account?{' '}
            <span>
              <a href='/' className='link-primary'>
                Login here
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
