import React from "react";
// import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

export default function AnimatedModal() {
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
        onClick={handleOpen}
        src="https://raw.githubusercontent.com/testOrg762/testPic/master/georgeWeasley.png"
        alt="weasley brothers"
        id="weasleyBros"
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
            <div className="player">
              <iframe
                title="problemDomain"
                width="560"
                height="375"
                src="https://www.youtube.com/embed/E_oCHoUderA"
                frameborder="55"
                allow="accelerometer; autoplay; encrypted-media;  picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
