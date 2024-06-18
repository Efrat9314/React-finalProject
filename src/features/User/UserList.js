import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchAllUsers } from "./userSlice";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const UserList = () => {
    const arrUsers = useSelector((state) => state.user.arrUsers);
    const dispatch = useDispatch()

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        dispatch(fetchAllUsers())
    }

    return (
        <>
            {console.log('arr', arrUsers)}
            <ul style={{ display: "grid", gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '20px', padding: '5% 20px' }}>
                {arrUsers && arrUsers.map(user => {
                    return <Card key={user.id} sx={{ maxWidth: 345 }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">{user.name}</Typography>
                            <p>id: {user.id}</p>
                            <p>password: {user.password}</p>
                            <p>telephone: {user.telephone}</p>
                        </CardContent>
                    </Card>

                })}
            </ul>
        </>
    )
}
export default UserList