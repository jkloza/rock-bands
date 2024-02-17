import { Button, Dialog, DialogTitle, DialogContentText, DialogActions, DialogContent } from "@mui/material"

function FormSubmissionSuccess({ open, handleClose, message }) {

  return (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"Enjoy the show! 🎉 🎸"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {message}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Back to bands
            </Button>
          </DialogActions>
        </Dialog>
  );
}

export default FormSubmissionSuccess;
