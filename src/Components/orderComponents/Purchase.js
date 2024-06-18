import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveNewOrder } from '../../features/Order/orderSlice'

const Purchase = () => {
    const currentUser = useSelector((state) => state.user.currentUser)
    const dispatch = useDispatch()
    const [showMess, setShowMess] = useState(false)

    const handleSaveNewOrder = async () => {
        try {
            const res = await dispatch(saveNewOrder(currentUser.id));
            setShowMess(true)
        } catch (error) {
            console.error("שגיאה בזמן ביצוע הזמנה:", error);
        }

    }

    return (
        <>
            <h1>סיום הזמנה</h1>
            <p>details</p>
            <p>details</p>
            <p>details</p>
            <p>details</p>
            <button onClick={handleSaveNewOrder}>לתשלום</button>
            {showMess && <p>"!ההזמנה בוצעה בהצלחה"</p>}
        </>
    )
}

export default Purchase
