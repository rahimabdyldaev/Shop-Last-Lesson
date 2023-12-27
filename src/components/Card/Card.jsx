import { Link } from 'react-router-dom';
import './card.css';


const Card = ({ item, buyFunc }) => {


    const textFunc = (str = 'Hello World', length = 10) => {
        return str.length > length
            ? str.substr(0, length - 3).trim() + '...'
            : str
    }

    return (
        <div className='card'>
            <Link to={`/details/${item.id}`}></Link>
            <img src={item.image} alt="" />
            <h2><Link to={`/details/${item.id}`}> {textFunc(item.title, 30)}</Link></h2>
            <p><Link to={`/details/${item.id}`}>{textFunc(item.description, 40)}</Link></p>
            <p>{item.category}</p>
            <div className="card-bottom">
                <p>${item.price}</p>
                <button onClick={() => {
                    buyFunc(item)
                }}>buy</button>
            </div>
        </div>
    );
}

export default Card;