import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllOrders } from './orderApi'
import { addOrder } from "./orderApi";

const initialState = {
    arrOrders: [],
    cart: [],
    items: 0,
    totalPrice: 0

}
export const fetchOrders = createAsyncThunk(
    'orders/fetchOrders',
    async (thunkAPI) => {
        const res = await fetchAllOrders();
        return res;
    }
)

export const saveNewOrder = createAsyncThunk(
    'orders/saveNewOrder',
    async (id, thunkAPI) => {
        console.log('saveOrder user: ', id)
        console.log('currentCart: ', thunkAPI.getState().order.cart)
        const currentDate = new Date().toISOString();
        const futureDate = getFutureDate(7);
        const newOrder = { userId: id, cart: thunkAPI.getState().order.cart,orderDate:currentDate, dueDate:futureDate }
        console.log('send to orderApi', newOrder)
        const res = await addOrder(newOrder);
        return res;
    }
)

const getFutureDate=(numDays)=>{
        const futureDate = new Date();
        futureDate.setDate(new Date().getDate()+numDays);
        return futureDate.toISOString();
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        // updateCart: (state, action) => {
        //     let index=state.arrOrders.findIndex(x=> x.id==action.payload.id)
        //     state.arrOrders.splice(index,1,action.payload)
        // },
        addToCart: (state, action) => {
            console.log(action.payload)
            let { item } = action.payload;
            let { numItems } = action.payload;
            let index = state.cart.findIndex(x => x.id == item.id)
            if (index == -1) {
                let newItem = { ...item, qty: numItems };
                state.cart.push(newItem)
            }
            else {
                state.cart[index].qty = parseFloat(state.cart[index].qty) + parseFloat(numItems);
            }
            state.items += parseInt(numItems);
            state.totalPrice += parseInt(numItems) * parseFloat(item.price);

        },
        removeFromCart: (state, action) => {
            console.log('removeCart', action.payload)
            let index = state.cart.findIndex(x => x.id == action.payload.id)
            state.cart.splice(index, 1)
            state.items -= parseInt(action.payload.qty);
            state.totalPrice -= (parseFloat(action.payload.price) * parseFloat(action.payload.qty));
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrders.fulfilled, (state, action) => {
                state.status = "fullfilled"

                state.arrOrders = action.payload
            })
            .addCase(saveNewOrder.fulfilled, (state, action) => {
                state.status = "fullfilled"
                state.cart = []
                state.items = 0
                state.totalPrice = 0
            })
    },

})
export const { updateOrder, addToCart, removeFromCart } = orderSlice.actions
export default orderSlice.reducer;