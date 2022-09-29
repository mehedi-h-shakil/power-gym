import React from 'react';
import user from '../../images/user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
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
        </div>
    );
};

export default Cart;