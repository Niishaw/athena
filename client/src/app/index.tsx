import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import CssBaseline from '@mui/material/CssBaseline';
import AthenaRouter from '../router';


const App = () => {
    return (
        <SnackbarProvider
            maxSnack={3}
            preventDuplicate
						autoHideDuration={3000}
            anchorOrigin={{
                vertical: "top",
                horizontal: "center",
            }}
        >
            <BrowserRouter>
                <CssBaseline />
                <AthenaRouter />
            </BrowserRouter>
        </SnackbarProvider>
    )
}

export default App;