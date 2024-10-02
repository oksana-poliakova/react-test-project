import './Sidebar.scss';
import materials from '../../data/materials.json';

function Sidebar() {
    return (
        <div className='sidebar'>
            <nav>
                <ul>
                    <li>
                        <a href="/statehooks">Build-in React Hooks</a>
                    </li>
                    <li>
                        <a href="/welcome">Welcome</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/community">Community</a>
                    </li>
                    <li>
                        <a href="/resources">Resources</a>
                    </li>
                    <li>
                        <a href="/users">Users</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;