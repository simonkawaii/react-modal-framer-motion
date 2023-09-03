import React from "react";
import { motion } from "framer-motion";
import Backdrop from "../backdrop/Backdrop";

const animationConfig = {
  hidden: {
    y: "-30vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.3,
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "30vh",
    opacity: 0,
  },
};

type ModalProps = {
  handleClose: () => void;
  children: React.ReactNode;
};

const ModalWrapper: React.FC<ModalProps> = ({ handleClose, children }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        variants={animationConfig}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="
        modal--wrapper"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div>{children}</div>
        <button onClick={handleClose}>close</button>
      </motion.div>
    </Backdrop>
  );
};

export default ModalWrapper;
