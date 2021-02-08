import React, { useState } from 'react';
import { AppBar, IconButton, Grid, Toolbar, Typography } from '@material-ui/core';
import AddIcon from "@material-ui/icons/Add";
import AddBlog from './AddBlog';

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <AppBar position="relative">
            <Toolbar id="navbar">
                <Grid container alignItems="center">
                    <Grid item xs={1}>
                        <IconButton color="secondary" onClick={() => setOpen(true)}><AddIcon /></IconButton>
                        <AddBlog open={open} setOpen={setOpen} />
                    </Grid>
                    <Grid item xs={10} container justify="center">
                        <Typography id="logo">BloggErkan</Typography>
                    </Grid>
                    <Grid item xs={1} />
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
