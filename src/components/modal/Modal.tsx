import { AnimatePresence } from "framer-motion";
import ModalWrapper from "./ModalWrapper";
import React from "react";
import ModalProps from "./ModalTypes";

interface Modal extends ModalProps {
  isOpen: boolean;
}

const Modal: React.FC<Modal> = ({
  className,
  children,
  isOpen,
  handleClose,
  ...props
}) => {
  return (
    <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
      {isOpen && (
        <ModalWrapper
          {...props}
          className={className}
          handleClose={handleClose}
        >
          {children}
        </ModalWrapper>
      )}
    </AnimatePresence>
  );
};

export default Modal;
