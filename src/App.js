import './App.css';
import Parent from './components/Parent';

function App() {

    let user = {
        name: 'John',
        surname: 'Smith'
    }

    return (
        <>
            <h1>Test page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisi nec arcu sodales placerat sed ut mi. Proin sagittis scelerisque orci a elementum. Pellentesque ultricies velit a tortor vestibulum, quis pulvinar sapien aliquet. Sed justo ex, ultricies ut sapien in.</p>
            <Parent data={user}/>
        </>
    )

}

export default App;
