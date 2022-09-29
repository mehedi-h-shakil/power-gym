import React, { useEffect, useState } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import Exercises from '../Exercises/Exercises';

const Home = () => {

    const[exercises, setExercises] = useState([]);
    // console.log(exercises)
    useEffect(() => {
        fetch('exercise.json')
        .then(res=>res.json())
        .then(data => setExercises(data))
    }, [])

    return (
        <div>
            <div className="grid grid-cols-4">
                <div className=" mx-auto col-span-3 mt-20">
                   <div className='mb-5'>
                        <h1 className='text-5xl text-lime-500'><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> Power Gym
                        </h1>
                        <p className='text-2xl font-semibold mt-10'>Select today's exercise</p>
                   </div>
                    <Exercises exercises={exercises}></Exercises>
                </div>
                <div className="cart-container border-solid border-2 border-indigo-300">
                    <h1>I am from cart container</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;