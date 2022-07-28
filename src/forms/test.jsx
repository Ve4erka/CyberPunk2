import React, {useState} from "react";
import '../styles/App.scss';
import '../styles/media.scss';
import {RangeStepInput} from 'react-range-step-input';

const Test = (props) => {




    return (
        <div className="App-test">
            <RangeStepInput
                min={0} max={12}
            />
        </div>
        
    )
}

export {Test}