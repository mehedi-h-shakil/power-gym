import React from 'react';
import SingleExercise from '../SingleExercise/SingleExercise';

const Exercises = ({exercises}) => {
    // console.log(exercises)
    return (
        <div>
            <div className="exercise-container grid grid-cols-3 gap-4 py-10">
            {
             exercises.map((ex) => <SingleExercise exercise={ex} key={ex.id}></SingleExercise>)
            }
            </div>
          
        </div>
    );
};

export default Exercises;