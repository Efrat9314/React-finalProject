import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser, setAdmin } from '../../features/User/userSlice';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

function SignIn() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    password: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      name: user.userName, // Changed from 'email' to 'userName'
      password: user.password,
    });
    CheckUser();
  };

  const CheckUser = async () => {
    try {
      if (user.userName === "1" && user.password === "1") { // Changed the condition
        await dispatch(setAdmin("admin"));
        nav("/admin/product");
      } else {
        await dispatch(loginUser(user));
        nav("/client");
      }
    } catch (error) {
      console.error('error occurred', error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="userName"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={(e) => setUser({ ...user, userName: e.target.value })}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              {/* Removed the 'Forgot password?' and "Don't have an account? Sign Up" links */}
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignIn;

// const Login = () => {
//   const currentUser = useSelector(state => state.user.currentUser);

//   const dispatch = useDispatch();
//   const nav = useNavigate();

//   const [user, setUser] = useState({
//     userName: "",
//     password: ""
//   });

//   const CheckUser = async () => {
//     try {
//       if (user.userName == 1 && user.password == 1) {
//         await dispatch(setAdmin("admin"))
//         nav("/admin/product");
//       }
//       else {
//         await dispatch(loginUser(user))
//         nav("/client/product")
//       }

//     }
//     catch (error) {
//       console.error('error occurred', error);
//     }
//   }

//   return (
//     <>
//       <input type="text" placeholder='insert userName' onChange={(e) => setUser({ ...user, userName: e.target.value })}></input>
//       <input type="text" placeholder='password' onChange={(e) => setUser({ ...user, password: e.target.value })}></input>
//       <input type="button" value="login" onClick={CheckUser}></input>
//     </>
//   )
// }