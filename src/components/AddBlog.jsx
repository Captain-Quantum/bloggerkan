import React, { forwardRef } from 'react';
import {
    Grid,
    Button,
    DialogContentText,
    DialogTitle,
    Dialog,
    DialogActions,
    Slide,
    TextField
} from "@material-ui/core";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

function AddBlog({ open, setOpen }) {
    const handleSave = () => {

    }

    //? Make a good dialog i know it is easy for you good games

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => setOpen(false)}
        >
            <DialogTitle>Add New Blog</DialogTitle>
            <DialogContentText>
                Don't forget to save your blog!
                </DialogContentText>
            <TextField
                label="Blog Title"
                variant="outlined"
            />
            <DialogActions>
                <Button onClick={() => setOpen(false)} color="primary">
                    cancel
                </Button>
                <Button onClick={handleSave} color="primary">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddBlog;
