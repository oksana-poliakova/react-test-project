import './Hooks.scss';
import { useState, useEffect, useRef } from 'react';

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

    {/* Example of useEffect hook in the component */}

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setUsers(json))
    });


    return (
        <div className='hooks'>
            <div className='btnsBlock'>
                <h2>Hooks usage</h2>
                <h3>useState Hook</h3>
                <h3>{counter}</h3>
                <button className='btn' onClick={increaseNumber}>Increase +</button>
                <button className='btn' onClick={decreaseNumber}>Decrease -</button>
            </div>
            <hr></hr>

            <div className='textBlock'>
                <p style={{color: textColor}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ullam architecto, aspernatur libero ea facilis dolore nam eum omnis sint cupiditate quas facere velit vel nisi repellat quisquam in cumque?</p>
                <button className='btn' onClick={changeTextColor}>Change text color</button>
            </div>
            <hr></hr>

            <div className='range'>
                <h4>The range value is: {value}</h4>
                <input type='range' onChange={valueSetter} value={value}></input>
            </div>
            <hr></hr>

            <div className='someArray'>
                <h4>Some array: {someArray}</h4>
                <button className='btn' onClick={pushToArray}>Push to array</button>
                <p>Array Numbers:</p>
                <ul>
                    {someArray.map((element, index) => <li key={index}>{element}</li>)}
                </ul>
            </div>
            <hr></hr>

            <div className="useRefBlock">
                <div className="useRefContent">
                    <div className='inputBlock'>
                    <h3>useRef hook</h3>
                    <input className="inputField" ref={input1} type='text'/>
                    <button className='btn' ref={button1} onClick={buttonListener}>Push</button>
                    </div>
                    <hr></hr>

                    <div className='check'>
                        <input className="inputField" ref={checkbox1} type='checkbox'/>
                        <button className='btn' ref={button2} onClick={checkboxListener}>Push</button>
                    </div>
                </div>
            </div>
            <hr></hr>

            <div className='useEffectBlock'>
                <h3>useEffectBlock</h3>
                <ul>
                    {users.map(user => <li key={user.id}>{user.name}, email: {user.email}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default Hooks;