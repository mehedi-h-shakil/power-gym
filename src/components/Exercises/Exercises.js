import React from 'react';
import SingleExercise from '../SingleExercise/SingleExercise';

const Exercises = ({exercises, setCart, cart}) => {
    // console.log(exercises)
    return (
        <div>
            <div className="exercise-container grid xl:grid-cols-3 sm:grid-cols-1 gap-4 py-10">
            {
             exercises.map((ex) => <SingleExercise exercise={ex} key={ex?.id} cart={cart} setCart={setCart}></SingleExercise>)
            }
            </div>
          
        </div>
    );
};

export default Exercises;