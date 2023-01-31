import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='w-50 mx-auto p-5'>
            <h2 style={{ color: '#e44a58' }} className='text-center'>Please Login</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted " style={{ textAlign: 'left' }}>
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button style={{ backgroundColor: '#e44a58' }} type="submit">Login</Button>
            </Form>
            <p>Dosen't have an account? <Link to='/register' className='text-decoration-none text-danger'>Go for register</Link> </p>
        </div>
    );
};

export default Login;