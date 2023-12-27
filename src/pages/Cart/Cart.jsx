import './cart.css';

const Cart = ({ buyFunc, cartData, setCartData }) => {
    const minusCount = (obj) => {
        const idx = cartData.findIndex(item => {
            return obj.id === item.id
        });

        if (obj.count > 1) {
            cartData[idx].count = cartData[idx].count - 1;
            setCartData([...cartData]);
        } else {
            setCartData(cartData.filter(item => {
                return item.id != obj.id
            }))
        }
    }

    const deleteProduct = (obj) => {
        setCartData(cartData.filter(item => {
            return item.id != obj.id
        }))
    }

    return (
        <section>

            <div className="container">

                <p><b>total:</b>$ {
                        cartData.reduce((acc, rec) => {
                            return acc + (rec.price * rec.count)
                        }, 0).toFixed(2)

                    }

                </p>
                <button onClick={() => {
setCartData([])
                }}>clear cart</button>


                {
                    cartData.map((item) => {
                        return <div className="cart-item">
                            <div className="cart-item-col">
                                <img src={item.image} alt="" />
                                <div>
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </div>

                            <div className="cart-item-col">
                                <p><button
                                    onClick={() => {
                                        minusCount(item)
                                    }}>-</button>{item.count}<button onClick={() => {
                                        buyFunc(item)
                                    }}>+</button></p>
                                <p><b>price:</b>${(item.count * item.price).toFixed(2)}</p>
                                <button onClick={() => {
                                    deleteProduct(item)
                                }}>delete product</button>
                            </div>
                        </div>
                    })
                }
            </div>

        </section>
    );
}

export default Cart;