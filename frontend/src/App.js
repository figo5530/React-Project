import './style/style.css'
import './style/bootstrap.css'
import City from './City'
import ShopsContainer from './shops/ShopsContainer';
import { Route, Switch } from 'react-router-dom'
import HomePage from './homepage/HomePage'
import CityContainer from './CityContainer'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import React from 'react'
import { useHistory } from 'react-router-dom';

function App() {
  const history = useHistory()
  const pages = ["Home", "Shops", "City"]
  const handleClick = (page) => {
    if(page === 'Home') {
      history.push('/')
    }else {
      history.push(`/${page}`)
    }
  }
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              WELCOME
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handleClick(page)}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Switch>
        <Route path='/shops' render={routerProps => <ShopsContainer {...routerProps} />} />
        <Route exact path='/' render={routerProps => <HomePage {...routerProps} />} />
        <Route path='/city' render={routerProps => <City {...routerProps} />} />
        <Route path='/boston/shops' render={() => <CityContainer city="Boston" />} />
        <Route path='/newyork/shops' render={() => <CityContainer city="New York" />} />
        <Route path='/sanfrancisco/shops' render={() => <CityContainer city="San Francisco" />} />
        <Route path='/seattle/shops' render={() => <CityContainer city="Seattle" />} />
      </Switch>
    </>
  )
}
export default App;
