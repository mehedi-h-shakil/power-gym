import React from 'react';

const Questions = () => {
    return (
        <div className='w-9/12 mx-auto mb-10 shadow-lg p-10 rounded-lg'>
            <div>
            <h1 className='text-2xl font-semibold py-2 text-orange-600'>How does react work?</h1>
            <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.It’s possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div className='mt-5'>
                <h1 className='text-2xl font-semibold py-2 text-orange-600'>Differces between props and state</h1>
                <p><strong className='text-lime-600'>Props: </strong>The data is passed from one component to another and it is immutable. props can be used with state and function components. props are read only.</p>
                <p><strong className='text-lime-600'>State: </strong>The data is passed within the components only and it mutable. State can be used only with the state components/class component. State is both read and writeable.</p>
            </div>
            <div className='mt-5'>
                <h1 className='text-2xl font-semibold py-2 text-orange-600'>What does useEffect do in react?</h1>
                <p>By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates. The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components.</p>
            </div>
        </div>
    );
};

export default Questions;