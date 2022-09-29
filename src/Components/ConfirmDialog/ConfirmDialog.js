import React from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from "@mui/material/DialogActions";
import DialogueTitle from "@mui/material/DialogTitle"
import { Button } from "@mui/material";

const ConfirmDialog = ({ open, onHandleClose, messageDialog, messageOption1, messageOption2 }) => {
    return (
        <Dialog
            open={open}
            keepMounted
            onClose={() => onHandleClose(0)}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{messageDialog}</DialogTitle>
            <DialogActions>
                <Button onClick={() => onHandleClose(1)}>{messageOption1}</Button>
                <Button onClick={() => onHandleClose(2)}>{messageOption2}</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDialog;