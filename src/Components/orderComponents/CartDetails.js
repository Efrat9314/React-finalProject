import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



const CartDetails = ({ cart }) => {
  return (
    <>
      {console.log('cart', cart)}
      <div style={{display:'grid',gridTemplateColumns: 'repeat(6, 1fr)' }}>
      {cart.map(p => {
        return <Card key={p.id} sx={{ maxWidth: 280}}>
          <CardContent >
            <Typography gutterBottom variant="h5" component="div">{p.name}</Typography>
            <p>id: {p.id}</p>
            <p>qty: {p.qty}</p>
            <p>price: {p.price}</p>
          </CardContent>
        </Card>
      })}
      </div>
    </>
  )
}

export default CartDetails