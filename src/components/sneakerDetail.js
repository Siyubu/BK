import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import NumericInput from 'react-numeric-input';

const styles= {
    display: 'flex',
    justifyContent: 'center',
    border: '1px solid #111111',
    padding: '2rem'
    
}
const boxStyle = {
    padding: '1rem',
    background:' rgba(255, 255, 255, 0.2)',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)'
}
const boardTitle = {
    fontWeight: '900'
}
const SneakerDetail=(props)=>{
    const {sneaker} = props.history.location.state;
    const [cartItemSelected, setCartItem]               = useState({})
    const [price, setPrice]                     = useState(sneaker.sizes[0].price);
    const [quantity, setQuantity]               = useState(sneaker.sizes[0].quantity)
    const [size, setSize]                       =useState(sneaker.sizes[0].size)
    const [sneakerSizes, setSneakerSizes]       =useState([])
    const [selecteqQuantity, setSelectedQuatity]=useState(1)

useEffect(() => {
    const options= sneaker.sizes.map(d => ({
        "value" : d.size,
        "label" : d.size
      }))
      setSneakerSizes(options)
  },[]);

const _onSizeSelection=(event)=>{
    
    setSize(event.value)
    sneaker.sizes.forEach(element => {
        if(event.value == element.size){
            setPrice(element.price)
            setQuantity(element.quantity)
        }
        
    });
  }
  const _onQuantitySelection = (event)=>{
    setSelectedQuatity(event)

  }
  const addToCart =(e)=>{
       e.preventDefault()
      const cost = price * selecteqQuantity;
      const cartItem={"picture":sneaker.picture,"brand":sneaker.brand, "model":sneaker.model, "quantity":selecteqQuantity,"cost":cost}
      setCartItem(cartItem)

  }

  const viewCart=(e)=>{
      e.preventDefault()
    props.history.push(`/cart`,cartItemSelected)
  }

    return(
        <div className="sneakercard" style={styles}>
            <img src={sneaker.picture} style={{width: '400px', objectFit: 'contain'} } alt="Sneaker"/>
            <div className="sneaker-info" style={boxStyle}>
                <h6 data-testid="detail_brand"><b style={boardTitle}>Brand:</b> {sneaker.brand}</h6>
                <h6 data-testid="detail_model"><b style={boardTitle}>Model:</b> {sneaker.model}</h6>
                <h6 data-testid="detail_price"><b style={boardTitle}> Price:</b> {price } Rwf</h6>
                <h6 data-testid="detail_quantity"><b style={boardTitle}>Available:</b> {quantity}</h6>
                <p data-testid="detail_released"><small className="text-muted">{'released on ' + sneaker.released_date}</small></p>
                <br />
                <p><b>Select Size:</b>
                <Select className=""
                options={sneakerSizes} 
                onChange={(e) =>_onSizeSelection(e)} 
                value={size} 
                placeholder={size}
                /></p>
                 <p><b>Select Quantity:</b>
                <NumericInput className="form-control" 
                min={1} 
                max={quantity} 
                value={selecteqQuantity} 
                onChange={(e)=>_onQuantitySelection(e)}
                /></p>
                <br />
                <br />
                <br />
                <button type="button" class="btn btn-primary btn-block" onClick ={(e)=>addToCart(e)}>ADD TO CART</button>
                <button type="button" class="btn btn-secondary btn-block" onClick ={(e)=>viewCart(e)}>VIEW CART</button>

            </div>
        </div>
    )
}

export default SneakerDetail;