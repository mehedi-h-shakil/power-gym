import React, { useEffect, useState } from 'react';
import user from '../../images/user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Cart = ({cart}) => {
    
    // console.log(cart)

    const totalExerciseTime = cart.reduce((n, {time}) => n + parseInt(time), 0);


    const[breakTime, setBreakTime] = useState([]);

    useEffect(() => {
        const previousBreakTime = localStorage.getItem("breaktime");
        const oldBreakTime = JSON.parse(previousBreakTime);
        if(oldBreakTime){
            setBreakTime(oldBreakTime)
            // console.log(oldBreakTime)
        }
    },[])
    

    const handleAddToBreak = (breakTime) => {
        localStorage.setItem("breaktime", JSON.stringify(breakTime))
        setBreakTime(breakTime)
    }
    

    

    return (
        <div className='px-10 py-5'>
            <div className='flex'>
                <img className='w-16 rounded-full' src={user} alt="" />
                <div className='px-2'>
                    <h2 className='font-semibold'>Mehedi Hasan Shakil</h2>
                    <p><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className='mt-10 flex justify-around bg-slate-300 p-5 rounded-lg'>
                <div className='text-center'>
                <h4><span className='text-lg font-semibold'>75</span><small className='text-sm'>kg</small></h4>
                <p className='text-sm'>Weight</p>
                </div>
                <div className='text-center'>
                <h4 className='text-lg font-semibold'>5.11</h4>
                <p className='text-sm'>Height</p>
                </div>
                <div className='text-center'>
                <h4><span className='text-lg font-semibold'>24</span><small className='text-sm'>yrs</small></h4>
                <p className='text-sm'>Age</p>
                </div>
            </div>
            <div className='mt-5'>
                <h2 className='text-2xl font-semibold'>Add A Break</h2>
                <div className='flex mt-5 justify-between bg-slate-300 p-5 rounded-lg '>
                    <button onClick={() => {handleAddToBreak(10)}} className='px-4 py-3 bg-white hover:bg-indigo-500 hover:text-white rounded-full'>10</button>
                    <button onClick={() => {handleAddToBreak(20)}} className='px-4 py-3 bg-white hover:bg-indigo-500 hover:text-white rounded-full'>20</button>
                    <button onClick={() => {handleAddToBreak(30)}} className='px-4 py-3 bg-white hover:bg-indigo-500 hover:text-white rounded-full'>30</button>
                    <button onClick={() => {handleAddToBreak(40)}} className='px-4 py-3 bg-white hover:bg-indigo-500 hover:text-white rounded-full'>40</button>
                    <button onClick={() => {handleAddToBreak(50)}} className='px-4 py-3 bg-white hover:bg-indigo-500 hover:text-white rounded-full'>50</button>
                </div>
            </div>
            <div className='mt-5'>
                <h2 className='text-2xl font-semibold'>Exercise Details</h2>
                <div className='mt-5 flex justify-between  bg-slate-300 rounded-lg p-5'>
                    <p className='text-lg'>Exercise time</p>
                    <p>{totalExerciseTime}</p>
                </div>
                <div className='mt-5 bg-slate-300 rounded-lg p-5 flex justify-between'>
                    <p className='text-lg '>Break time</p>
                    <p>{breakTime}</p>
                </div>
            </div>
            <div className='mt-10'>
            <button className='bg-indigo-500 p-5 w-full text-white rounded-lg hover:bg-lime-600'>Activity Complete</button>
            </div>
        </div>
    );
};

export default Cart;