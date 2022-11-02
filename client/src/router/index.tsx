import { Route, Routes, useNavigate } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import {AppBar, Toolbar} from '@mui/material';
import Grid from '@mui/material/Grid';
import IconButton from "@mui/material/IconButton"
import ArrowBack from "@mui/icons-material/ArrowBack"

import config from "./config";

import Landing from 'pages/landingPage';
import CreditCards from 'pages/creditcard';

const AthenaRouter = () => {

	const navigate = useNavigate()
	const handleBackClick = () => {
		navigate("/")
	}

    return (
        <>
           <AppBar position="fixed" sx={(theme) => ({zIndex: theme.zIndex.drawer + 1, transition: theme.transitions.create(["width", "margin"], { easing: theme.transitions.easing.sharp, duration: theme.transitions.duration.leavingScreen})})} color="primary">
                <Toolbar>
									<IconButton edge="start" color="inherit" onClick={handleBackClick}>
										<ArrowBack  />
									</IconButton>
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
                <Route path="/*" element={<Landing />} />
								<Route path="/creditcards" element={<CreditCards />} />
           </Routes>
        </>
    )

  }

export default AthenaRouter