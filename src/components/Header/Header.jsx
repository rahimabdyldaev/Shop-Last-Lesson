import './header.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState ,useEffect} from 'react';
import Cart from '../../pages/Cart/Cart';
import App from '../../App';

const Header = ({cartData}) => {
    const [category,setCategory]=useState([]);

useEffect(()=>{
axios ('https://fakestoreapi.com/products/categories')
.then(({data})=>setCategory(data));
},[])

    return (

        <header>
          
            <div className="container header-container">
  
<h1><Link to={'/'}>Shop</Link> </h1>

                <nav>
{
    category.map(item=>{
        return <Link key={item} to ={`/category/${item}`}>{item}</Link>
    })
}


                    <Link to={'/'}>Home</Link>
                    <Link to={'/cart' } >Cart </Link>
                    <Link to={'/cart' } > <b>Cумма</b> :$
                    {
                        cartData.reduce((acc, rec) => {
                            return acc + (rec.price * rec.count)
                        }, 0).toFixed(2)

                    }</Link>

                    
                </nav>
             
            </div>
        </header>
    );
}

export default Header;