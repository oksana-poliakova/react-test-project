import './Hooks.scss';
import { useState } from 'react';
import { useRef } from 'react';

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

    {/* Example of useRef hook in the component */}

    const button1 = useRef();
    const button2 = useRef();
    const input1 = useRef();
    const checkbox1 = useRef();

    function buttonListener() {
        button1.current.style.background = "blue";
        console.log(input1.current.value); 
    }

    function checkboxListener() {
        console.log(checkbox1.current.checked);
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

            <div className="UseRefBlock">
                <div className="UseRefContent">
                    <div className='InputBlock'>
                    <h3>useRef hook</h3>
                    <input className="InputField" ref={input1} type='text'/>
                    <button className='Btn' ref={button1} onClick={buttonListener}>Push</button>
                    </div>
                    <hr></hr>

                    <div className='Check'>
                        <input className="InputField" ref={checkbox1} type='checkbox'/>
                        <button className='Btn' ref={button2} onClick={checkboxListener}>Push</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hooks;