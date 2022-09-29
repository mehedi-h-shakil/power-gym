import React from 'react';
import './SingleExercise.css'

const SingleExercise = ({exercise}) => {
    const {image, name, time, description, age} = exercise;
    return (
        <div>
            <div className='exercise rounded-sm shadow-lg'>
               <div className='p-5'>
               <img src={image} alt="" />
                <p className='font-semibold py-2'>{name}</p>
                <p>{description.slice(0,50)}...</p>
                <p className='font-semibold py-2'>For Age: {age}</p>
                <p className='font-semibold py-1'>Time required: {time}s</p>
                <button className='bg-blue-600 text-white w-full p-2 rounded-sm'>Add to list</button>
               </div>
            </div>
        </div>
    );
};

export default SingleExercise;