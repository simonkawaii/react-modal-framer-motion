import React from "react";
import { motion } from "framer-motion";
import ReactDOM from "react-dom";

type BackdropProps = {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  onEnterKey?: (event: React.KeyboardEvent<HTMLElement>) => void;
};

const Backdrop: React.FC<BackdropProps> = ({ children, onClick }) =>
  ReactDOM.createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      tabIndex={0}
      onClick={onClick}
      className="backdrop--overlay"
    >
      {children}
    </motion.div>,
    document.body
  );

export default Backdrop;
