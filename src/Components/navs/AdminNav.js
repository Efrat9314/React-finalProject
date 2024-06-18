import * as React from 'react';
import { NavLink, Outlet, BrowserRouter } from "react-router-dom";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const AdminNav = () => {
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

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%', typography: 'body1', backgroundColor:theme.palette.secondary.main }}>
          <TabContext value={value}>
            <Box>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                sx={{
                  '& .Mui-selected': {
                    color: theme.palette.primary.main,
                  },
                }}
              >
                <Tab label="products" value="1" component={NavLink} to="product" />
                <Tab label="addproduct" value="2" component={NavLink} to="addproduct" />
                <Tab label="orders" value="3" component={NavLink} to="order" />
                <Tab label="useres" value="4" component={NavLink} to="user" />
                <Tab label="logout" value="5" component={NavLink} to="/" />
              </TabList>
            </Box>
          </TabContext>
        </Box>
      </ThemeProvider>
      <Outlet />
    </>
  );
};

export default AdminNav;
