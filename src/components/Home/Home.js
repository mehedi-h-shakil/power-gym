import React, { useEffect, useState } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import Exercises from '../Exercises/Exercises';
import Cart from '../Cart/Cart';


const Home = () => {

    const[exercises, setExercises] = useState([]);
    const[cart, setCart] = useState([]);
    
    // console.log(cart)
    useEffect(() => {
        fetch('exercise.json')
        .then(res=>res.json())
        .then(data => setExercises(data))
    }, [])

    return (
        <div>
            <div className="grid xl:grid-cols-4 sm:grid-cols-1 relative">
                <div className=" mx-auto col-span-3 mt-20">
                   <div className='mb-5'>
                        <h1 className='text-5xl text-lime-500'><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> Power Gym
                        </h1>
                        <p className='text-2xl font-semibold mt-10'>Select today's exercise</p>
                   </div>
                    <Exercises exercises={exercises} cart={cart} setCart={setCart}></Exercises>
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;