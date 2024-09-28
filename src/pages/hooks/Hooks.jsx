import './Hooks.scss';
import { useState } from 'react';

function Hooks() {

    {/* Example of useState hook in the component */}

    const [counter, setCounter] = useState(0); 
    const [textColor, setTextColor] = useState('black'); 
    const [value, setValue] = useState(0);
    const [someArray, setArray] = useState([1, 2, 3, 4, 5]);

    const pushToArray = () => {
        let temp = someArray;
        setArray([...temp, 1]); // array copy     
    }

    function increaseNumber() {
        setCounter(counter + 1);
    }

    function decreaseNumber() {
        setCounter(counter -1);
    }

    function changeTextColor() {
        setTextColor('blue'); 
    }

    function valueSetter(event) {
        setValue(event.target.value);
    }

    return (
        <div className='Hooks'>
            <div className='BtnsBlock'>
                <h2>Hooks usage</h2>
                <h3>useState Hook</h3>
                <h3>{counter}</h3>
                <button className='Btn' onClick={increaseNumber}>Increase +</button>
                <button className='Btn' onClick={decreaseNumber}>Decrease -</button>
            </div>
            <hr></hr>

            <div className='TextBlock'>
                <p style={{color: textColor}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ullam architecto, aspernatur libero ea facilis dolore nam eum omnis sint cupiditate quas facere velit vel nisi repellat quisquam in cumque?</p>
                <button className='Btn' onClick={changeTextColor}>Change text color</button>
            </div>
            <hr></hr>

            <div className='Range'>
                <h4>The range value is: {value}</h4>
                <input type='range' onChange={valueSetter} value={value}></input>
            </div>
            <hr></hr>

            <div className='SomeArray'>
                <h4>Some array: {someArray}</h4>
                <button className='Btn' onClick={pushToArray}>Push to array</button>
                <p>Array Numbers:</p>
                <ul>
                    {someArray.map((element, index) => <li key={index}>{element}</li>)}
                </ul>
            </div>
            <hr></hr>
        </div>
    )
}

export default Hooks;