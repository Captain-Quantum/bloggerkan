import React from 'react';
import { Fab, Grid, useScrollTrigger, useTheme, Zoom } from "@material-ui/core";
import Navbar from './components/Navbar';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import { KeyboardArrowUp } from '@material-ui/icons';

function App() {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });
    const theme = useTheme();

    const handleClick = e => {
        const anchor = (e.target.ownerDocument || document).getElementById('navbar');

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <>
            <Grid
                className="root-grid"
                container
                direction="column"
                alignItems="center"
                justify="center"
            >
                <Navbar />
                <Blogs />
                <Footer />
            </Grid>
            <Zoom in={trigger}>
                <Fab
                    onClick={handleClick}
                    role="presentation"
                    style={{ bottom: theme.spacing(2), right: theme.spacing(2), position: 'fixed' }}
                    color="secondary"
                >
                    <KeyboardArrowUp />
                </Fab>
            </Zoom>
        </>
    )
}

export default App;

