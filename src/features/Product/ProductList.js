import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProductItem, fetchProducts } from './productSlice';
import { useNavigate } from 'react-router-dom';
import { addToCart, fetchOrders } from '../Order/orderSlice';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';

import img from '../../Images/ItemsCart.jpeg'

const ProductList = () => {
    const arrProducts = useSelector(state => state.product?.arrProducts);
    const statusUser = useSelector(state => state.user?.statusUser);
    const nav = useNavigate();
    const dispatch = useDispatch();
    const [numItems, setNumItems] = useState(1);

    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(fetchOrders());
    }, []);

    return (
        <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '20px', padding: '2% 20px' }}>
                {arrProducts && arrProducts.map(item => (
                    <Card key={item.id} sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt={item.name}
                            height="250"
                            image={img}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                <Button size="small" onClick={() => { nav(`/${statusUser}/productItem/${item.id}`) }}> {item.name}</Button>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {statusUser === "admin" ? (
                                <>
                                    <Button size="small" onClick={() => dispatch(deleteProductItem(item.id))} startIcon={<DeleteIcon />}>מחק</Button>
                                    <Button size="small" onClick={() => nav(`/admin/productItem/${item.id}`)}>עדכן</Button>
                                </>
                            ) : (
                                <>
                                    <Button
                                        size="small"
                                        onClick={() => dispatch(addToCart({ item, numItems }))}
                                        startIcon={<AddShoppingCartIcon />}
                                        sx={{ backgroundColor: '#009688', color: '#ffffff' }}
                                    >
                                        הוסף לסל
                                    </Button>
                                    <input
                                        type="number"
                                        defaultValue="1"
                                        onChange={(e) => setNumItems(e.target.value)}
                                        style={{ width: '50px', textAlign: 'center', margin: '0 5px' }}
                                    />
                                </>
                            )}
                        </CardActions>
                    </Card>
                ))}
            </div>
            <div style={{ height: '20px' }} />
        </div>
    );
}

export default ProductList;
