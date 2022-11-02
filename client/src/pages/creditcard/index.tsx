import { useState, useEffect } from "react";

import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography";
import Cards from "react-credit-cards";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import Button from "@mui/material/Button";
import "react-credit-cards/es/styles-compiled.css";
import { countries } from "./config";

const Details = () => {

	const iCreditCard = {
		number: "",
		name: "",
		expiry: "",
		cvc: "",
		country: {name: "", code: ""}
	}

	const [cardDetails, setCardDetails] = useState<any>(iCreditCard);
	const [focus, setFocus] = useState<any>("");
	const [month, setMonth] = useState<any>("");
	const [expiry, setExpiry] = useState<any>("");

	useEffect(() => {
		setCardDetails({...cardDetails, expiry: month.concat(expiry)})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [expiry, month])

	const handleSetCountry = (evt, id) => {
		console.log(id.props.id)
		setCardDetails({...cardDetails, country: {name: evt.target.value, code: id.props.id}});
	}

	const setCardNumber = (evt) => {
		setCardDetails({...cardDetails, number: evt.target.value});
	}

	const setCardName = (evt) => {
		setCardDetails({...cardDetails, name: evt.target.value});
	}

	const handleSetMonth = (evt: SelectChangeEvent) => {
		setMonth(evt.target.value);
	}

	const handleSetExpiry = (evt: SelectChangeEvent) => {
		setExpiry(evt.target.value);
	}

	const setCVCNumber = (evt) => {
		setCardDetails({...cardDetails, cvc: evt.target.value})
	}

	console.log(cardDetails)

    return (
        <Container maxWidth="lg" sx={{mt:15}}>
           <Grid container spacing={1}>
							<Grid item xs={12}>
								<Cards 
									number={cardDetails.number}
									name={cardDetails.name}
									expiry={cardDetails.expiry}
									cvc={cardDetails.cvc}
									focused={focus}
								/>
							</Grid>
							<Container maxWidth="sm">
							<Box className="col-sm-11">
								<Grid container spacing={1}>
									<Grid item xs={12}>
										<Typography variant="subtitle1" sx={{mt: 2}}>Select Country</Typography>
									</Grid>
								</Grid>
								<Grid container spacing={1}>
									<Grid item xs={12} sx={{mt: 2}}>
										<FormControl fullWidth size="small">
											<InputLabel id="month-select">Country</InputLabel>
											<Select
												label="Country"
												onChange={handleSetCountry}
												name="country"
												value={cardDetails.country.name}
												onFocus={(evt) => setFocus(evt.target.name)}
											>
												<MenuItem value="">
													<em></em>
												</MenuItem>
												{countries.map((country) => (
													<MenuItem key={country.code} id={country.code} value={country.name}>{country.name}</MenuItem>
												))}
											</Select>
										</FormControl>
									</Grid>
								</Grid>
						 </Box>
							<Box className="col-sm-11">
								<Typography variant="subtitle1" sx={{mt: 2}}>Card Number</Typography>
								<TextField 
									size="small"
									fullWidth
									type="tel"
									name="number"
									onChange={setCardNumber}
									inputProps={{maxLength: 16}}
									onFocus={(evt) => setFocus(evt.target.name)}
								/>
						 </Box>
						 <Box className="col-sm-11">
								<Typography variant="subtitle1" sx={{mt: 2}}>Card Name</Typography>
								<TextField 
									size="small"
									fullWidth
									type="tel"
									name="name"
									onChange={setCardName}
									onFocus={(evt) => setFocus(evt.target.name)}
								/>
						 </Box>
						 <Box className="col-sm-11">
								<Grid container spacing={1}>
									<Grid item xs={4}>
										<Typography variant="subtitle1" sx={{mt: 2}}>Expiration Date</Typography>
									</Grid>
								</Grid>
								<Grid container spacing={1}>
									<Grid item xs={4} sx={{mt: 2}}>
										<FormControl sx={{ minWidth: 120}} size="small">
											<InputLabel id="month-select">Month</InputLabel>
											<Select
												label="Month"
												onChange={handleSetMonth}
												name="month"
												onFocus={(evt) => setFocus(evt.target.name)}
											>
												<MenuItem value="">
													<em></em>
												</MenuItem>
												<MenuItem value="01">January</MenuItem>
												<MenuItem value="02">February</MenuItem>
												<MenuItem value="03">March</MenuItem>
												<MenuItem value="04">April</MenuItem>
												<MenuItem value="05">May</MenuItem>
												<MenuItem value="06">June</MenuItem>
												<MenuItem value="07">July</MenuItem>
												<MenuItem value="08">August</MenuItem>
												<MenuItem value="09">September</MenuItem>
												<MenuItem value="10">October</MenuItem>
												<MenuItem value="11">November</MenuItem>
												<MenuItem value="12">December</MenuItem>
											</Select>
										</FormControl>
									</Grid>
									<Grid item xs={4} sx={{mt: 2}}>
									<FormControl sx={{ minWidth: 120}} size="small">
											<InputLabel id="year-select">Year</InputLabel>
											<Select
												label="Year"
												name="year"
												onChange={handleSetExpiry}
												onFocus={(evt) => setFocus(evt.target.name)}
											>
												<MenuItem value="">
													<em></em>
												</MenuItem>
												<MenuItem value="22">2022</MenuItem>
												<MenuItem value="23">2023</MenuItem>
												<MenuItem value="24">2024</MenuItem>
												<MenuItem value="25">2025</MenuItem>
												<MenuItem value="26">2026</MenuItem>
												<MenuItem value="27">2027</MenuItem>
												<MenuItem value="28">2028</MenuItem>
												<MenuItem value="29">2029</MenuItem>
												<MenuItem value="30">2030</MenuItem>
											</Select>
										</FormControl>
									</Grid>
									<Grid item xs={4} sx={{mt: 2}}>
										<TextField 
											size="small"
											type="password"
											label="CVV"
											fullWidth
											name="cvc"
											onChange={setCVCNumber}
											inputProps={{maxLength: 3}}
											onFocus={(evt) => setFocus(evt.target.name)}
										/>
									</Grid>
								</Grid>
						 </Box>
						 <Button fullWidth variant="contained" sx={{mt: 5}}>Add Card</Button>
						</Container>
					 </Grid>
        </Container>
    )
}

export default Details;