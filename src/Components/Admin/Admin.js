import{ useNavigate, Link } from 'react-router-dom';
import React from 'react';
import './Admin.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Admin = () => {
    return ( 
        <div className='d-flex justify-content-center align-items-center gradient-bg bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <form action=''>
                    <div className='mb-3'>
                    <label htmlfor='username'><strong>Username</strong></label>
                    <input type='text' id='username' name='username' placeholder='username' className='form-control rounded-0'/>
                    </div>
                    <div className='mb-3'>
                    <label htmlfor='password'><strong>Password</strong></label>
                    <input type='password' id='password' name='password' placeholder='password' className='form-control rounded-0'/>
                    </div>
                    <button className='btn btn-success w-100 rounded-0'>Login</button>
                </form>
            </div>
        </div>
     );
}
 
export default Admin;