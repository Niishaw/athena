import Typography from "components/typography";
import { useState, useEffect, useContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Box from "components/box";
import Button from "components/button";
import Grid from "components/grid";
import PageContainer from "components/pageContainer";
import myStyles from './style'

import CreditCards from "containers/creditcard";

function CopyRight(props: any) {
	return (
		<Typography variant="body2" color="text.secondary" align="center" {...props}>
			{'Copyright @ '}
			<a href="https://www.facebook.com/heinl1" target="_blank" rel="noreferrer">
				Hein Liebenberg
			</a>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	)
}

const Home = () => {
    const navigate = useNavigate();
    const classes = myStyles();

    const enterSite = (evt, evtId) => {
        navigate("/creditcards")
    }


  return (
   <PageContainer maxWidth={"xs"}>
        <Box sx={(theme) => ({ marginTop: theme.spacing(25), display: 'flex', flexDirection: 'column', alignItems: 'center'})}>
            <img src={require("assets/images/logo2.png")} className={classes.logo} />
            <Typography variant="h5" sx={{mt: 2}} textAlign="center">
                Welcome to Athena Credit Card Manager.
            </Typography>
            <Grid container spacing={2} sx={{ mt: 2}}>
                <Grid item xs={12}>
                    <Button fullWidth variant="contained" color="primary" onClick={enterSite}>
                        Enter Site
                    </Button>
                </Grid>
            </Grid>
        </Box>
        <CopyRight sx={{mt: 6, mb: 4}}/>
        <Routes>
            <Route path="creditcards/*" element={<CreditCards />} />
        </Routes>
    </PageContainer>
  );
};

export default Home;
