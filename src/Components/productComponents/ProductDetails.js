import React from 'react'

export default function ProductDetails({productItem}){
  return (
   <div>
    <h1>{productItem.name}</h1>
    <p>{productItem.description}</p>
    <p>{productItem.content}</p>
    <p>{productItem.company}</p>
    <p>{productItem.price}</p>
    <p>{productItem.prodDate}</p>
   </div>
  )
}

