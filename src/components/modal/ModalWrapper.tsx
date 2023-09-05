import React from "react";
import { motion } from "framer-motion";
import Backdrop from "../backdrop/Backdrop";
import ModalProps from "./ModalTypes";

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

const ModalWrapper: React.FC<ModalProps> = ({
  className,
  handleClose,
  children,
  ...props
}) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        {...props}
        variants={animationConfig}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={!className ? "modal--wrapper" : className}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
        <button onClick={handleClose}>close</button>
      </motion.div>
    </Backdrop>
  );
};

export default ModalWrapper;
