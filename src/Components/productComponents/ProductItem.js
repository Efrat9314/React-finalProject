import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { addNewProduct, getProductItem, updateProductItem } from '../../features/Product/productSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, TextField, Typography, Container, Dialog, DialogContent, DialogTitle, DialogActions, Grid } from '@mui/material'; // ייבוא מרכיבים מ-Material-UI

const ProductItem = ({ type }) => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const nav = useNavigate();
    const { id } = useParams();
    const statusUser = useSelector(state => state.user?.statusUser);
    const [item, setItem] = useState({
        name: '',
        price: '',
        description: '',
        picture: '',
        company: ''
    });
    const [open, setOpen] = useState(false); // לפתיחת/סגירת תיבת הדו-שיח

    const onSubmit = (data) => {
        if (type === "update") {
            data = item;
            dispatch(updateProductItem({ data, id }));
        } else {
            dispatch(addNewProduct(data));
            emptyItem();
        }
    };

    useEffect(() => {
        getItem();
    }, [id]);

    const getItem = async () => {
        id ? await dispatch(getProductItem(id)).then(res => setItem(res.payload)) : emptyItem();
    };

    const emptyItem = () => {
        setItem({
            name: '',
            price: '',
            description: '',
            picture: '',
            company: ''
        });
    };

    const handleChange = e => {
        if (type !== "display") {
            const { name, value } = e.target;
            setItem(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleImageClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container maxWidth="sm"> 
            <Button onClick={() => { nav(-1) }} variant="contained" color="primary" style={{ marginTop: '2%' }}>חזור</Button>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2} sx={{ marginTop: '2%' }}>
                    <Grid item xs={12}>
                        <TextField {...register("name",{ required: true }) } label="שם מוצר" fullWidth variant="outlined" value={item?.name} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField {...register("price",{ required: true })} label="מחיר" fullWidth variant="outlined" value={item?.price} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField {...register("description",{ required: true })} label="תיאור" multiline rows={4} fullWidth variant="outlined" value={item?.description} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField {...register("company")} label="חברה" fullWidth variant="outlined" value={item?.company} onChange={handleChange} />
                    </Grid>
                    {/* <Grid item xs={12}>
                        <Button onClick={handleImageClick} variant="contained" color="primary">בחר תמונה</Button>
                    </Grid> */}
                    {statusUser === 'admin' && 
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary">{type === "update" ? "עדכן" : "הוסף"}</Button>
                        </Grid>
                    }
                </Grid>
            </form>
            {/* <Dialog open={open} onClose={handleClose}>
                <DialogTitle>בחר תמונה</DialogTitle>
                <DialogContent>
                     קןד לבחירת תמונה 
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">סגור</Button>
                </DialogActions>
            </Dialog> */}
        </Container>
    )
};

export default ProductItem;
