import * as React from 'react';
import { useState } from "react";
import {useEffectSkipFirst} from 'use-effect-skip-first';

const App = () => {

    const [counter, setCounter] = useState(0);

    useEffectSkipFirst(() => {
        console.log("effect called", counter);
    }, [counter]);

    return (
        <div>
            <h1 className="text-red-600">use-effect-skip-first Demo</h1>
            <button onClick={() => setCounter(counter + 1)}>
                Click me
            </button>
            <p>Counter: {counter}</p>
        </div>
    );
};

export default App;
