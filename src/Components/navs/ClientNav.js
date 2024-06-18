import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import Registration from '../userComponents/Registration';
import * as React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ClientNav = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const nav = useNavigate()
  const theme = createTheme({
    palette: {
      primary: {
        main: '#a76c15',
      },
      secondary: {
        main: '#00968896',
      },
    },
  });

  React.useEffect(() => {
    if (currentUser)
      nav("product")
  }, [])

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      {!currentUser ? <Registration></Registration> :
        <ThemeProvider theme={theme}>
          <Box sx={{ width: '100%', typography: 'body1' , backgroundColor:theme.palette.secondary.main}}>
            <TabContext value={value}>
              <Box>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  sx={{
                    '& .Mui-selected': {
                      color: theme.palette.secondary.main,
                    },
                  }}
                >
                  <Tab label={<ShoppingCartIcon />} value="2" component={NavLink} to="cart" />
                  <Tab label="products" value="1" component={NavLink} to="product" />
                  <Tab label="orders" value="3" component={NavLink} to="order" />
                  <Tab label="signup" value="5" component={NavLink} to="/" />
                </TabList>
              </Box>
            </TabContext>
          </Box>
        </ThemeProvider>
      }
      <Outlet></Outlet>
    </>
  )
}

export default ClientNav
