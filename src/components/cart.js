import React from 'react'

const Cart=(props)=>{
    const detail = props.history.location.state

   const renderTableData=()=> {
       // return detail.map((element, index) => {
           const {picture, brand, model, quantity, cost} = detail
           return (
              <tr>
                 <td><img src={picture} style={{width: '200px',height:'150px', objectFit: 'contain'}}/></td>
                 <td>
                     <p>Brand: { brand}</p>
                     <p>Model: { model}</p>
                 </td>
                 <td><b>{quantity}</b></td>
                 <td><b>{cost }</b> Rwf</td>
              </tr>
           )
           
       // })
     }

    const renderTableHeader =() =>{
        let header = ['Picture', 'info', 'quantity', 'cost']
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }
    return(
        <div>
            <table id='cart'>
               <tbody>
                 <tr>{renderTableHeader()}</tr>
                  {renderTableData()}
               </tbody>
            </table>
        </div>
    )
}

export default Cart;