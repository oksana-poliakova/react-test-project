import './App.css';

function App() {

    // let name = "Oksana";

    // function getName() {
    //     return "My name is "
    // }

    // function getTestText() {
    //     return console.log("Some test text");
    // }

    // return (
    //     <>
    //     {getName()} {name};
    //     <p></p>
    //     <button onClick={getTestText}>Get some text</button>
    //     </>
    // );

    {/* Work with arrays */}
    // const students = [
    //     { name: "Alex", surname: "Dou", phone: "06604567893" },
    //     { name: "Maria", surname: "Smith", phone: "06712345678" },
    //     { name: "John", surname: "Doe", phone: "06898765432" },
    //     { name: "Anna", surname: "Taylor", phone: "06623456789" },
    //     { name: "Mark", surname: "Johnson", phone: "06734567890" }
    // ];

    // return (
    //     <ul>
    //         {students.map((element, index) => <li key={index}> {element.name} {element.surname} {element.phone}</li>)}
    //     </ul>
    // )

    {/* CSS styles inside jsx */}

    // let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisi nec arcu sodales placerat sed ut mi. Proin sagittis scelerisque orci a elementum. Pellentesque ultricies velit a tortor vestibulum, quis pulvinar sapien aliquet. Sed justo ex, ultricies ut sapien in, dictum dictum orci. Maecenas purus arcu, tristique rhoncus tincidunt sed, laoreet vitae leo. Maecenas et sem sit amet sem cursus mollis non ut arcu. Aliquam eleifend sem tellus. Curabitur vehicula lacinia aliquet. Maecenas ullamcorper, tellus id varius tempus, dui mauris convallis felis, non ultricies purus lacus vel eros.";
    
    // const myStyle = {
    //     'fontWeight': 'bold',
    //     'fontSize': '20px',
    //     'color': 'green',
    //     'padding': '20px'
    // }

    // const violetTextStyle = 'violet-text';

    // return (
    //     <>
    //         <p style={{color: 'blue', fontSize: '18px', fontStyle: 'italic', padding: '20px'}}>{longText}</p>
    //         <p style={myStyle}>{longText}</p>
    //         <p className={violetTextStyle}>{longText}</p>
    //     </>
    // )

    {/* This component conditionally renders a <h1> element with "Hello World!" if the variable 'x' equals 0 */}

    let x = 0

    return (
        <>
            { x === 0 &&
                (<h1>Hello World!</h1>)
            }
        </>
    )
}

export default App;
