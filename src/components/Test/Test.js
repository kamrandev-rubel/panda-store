import React, { useState } from 'react';

const Test = () => {
    const [count, setCount] = useState(0)
    const plus = () => {
        // setCount(count + 1)

        // const newCount = count + 1
        // setCount(newCount)

    }
    const minus = () => {
        // if (count > 0) {
        //     setCount(count - 1)
        // }
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)} className='btn btn-danger'>+</button>
            <button onClick={()=> setCount(count-1)} className='btn btn-danger'> -</button>
        </div>
    );
};

export default Test;