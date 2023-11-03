import { useContext } from "react";
import { CartContext } from "../contexts/CartContext"

export const CartContainer = () => {
    const { cartlist, vaciarCarrito } = useContex(CartContext)
    // console.log(cartlsit)
    return (
        <div className="w_100">
            {cartlist.map(product => <div> 
                <img className="w_25" src={product.imagUrl} alt=""
                Producto: {product.name} - Price: {product.price}
                <button className="btn btn-danger"> x </button>
                <hr/>
            </div>)
            }
            Precio Total:
            <br />
            <button>
                className""btn btn-outline-dark"
                onClik={vaciarCarrito}
                
                Vaciar Carrito
            </button>
            <button>Terminar Compra</button>
        </div>
    )
}