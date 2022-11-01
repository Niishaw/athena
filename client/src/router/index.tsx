import React from 'react';
import { Route, Routes } from 'react-router-dom'
import PageContainer from '../components/pageContainer';
import Typography from '../components/typography';
import {AppBar, Toolbar} from '../components/appBar';
import IconButton from '../components/iconButton';
import Icon from '../components/icon';

import config from "./config";

const AthenaRouter = () => {

    return (
        <>
           <AppBar position="fixed" sx={(theme) => ({zIndex: theme.zIndex.drawer + 1, transition: theme.transitions.create(["width", "margin"], { easing: theme.transitions.easing.sharp, duration: theme.transitions.duration.leavingScreen})})} color="primary">
                <Toolbar>
                    <IconButton color="inherit" aria-label="open drawer" edge="start">
                        <Icon label="Menu" />
                    </IconButton>
                    <Typography variant='h6' noWrap sx={(theme) => ({ flexGrow: 1, display: 'none', [theme.breakpoints.up('sm')]: {display: 'block'}})}>
                        {config.layouts.home.heading}
                    </Typography>
             
                </Toolbar>
           </AppBar>
           <Routes>
                <Route />
           </Routes>
        </>
    )

  }

export default AthenaRouter