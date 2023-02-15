import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


const AddService = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = 'http://localhost:5000/service';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
        alert('new service added')
        navigate('/home');
    };
    return (
        <div className='w-50 mx-auto mt-4'>
            <h2 className='text-center'>Please add a new service</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column gap-2'>
                <input placeholder='Service name' {...register("name", { required: true, maxLength: 20 })} />
                <input placeholder='Service price' type="number" {...register("price")} />
                <textarea placeholder='Service description' {...register("description")} />
                <input placeholder='Service photo url' {...register("img")} />
                <input type="submit" value='Add New Service' className='btn btn-danger' />
            </form>
        </div>
    );
};

export default AddService;