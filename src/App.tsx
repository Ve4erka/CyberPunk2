import React,{useState, Fragment} from 'react';
import './styles/App.scss';
import './styles/media.scss';
import {Decstop} from './forms/decstop';
import {Mobile} from './forms/mobile';
import {Test} from './forms/test';
function App() {


    const [val, setVal] = useState({ min: 0, max: 100 });


    
    return (
        <div className="App">
             <Decstop/>
             <Mobile/>
           
        </div>
    );
}

export default App;