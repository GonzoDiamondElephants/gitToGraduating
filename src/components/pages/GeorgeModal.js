import React from "react";
// import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ProblemDomain from "./ProblemDomain";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

export default function GeorgeModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <img 
      className="urgent" 
      src="https://i.imgur.com/tFrtnwS.gif" 
      alt="" />
      <img
        onClick={handleOpen}
        src="https://static.vecteezy.com/system/resources/thumbnails/000/153/503/small/grunge-air-mail-background.jpg"
        alt="envelope"
        className="envelope"
      />

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
        <div className="paper">
          <div className="letter">
            <ProblemDomain />
          </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
