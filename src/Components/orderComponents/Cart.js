import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../features/Order/orderSlice';
import { Card, CardContent, CardActions, Typography, Button, Grid, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
    const cart = useSelector((state) => state.order.cart);
    const totalPrice = useSelector((state) => state.order.totalPrice);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item));
    };

    return (
        <Grid container justifyContent="center" spacing={2} sx={{ padding: '16px' }}>
            {cart.length > 0 ? (
                <>
                    <Grid container spacing={2}>
                        {cart.map((item) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id} sx={{ marginTop:'6%'}}>
                                <Card variant="outlined">
                                    <CardContent>
                                        <Typography variant="h6" component="h2">{item.name}</Typography>
                                        <Typography variant="body1">מחיר: {item.price} ₪</Typography>
                                        <Typography variant="body2">כמות: {item.qty}</Typography>
                                    </CardContent>
                                    <CardActions>
                                        <IconButton onClick={() => handleRemoveFromCart(item)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    <Typography variant="h6" align="center" gutterBottom>סה"כ לתשלום: {totalPrice} ₪</Typography>
                    <Grid container justifyContent="center" sx={{ marginTop: '16px' }}>
                        <Button variant="contained" style={{ backgroundColor: '#009688', color: '#ffffff' }}>סיום הזמנה</Button>
                    </Grid>
                </>
            ) : (
                <Typography variant="h6" align="center" gutterBottom>אין מוצרים בסל הקניות שלך</Typography>
            )}
        </Grid>
    );
};

export default Cart;
