
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import Button from "components/button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import myStyles from './style'

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

const Landing = () => {
    const navigate = useNavigate();
    const classes = myStyles();

    const enterSite = (evt, evtId) => {
        navigate("/creditcards")
    }


  return (
   <Container maxWidth={"xs"}>
        <Box sx={(theme) => ({ marginTop: theme.spacing(25), display: 'flex', flexDirection: 'column', alignItems: 'center'})}>
            <img src={require("assets/images/logo2.png")} className={classes.logo} alt="" />
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
     
    </Container>
  );
};

export default Landing;
