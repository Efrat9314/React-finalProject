import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import OrderDetails from "../../Components/orderComponents/OrderDetails"
import { fetchOrders } from "./orderSlice"
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const OrderList = () => {
  const [arrOrders, setArrOrders] = useState(useSelector((state) => state.order.arrOrders))
  const currentUser = useSelector((state) => state.user.currentUser)
  const statusUser = useSelector((state) => state.user.statusUser)

  const dispatch = useDispatch()

  return (
    <>
      {console.log('arrOrders', arrOrders)}
        <div>
        <TableContainer sx={{ marginTop: '2%'}}> 
          <Table>
            <TableHead>
              <TableRow sx={{display:'grid',gridTemplateColumns: 'repeat(7, 1fr)'}}>
                <TableCell>Order Number</TableCell>
                <TableCell>Order Date</TableCell>
                <TableCell></TableCell>
                <TableCell>Due Date</TableCell>
                <TableCell></TableCell>
                <TableCell>Cart</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <ul>
                {arrOrders.map(order => (
                  <div key={order.id}>
                    <OrderDetails oneOrder={statusUser != "client" || order.userId == currentUser.id ? order : null} />
                  </div>
                ))}
              </ul>
            </TableBody>
          </Table>
        </TableContainer>
      </div>

    </>
  )
}

export default OrderList
