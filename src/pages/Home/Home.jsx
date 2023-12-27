import './home.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../components/Card/Card';


const Home = ({buyFunc}) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios('https://fakestoreapi.com/products')
            .then(({ data }) => {
                console.log(data);
                setProduct(data)
            })
    }, [])

    return (       
        <section>
            <div className="container">
                <div className="row">

                    {
                        product.length == 0
                       ? <div className="preloader"><div class="lds-ring"><div></div><div></div><div></div><div></div></div></div>
                       : product.map(item => {
                            return <div key={item.id} className='col-4'>
                               <Card buyFunc={buyFunc} item={item}/>

                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    );
}
export default Home;