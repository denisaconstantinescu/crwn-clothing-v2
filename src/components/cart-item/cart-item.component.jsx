import './cart-item.style.scss'


const CartItem = ({item})=> {

    const {name, price, imageUrl,quantity, id} = item;
    return (
        <div className="cart-item-container">
            <img src={imageUrl} alt={`${id}`}/>
            <div className="item-details">
                <span className="name">{name}</span>
                <span>{quantity} * ${price}</span>
            </div>

        </div>
    )

}

export default CartItem;