import { Route, Routes } from 'react-router-dom'
import Typography from '../components/typography';
import {AppBar, Toolbar} from '../components/appBar';
import Grid from 'components/grid';

import config from "./config";

import Home from './layouts/home';

const AthenaRouter = () => {

    return (
        <>
           <AppBar position="fixed" sx={(theme) => ({zIndex: theme.zIndex.drawer + 1, transition: theme.transitions.create(["width", "margin"], { easing: theme.transitions.easing.sharp, duration: theme.transitions.duration.leavingScreen})})} color="primary">
                <Toolbar>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Typography variant='h6' textAlign="center" noWrap sx={(theme) => ({ flexGrow: 1, display: 'none', [theme.breakpoints.up('sm')]: {display: 'block'}})}>
                                {config.layouts.home.heading}
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
           </AppBar>
           <Routes>
                <Route path="/*" element={<Home />} />
           </Routes>
        </>
    )

  }

export default AthenaRouter