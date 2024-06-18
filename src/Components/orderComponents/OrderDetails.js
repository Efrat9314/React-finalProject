import React, { useState } from "react";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartDetails from "./CartDetails";

const OrderDetails = ({ oneOrder }) => {
    const [openCart, setOpenCart] = useState(false);
    const [id, setId] = useState();

    const handleCartClick = (orderId) => {
        setOpenCart(!openCart);
        setId(orderId);
    };

    return (
        <>
            {oneOrder != null && (
                <div>
                    <TableContainer>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>{oneOrder.id}</TableCell>
                                    <TableCell>{oneOrder.orderDate.slice(0, 10)}</TableCell>
                                    <TableCell>{oneOrder.dueDate.slice(0, 10)}</TableCell>
                                    <TableCell>
                                        <Button onClick={() => handleCartClick(oneOrder.id)} startIcon={<ShoppingCartIcon />} variant="contained">
                                            Cart
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {openCart && oneOrder.id === id && <CartDetails cart={oneOrder.cart} />}
                </div>
            )}
        </>
    );
};

export default OrderDetails;
