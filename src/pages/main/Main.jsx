import './Main.scss'
import Articles from '../../components/Articles';
import materials from '../../data/materials.json';

function Main() {
    return (
        <div className='Main'>
            <Articles data={materials}/>
        </div>
    );
}

export default Main;